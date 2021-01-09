import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Songs from './pages/Songs'
import Tutorial from './pages/Tutorial'
import { routes } from './routes'

const serverRoutes = [
  { exact: true, component: Home, path: routes.home },
  { exact: true, component: Songs, path: routes.songs },
  { exact: true, component: Auth, path: routes.login },
  { exact: true, component: Auth, path: routes.register },
  { exact: true, component: Tutorial, path: routes.tutorial },
  { path: '*', component: NotFound }
]

export default serverRoutes
