import { motion } from 'motion/react'
import Sidebar from '../../components/Sidebar'
import './Schedule.css'

export default function Schedule({ pageVariant }) {
  return (
    <>
      <title>Schedule</title>

      <div className='root-container'>
        <Sidebar />

        <main
          id='schedule-container'
          variants={pageVariant}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{ duration: 0.3 }}
        >
          <div id="schedule">

          </div>
        </main>
      </div>
    </>
  )
}