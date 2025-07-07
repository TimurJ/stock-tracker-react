import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage/Homepage'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  )
}

export default App
