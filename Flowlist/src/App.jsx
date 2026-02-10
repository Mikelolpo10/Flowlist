import { AnimatePresence } from 'motion/react'
import { Routes, Route, useLocation } from 'react-router'
import { useState, useEffect } from 'react'
import MainLayout from '@components/MainLayout.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Schedule from './pages/Schedule/Schedule.jsx'
import './App.css'

function App() {
  const [userData, setUserData] = useState()
  const location = useLocation()
  const pageVariant = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 10 }
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch("/data/user-data.json")
        const data = await res.json()
        setUserData(data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchUserData()
  }, [])

  if (!userData) return <p>Loading user data</p> //Nanti  pake component khusus  buat nampilin loading fetchnya

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout userData={userData} />}>
          <Route
            index
            element={<Homepage
              userData={userData}
              pageVariant={pageVariant}
            />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard
              userData={userData}
              pageVariant={pageVariant}
            />}
          />
          <Route
            path='/schedule'
            element={<Schedule
              userData={userData}
              pageVariant={pageVariant}
            />}
          />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App
