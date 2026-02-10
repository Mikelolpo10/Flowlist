import { Routes, Route } from 'react-router'
import Homepage from './pages/Homepage/Homepage.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Schedule from './pages/Schedule/Schedule.jsx'
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
        <Route
          path='/schedule'
          element={<Schedule />}
        />
      </Routes>
    </>
  )
}

export default App
