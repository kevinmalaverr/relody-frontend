import loadable from '@loadable/component'
import NotFound from './pages/NotFound'
// import Home from './pages/Home'
// import Auth from './pages/Auth'
// import Songs from './pages/Songs'
// import Tutorial from './pages/Tutorial'
import { routes } from './routes'

const Home = loadable(() => import('./pages/Home'), { ssr: true })
const Songs = loadable(() => import('./pages/Songs'), { ssr: true })
const Auth = loadable(() => import('./pages/Auth'), { ssr: true })
const Tutorial = loadable(() => import('./pages/Tutorial'), { ssr: true })

const serverRoutes = [
  { exact: true, component: Home, path: routes.home },
  { exact: true, component: Songs, path: routes.songs },
  { exact: true, component: Auth, path: routes.login },
  { exact: true, component: Auth, path: routes.register },
  { exact: true, component: Tutorial, path: routes.tutorial },
  { path: '*', component: NotFound }
]

export default serverRoutes
