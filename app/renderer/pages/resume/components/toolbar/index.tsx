import s from './style.module.scss'
import ToolbarList from './toolbar-list'

import { ToolbarListItemProps } from './toolbar-list/toolbar-list-item'

const toolbarListData: ToolbarListItemProps[] = [
  {
    name: 'personal',
    displayName: '个人信息',
    summary: '更好介绍自己，机会会更多',
  },
  {
    name: 'education',
    displayName: '教育信息',
    summary: '介绍你的学校和专业信息',
  },
  {
    name: 'contact',
    displayName: '联系方式',
    summary: '请留下您的联系方式',
  },
  {
    name: 'expectedCity',
    displayName: '期望城市',
    summary: '聊聊您所期望的工作城市',
  },
  {
    name: 'skillList',
    displayName: '技能清单',
    summary: '展示具备的技能，突出你的能力',
  },
  {
    name: 'projectExperience',
    displayName: '项目经历',
    summary: '展示研究过什么优秀项目和成果',
  },
  {
    name: 'workExperience',
    displayName: '工作经历',
    summary: '申请岗位的相关经验和能力',
  },
  {
    name: 'personalEvaluation',
    displayName: '个人评价',
    summary: '低调夸一夸自己有什么亮点',
  },
]

const Toolbar: React.FC = () => {
  return (
    <section className={s.toolbar}>
      <header className={s.header}>全部模块</header>
      <main>
        <ToolbarList listData={toolbarListData} />
      </main>
    </section>
  )
}

export default Toolbar
