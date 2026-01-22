import progressCircle75 from '@assets/logo/progress-circle-75.png'
import './Dashboard.css'
import Sidebar from '../../components/Sidebar.jsx'

export default function Dashboard() {
  return(
    <>
      <title>Dashboard</title>

      <div id="root-container">
        <Sidebar />

        <main id="main-container">
          <div id="greetings-container">
            <h1>Hello, Username.</h1>
            <p>
              Today you have 5 new task to be completed, 
              2 meetings to attend, 5 event to participate 
              in, and you have receive 28 message from 5 different people
            </p>
            <div id="task-completed-container">
              <img src={progressCircle75} alt="Progress 75%"/>
              <div id="task-completed-details">
                <h5>Task Progress</h5>
                <p>Keep Going!</p>
              </div>
            </div>
            <button id="view-schedule-btn">View Schedule</button>
          </div>
        </main>
      </div>
    </>
  )
}