import React, { Suspense } from 'react'
import { Router } from '@reach/router'
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
    <Router>
      <NotFound default />
      <Home path={routes.home} />
      <Songs path={routes.songs} />
      <Auth path={routes.login} />
      <Auth path={routes.register} />
    </Router>
  </Suspense>
)
