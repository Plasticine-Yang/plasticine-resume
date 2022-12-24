import { useState } from 'react'

import s from './style.module.scss'

const Counter: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className={s.counter}>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  )
}

export default Counter
