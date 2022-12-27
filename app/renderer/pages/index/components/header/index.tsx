import commonStyle from '@pages/index/style.module.scss'
import Button from '@components/button'

import s from './style.module.scss'

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <nav className={s.navbar}>
        <div className={commonStyle.container}>
          <p>Plasticine Resume</p>

          <Button size="small">开始使用</Button>
        </div>
      </nav>
    </header>
  )
}

export default Header
