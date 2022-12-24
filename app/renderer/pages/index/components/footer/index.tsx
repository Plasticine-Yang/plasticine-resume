import { shell } from 'electron'

import '@pages/index/styles.scss'

import Button from '@components/button'

import s from './style.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s['wrapper']}>
          <Button
            type="text"
            onClick={() => {
              shell.openExternal('https://github.com/Plasticine-Yang')
            }}
          >
            Github
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
