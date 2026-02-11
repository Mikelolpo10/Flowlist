import { Outlet } from 'react-router'
import Sidebar from '@components/Sidebar.jsx'

export default function MainLayout({ userData }) {
  return (
    <div className="layout" style={{display: 'flex', width: '100vw'}}>
      <Sidebar userData={userData} />
      <Outlet />
    </div>
  )
}
