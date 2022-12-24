import type { RouteObject } from 'react-router-dom'

import Index from '@pages/index'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Index />,
  },
]

export { routes }
