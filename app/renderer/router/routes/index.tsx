import type { RouteObject } from 'react-router-dom'
import { ROUTE_PATHS } from './constants'

import Index from '@pages/index'
import Resume from '@pages/resume'

const routes: RouteObject[] = [
  {
    path: ROUTE_PATHS.HOME,
    element: <Index />,
  },
  {
    path: ROUTE_PATHS.RESUME,
    element: <Resume />,
  },
]

export { routes, ROUTE_PATHS }
