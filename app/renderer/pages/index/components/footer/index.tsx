import { shell } from 'electron'

import commonStyle from '@pages/index/style.module.scss'

import Button from '@components/button'

import s from './style.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <div className={commonStyle.container}>
        <div className={s['wrapper']}>
          <Button
            type="text"
            onClick={() => {
              shell.openExternal(
                'https://github.com/Plasticine-Yang/plasticine-resume',
              )
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
