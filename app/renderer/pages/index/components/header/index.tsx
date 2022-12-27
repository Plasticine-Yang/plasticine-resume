import { useNavigate } from 'react-router-dom'

import commonStyle from '@pages/index/style.module.scss'
import Button from '@components/button'

import { ROUTE_PATHS } from '@src/router/routes'

import s from './style.module.scss'

const Header: React.FC = () => {
  const navigate = useNavigate()

  return (
    <header className={s.header}>
      <nav className={s.navbar}>
        <div className={commonStyle.container}>
          <p>Plasticine Resume</p>

          <Button size="small" onClick={() => navigate(ROUTE_PATHS.RESUME)}>
            开始使用
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Header
