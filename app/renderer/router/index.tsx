import { createHashRouter } from 'react-router-dom'

import { routes } from './routes'

const router: ReturnType<typeof createHashRouter> = createHashRouter(routes)

export { router }
