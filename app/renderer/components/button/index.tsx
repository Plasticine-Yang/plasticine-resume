import { MouseEvent, PropsWithChildren } from 'react'

import c from 'classnames'

import { createNameSpace } from 'plasticine-bem'

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

  const ns = createNameSpace('button', { cssModuleClasses: s })

  return (
    <button
      className={c(ns.b(), ns.m(type), ns.m(size), ns.is('round', round))}
      onClick={(e) => {
        emitClick && emitClick(e)
      }}
    >
      {typeof children === 'string' && (
        <p className={ns.e('text')}>{children}</p>
      )}
    </button>
  )
}

export default Button
