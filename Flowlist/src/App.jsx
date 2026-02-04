import { Routes, Route } from 'react-router'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route
          index
          element={<Homepage />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Routes>
    </>
  )
}

export default App
