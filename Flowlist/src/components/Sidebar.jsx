import { NavLink } from 'react-router'
import logoBrand from '@assets/logo/sidebar/logo-brand.png'
import logoDashboard from '@assets/logo/sidebar/logo-dashboard.png'
import logoSchedule from '@assets/logo/sidebar/logo-schedule.png'
import logoTeams from '@assets/logo/sidebar/logo-teams.png'
import logoConnect from '@assets/logo/sidebar/logo-connect.png'
import logoSettings from '@assets/logo/sidebar/logo-settings.png'
import logoChat from '@assets/logo/sidebar/logo-chat.png'
import './Sidebar.css'

export default function Sidebar() {
  const menus = [
    { to: '/dashboard', icon: logoDashboard, label: 'Dashboard' },
    { to: '/schedule', icon: logoSchedule, label: 'Schedule' },
    { to: '/teams', icon: logoTeams, label: 'Teams' },
    { to: '/connect', icon: logoConnect, label: 'Connect' },
    { to: '/settings', icon: logoSettings, label: 'Settings' },
    { to: '/chat', icon: logoChat, label: 'Chat' },
  ]

  return (
    <>
      <aside id="sidebar-container">
        <div id="sidebar-brand">
          <img src={logoBrand} alt="brand" />
          <h1>Flowlist</h1>
        </div>
        <nav id="sidebar-nav">
          {menus.map(({ to, icon, label }) => (
            <NavLink key={label} to={to} className="nav-option-container">
              <img src={icon} alt={label} />
              <h3>{label}</h3>
            </NavLink>
          ))}
        </nav>
        <div id="sidebar-profile-container">Username</div>
      </aside>
    </>
  )
}