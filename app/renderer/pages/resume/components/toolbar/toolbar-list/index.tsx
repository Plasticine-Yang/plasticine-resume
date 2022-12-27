import type { ToolbarListItemProps } from './toolbar-list-item'
import ToolbarListItem from './toolbar-list-item'

import s from './style.module.scss'

interface ToolbarListProps {
  listData: ToolbarListItemProps[]
}

const ToolbarList: React.FC<ToolbarListProps> = (props) => {
  const { listData } = props
  const listEl = listData.map((item) => (
    <ToolbarListItem key={item.name} {...item} />
  ))

  return <ul className={s['toolbar-list']}>{listEl}</ul>
}

export default ToolbarList
