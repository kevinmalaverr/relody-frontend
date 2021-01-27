import loadable from '@loadable/component'
import NotFound from './pages/NotFound'
import { routes } from './routes'

const Home = loadable(() => import('./pages/Home'), { ssr: true })
const Songs = loadable(() => import('./pages/Songs'), { ssr: true })
const Login = loadable(() => import('./pages/Login'), { ssr: true })
const Register = loadable(() => import('./pages/Register'), { ssr: true })
const Profile = loadable(() => import('./pages/Profile'), { ssr: true })
const Tutorial = loadable(() => import('./pages/Tutorial'), { ssr: true })

const serverRoutes = [
  { exact: true, component: Home, path: routes.home },
  { exact: true, component: Songs, path: routes.songs },
  { exact: true, component: Login, path: routes.login },
  { exact: true, component: Register, path: routes.register },
  { exact: true, component: Profile, path: routes.profile },
  { exact: true, component: Tutorial, path: routes.tutorial },
  { path: '*', component: NotFound }
]

export default serverRoutes
