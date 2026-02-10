import { motion } from 'motion/react'
import './Schedule.css'

export default function Schedule({ pageVariant }) {
  return (
    <>
      <title>Schedule</title>

      <div className='root-container'>
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