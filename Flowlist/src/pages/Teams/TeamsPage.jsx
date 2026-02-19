import { motion } from 'motion/react'
import { useState, useRef } from 'react'
import './TeamsPage.css'

export default function TeamsPage({ pageVariant, userData }) {
  const [isSearchFocus, setIsSearchFocus] = useState(false)
  const teamChoicesRef = useRef()
  const teamChoices = [
    {
      text: 'All Teams',
      isActive: true
    }, {
      text: 'My Teams',
      isActive: false
    }, {
      text: 'Archived',
      isActive: false
    }
  ]

  function switchTeamChoice(choice) {
    const items = teamChoicesRef.current.querySelectorAll('.team-choice')
    items.forEach(el => el.classList.remove('team-choice-active'))
    choice.classList.add('team-choice-active')
    console.log()
  }

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
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
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
          <div id='team-choices-container' ref={teamChoicesRef}>
            {teamChoices.map(({ text, isActive }) => (
              <div 
                key={text} 
                className={isActive ? `team-choice team-choice-active` : `team-choice `} 
                onClick={(e) => switchTeamChoice(e.currentTarget)}
              >
                {text}
              </div>
            ))}
          </div>

          <section id='stats-section'>
            <div className="stats-card">
              
            </div>
          </section>
        </main>

      </motion.div>
    </>
  )
}