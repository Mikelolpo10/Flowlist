import { motion } from 'motion/react'
import './TeamsPage.css'

export default function TeamsPage({ pageVariant, userData }) {
  return (
    <>
      <motion.div className='root-container'
        variants={pageVariant}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.3 }}
      >
        <header>
          <div id='header-left'>
            <h1>Teams</h1>
            <small>Manage and collaborate across all your teams</small>
          </div>
          <div id='header-right'>
            <div id='search-bar'>
              <svg viewBox="0 0 24 24" fill="none" stroke="#686868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input placeholder="Search teams..."/>
            </div>
            <button>+ New Team</button>
          </div>
        </header>

        <main id='teams-container'>
          <div></div>
        </main>

      </motion.div>
    </>
  )
}