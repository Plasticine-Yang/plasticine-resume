import { createBrowserRouter } from 'react-router-dom'

import { routes } from './routes'

const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter(routes)

export { router }
