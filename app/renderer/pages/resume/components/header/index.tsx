import { useNavigate } from 'react-router-dom'

import Button from '@components/button'

import s from './style.module.scss'
import { ROUTE_PATHS } from '@src/router/routes'

const Header: React.FC = () => {
  const navigate = useNavigate()

  const handleExportPDF = () => {
    console.log('导出 PDF...')
  }

  return (
    <header className={s.header}>
      {/* 返回 */}
      <section>
        <Button
          type="text"
          size="small"
          onClick={() => navigate(ROUTE_PATHS.HOME)}
        >
          返回
        </Button>
      </section>

      {/* 导出 PDF */}
      <section>
        <Button size="small" onClick={() => handleExportPDF()}>
          导出 PDF
        </Button>
      </section>
    </header>
  )
}

export default Header
