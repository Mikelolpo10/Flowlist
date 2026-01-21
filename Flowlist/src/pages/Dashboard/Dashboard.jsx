import './Dashboard.css'
import Sidebar from '../../components/Sidebar.jsx'

export default function Dashboard() {
  return(
    <>
      <title>Dashboard</title>

      <div id="root-container">
        <Sidebar />
    
        <div id="greetings-container">
          <h1>Hello, Username.</h1>
          <p>
            Today you have 5 new task to be completed, 
            2 meetings to attend, 5 event to participate 
            in, and you have receive 28 message from 5 different people
          </p>
        </div>
      </div>
    </>
  )
}