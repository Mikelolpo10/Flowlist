import { AnimatePresence } from 'motion/react'
import { Routes, Route, useLocation } from 'react-router'
import Homepage from './pages/Homepage/Homepage.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Schedule from './pages/Schedule/Schedule.jsx'
import './App.css'

function App() {
  const location = useLocation()
  const pageVariant = {
    initial: { opacity: 0, x: -10 }, 
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 10 }
  }

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route
          index
          element={<Homepage 
            pageVariant={pageVariant}
          />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard 
            pageVariant={pageVariant}
          />}
        />
        <Route
          path='/schedule'
          element={<Schedule 
            pageVariant={pageVariant}
          />}
        />
      </Routes>
    </AnimatePresence>
  )
}

export default App
