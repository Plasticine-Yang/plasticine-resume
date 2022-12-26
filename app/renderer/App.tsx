import { RouterProvider } from 'react-router-dom'

import { router } from './router'
import { setup } from './setup'

import './style/styles.scss'

setup()

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App
