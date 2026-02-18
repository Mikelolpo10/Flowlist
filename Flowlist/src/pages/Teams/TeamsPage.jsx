import { motion } from 'motion/react'
import { useState } from 'react'
import './TeamsPage.css'

export default function TeamsPage({ pageVariant, userData }) {
  const [ isSearchFocus, setIsSearchFocus ] = useState(false)

  return (
    <>
      <title>Teams</title>

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
            <div className={`search-bar ${isSearchFocus ? 'search-bar-focus' : ''}`}>
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#686868" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input 
                placeholder="Search teams..." 
                onFocus={() => setIsSearchFocus(true)} 
                onBlur={() => setIsSearchFocus(false)}
              />
            </div>
            <button id='new-team-button'>+ New Team</button>
          </div>
        </header>

        <main id='teams-container'>
          <div id='team-choice-container'>
            
          </div>
        </main>

      </motion.div>
    </>
  )
}