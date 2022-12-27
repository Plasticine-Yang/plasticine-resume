import s from './style.module.scss'

export interface ToolbarListItemProps {
  name: string
  displayName: string
  summary: string
}

const ToolbarListItem: React.FC<ToolbarListItemProps> = (props) => {
  const { displayName, summary } = props

  return (
    <li className={s['toolbar-list-item']}>
      <span className={s['display-name']}>{displayName}</span>
      <span className={s.summary}>{summary}</span>
    </li>
  )
}

export default ToolbarListItem
