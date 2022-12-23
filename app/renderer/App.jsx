import { HashRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <div>Plasticine Resume</div>
          <div>Hello Electron</div>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
