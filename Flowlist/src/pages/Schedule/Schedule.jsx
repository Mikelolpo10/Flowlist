import { motion } from 'motion/react'
import logoAddUser from '@assets/logo/logo-add-user.png'
import logoProfile from '@assets/logo/sidebar/logo-profile.png'
import './Schedule.css'

export default function Schedule({ pageVariant, userData }) {
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
          <header id='header-container'>
            <h1>Mutiara team</h1>
            <div id='team-members-container'>
              <img src={logoAddUser}/> 
            </div>
          </header>
        </main>
      </div>
    </>
  )
}