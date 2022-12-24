import { Fragment } from 'react'

import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'

const Index: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Content />
      <Footer />
    </Fragment>
  )
}

export default Index
