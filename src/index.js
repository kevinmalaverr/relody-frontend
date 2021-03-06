// babel utilities
// import 'core-js/stable'
// import 'regenerator-runtime/runtime'

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
console.log(preloadedState)
const store = getStore({
  header: {},
  login: {},
  tutorials: { loading: true }
})

// erase preloaded state from window and DOM
delete window.__PRELOADED_STATE__
document.getElementById('preloadedState').remove()

const renderFunction = process.env.SSR === 'true' ? ReactDOM.hydrate : ReactDOM.render

if (process.env.ENV === 'development') {
  import('./utils/development')
    .then(module => {
      console.log('development')
      module.default()
    })
    .catch(console.error)
}

loadableReady(() => {
  renderFunction(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app'))
})
