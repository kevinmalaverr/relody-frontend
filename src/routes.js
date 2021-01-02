import React, { Suspense } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import NotFound from './pages/NotFound'
import { Loader } from './components/Loader'

export const routes = {
  home: '/',
  login: '/login',
  register: '/register',
  songs: '/songs',
  song: '/song/:songId',
  lessons: '/lessons',
  radio: '/radio'
}

const Home = React.lazy(() => import('./pages/Home'))
const Auth = React.lazy(() => import('./pages/Auth'))
const Songs = React.lazy(() => import('./pages/Songs'))

export const RouterComponent = () => (
  <Suspense fallback={<Loader />}>
    <BrowserRouter>
      <Switch>
        <Route exact component={Home} path={routes.home} />
        <Route exact component={Songs} path={routes.songs} />
        <Route exact component={Auth} path={routes.login} />
        <Route exact component={Auth} path={routes.register} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Suspense>
)
