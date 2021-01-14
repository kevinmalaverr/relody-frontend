import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { Provider } from 'react-redux'
import getStore from './redux/store'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import { loadableReady } from '@loadable/component'

const history = createBrowserHistory()
const preloadedState = window.__PRELOADED_STATE__
const store = getStore(preloadedState)

delete window.__PRELOADED_STATE__

loadableReady(() => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app'))
})
