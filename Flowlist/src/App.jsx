import { Routes, Route } from 'react-router'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route
          index
          element={<Dashboard />}
        />
      </Routes>
    </>
  )
}

export default App
