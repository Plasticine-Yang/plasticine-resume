import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Counter from '@src/components/counter'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Counter />} />
      </Routes>
    </Router>
  )
}

export default App
