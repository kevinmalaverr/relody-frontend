// babel utilities
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { Provider } from 'react-redux'
import getStore from './redux/store'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import { loadableReady } from '@loadable/component'
import { changeTheme, loadTheme } from './utils/themeSelector'

const history = createBrowserHistory()
const preloadedState = window.__PRELOADED_STATE__
const store = getStore(preloadedState)

// erase preloaded state from window and DOM
delete window.__PRELOADED_STATE__
document.getElementById('preloadedState').remove()

function KeyPress (e) {
  var evtobj = window.event ? event : e
  if (evtobj.key === 'y' && evtobj.ctrlKey) changeTheme()
}

const dev = true

if (dev) {
  document.onkeydown = KeyPress
}

loadTheme()

loadableReady(() => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app'))
})
