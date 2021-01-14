import React, { useEffect } from 'react'
import './styles/App.css'
import loadable from '@loadable/component'
import { loadTheme, changeTheme } from './utils/themeSelector'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Tutorial from './pages/Tutorial'
import Songs from './pages/Songs'

// const Songs = loadable(() => import('./pages/Songs'), { fallback: <p>loading...</p> })

export const App = () => {
  return (
    <div>
      <button onClick={changeTheme}>cambiar</button>
      <BrowserRouter>
        <Switch>
          <Route exact component={Home} path={routes.home} />
          <Route exact component={Songs} path={routes.songs} />
          <Route exact component={Auth} path={routes.login} />
          <Route exact component={Auth} path={routes.register} />
          <Route exact component={Tutorial} path={routes.tutorial} />
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
