import { NavLink, Link } from 'react-router'
import { useState, useEffect } from 'react'
import logoBrand from '@assets/logo/sidebar/logo-brand.png'
import logoDashboard from '@assets/logo/sidebar/logo-dashboard.png'
import logoSchedule from '@assets/logo/sidebar/logo-schedule.png'
import logoTeams from '@assets/logo/sidebar/logo-teams.png'
import logoConnect from '@assets/logo/sidebar/logo-connect.png'
import logoSettings from '@assets/logo/sidebar/logo-settings.png'
import logoChat from '@assets/logo/sidebar/logo-chat.png'
import logoProfile from '@assets/logo/sidebar/logo-profile.png'
import logoNotification from '@assets/logo/sidebar/logo-notification.png'
import './Sidebar.css'

export default function Sidebar() {
  const [ userData, setUserData ] = useState()
  const menus = [
    { to: '/dashboard', icon: logoDashboard, label: 'Dashboard' },
    { to: '/schedule', icon: logoSchedule, label: 'Schedule' },
    { to: '/teams', icon: logoTeams, label: 'Teams' },
    { to: '/connect', icon: logoConnect, label: 'Connect' },
    { to: '/settings', icon: logoSettings, label: 'Settings' },
    { to: '/chat', icon: logoChat, label: 'Chat' },
  ]

  useEffect(() => {
    const fetchUserData = async() => {
      try {
        const res = await fetch("/data/user-data.json")
        const data = await res.json()
        setUserData(data)
      } catch(err) {
        console.log(err)
      }
    }

    fetchUserData()
  }, [])

  if(!userData) {
    return <p>Loading user data</p> //Nanti  pake component khusus  buat nampilin loading fetchnya
  }

  return (
    <>
      <aside id="sidebar-container">
        <div id="sidebar-brand">
          <Link id="brand-link" to="/">
            <img id="brand-logo" src={logoBrand} alt="brand" />
            <h1 id="brand-name">Flowlist</h1>
          </Link>
        </div>
        <nav id="sidebar-nav">
          {menus.map(({ to, icon, label }) => (
            <NavLink 
              key={label} 
              to={to} 
              className={({isActive}) => `nav-option-container ${isActive ? 'nav-option-active' : ''}`}
            >
              <img src={icon} alt={label} />
              <h3>{label}</h3>
            </NavLink>
          ))}
        </nav>
        <div id="sidebar-profile-container">
          <img id="profile-button" src={logoProfile} alt="Profile picture"/>
          <span id="username">{userData.username}</span>
          <img id="notification-bell" src={logoNotification} alt="Notification bell"/>
        </div>
      </aside>
    </>
  )
}