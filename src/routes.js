import React, { Suspense } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import NotFound from './pages/NotFound'
import { Loader } from './components/Loader'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Songs from './pages/Songs'
import Tutorial from './pages/Tutorial'

export const routes = {
  home: '/',
  login: '/login',
  register: '/register',
  songs: '/songs',
  song: '/song/:songId',
  lessons: '/lessons',
  radio: '/radio',
  tutorial: '/tutorial/:tutorialId'
}

// const Home = React.lazy(() => import('./pages/Home'))
// const Auth = React.lazy(() => import('./pages/Auth'))
// const Songs = React.lazy(() => import('./pages/Songs'))
// const Tutorial = React.lazy(() => import('./pages/Tutorial'))

export const RouterComponent = () => (
  // <Suspense fallback={<Loader />}>
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
  /* </Suspense> */
)
