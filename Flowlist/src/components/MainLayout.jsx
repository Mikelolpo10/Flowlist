import { Outlet } from 'react-router'
import Sidebar from '@components/Sidebar.jsx'

export default function MainLayout() {
  return (
    <div className="layout" style={{display: 'flex'}}>
      <Sidebar />
      <Outlet />
    </div>
  )
}
