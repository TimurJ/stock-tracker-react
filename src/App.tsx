import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage/Homepage'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path=":stock" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
