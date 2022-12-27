import commonStyle from '@pages/index/style.module.scss'
import Button from '@components/button'
import logo from '@assets/logo.svg'

import s from './style.module.scss'

const Content: React.FC = () => {
  return (
    <section className={commonStyle.container}>
      <div className={s.wrapper}>
        <div className={s.content}>
          <div className={s.info}>
            <h1>简历制作工具</h1>
            <p>以最简单的方式来写好简历，只需专注内容本身而无需关注排版</p>
          </div>

          <div className={s['btn-group']}>
            <Button round>快速体验</Button>
          </div>
        </div>

        <div className={s.image}>
          <img src={logo} />
        </div>
      </div>
    </section>
  )
}

export default Content
