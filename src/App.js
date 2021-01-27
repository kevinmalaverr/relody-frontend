import React from 'react'
import './styles/App.css'
import loadable from '@loadable/component'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import NotFound from './pages/NotFound'

// pages
const Home = loadable(() => import('./pages/Home'))
const Songs = loadable(() => import('./pages/Songs'))
const Login = loadable(() => import('./pages/Login'))
const Register = loadable(() => import('./pages/Register'))
const Profile = loadable(() => import('./pages/Profile'))
const Tutorial = loadable(() => import('./pages/Tutorial'))

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={Home} path={routes.home} />
        <Route exact component={Songs} path={routes.songs} />
        <Route exact component={Login} path={routes.login} />
        <Route exact component={Register} path={routes.register} />
        <Route exact component={Profile} path={routes.profile} />
        <Route exact component={Tutorial} path={routes.tutorial} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
