import React, { useEffect } from 'react'
import './styles/App.css'
import { loadTheme, changeTheme } from './utils/themeSelector'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Songs from './pages/Songs'
import Tutorial from './pages/Tutorial'

export const App = () => {
  useEffect(() => {
    loadTheme()
    return () => { }
  }, [])

  return (
    <>
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
    </>
  )
}
