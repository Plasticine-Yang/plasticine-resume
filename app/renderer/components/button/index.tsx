import { MouseEvent, PropsWithChildren } from 'react'

import c from 'classnames'

import s from './style.module.scss'

interface ButtonProps {
  type?: 'primary' | 'text'
  round?: boolean
  size?: 'default' | 'large' | 'small' | 'tiny'

  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { type = 'primary', round = false, size = 'default' } = props
  const { onClick: emitClick } = props
  const { children } = props

  return (
    <button
      className={c(s.button, s[type], s[size], round ? s.round : undefined)}
      onClick={(e) => {
        emitClick && emitClick(e)
      }}
    >
      {typeof children === 'string' ? (
        <p className={s['btn-text']}>{children}</p>
      ) : undefined}
    </button>
  )
}

export default Button
