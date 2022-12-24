import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import './style/styles.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
