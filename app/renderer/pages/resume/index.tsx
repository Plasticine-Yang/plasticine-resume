import Content from './components/content'
import Header from './components/header'
import Toolbar from './components/toolbar'

import s from './style.module.scss'

const Resume: React.FC = () => {
  return (
    <section className={s.container}>
      <section className={s.header}>
        <Header />
      </section>

      <section className={s.content}>
        <Content />
      </section>

      <section className={s.toolbar}>
        <Toolbar />
      </section>
    </section>
  )
}

export default Resume
