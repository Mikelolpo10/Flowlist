import { motion } from 'motion/react'
import { useState, useEffect } from 'react'
import logoMeetings from '@assets/logo/logo-meetings.png'
import logoEvents from '@assets/logo/logo-events.png'
import logoTaskDone from '@assets/logo/logo-task-done.png'
import logoTaskPending from '@assets/logo/logo-task-pending.png'
import Sidebar from '../../components/Sidebar.jsx'
import StatsCard from './StatsCard.jsx'
import UpcomingCard from '../../components/UpcomingCard.jsx'
import './Dashboard.css'

export default function Dashboard({pageVariant}) {
  const [ eventList, setEventList ] = useState()
  const [ meetingList, setMeetingList ] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/event-list.json")
        const data = await res.json() 
        setEventList(data)
      } catch(err) {
        console.log(err)
      }

      try {
        const res = await fetch("/data/meeting-list.json")
        const data = await res.json() 
        setMeetingList(data)
      } catch(err) {
        console.log(err)
      }
    }

    fetchData()

  }, [])

  if(!eventList || !meetingList) {
    return <p>Loading Data</p>
  }

  return (
    <>
      <title>Dashboard</title>

      <div className="root-container">
        <Sidebar />

        <motion.main 
          id="dashboard-container"
          variants={pageVariant}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{ duration: 0.3 }}  
        >
          <div id="main-top-container">
            <section id="greetings-container">
              <h2>Hello, Username.</h2>
              <p>
                Today you have 5 new task to be completed,
                2 meetings to attend, 5 event to participate
                in, and you have receive 28 message from 5 different people
              </p>
              <div id="task-progress-container">
                <span>52</span>
                <div id="task-progress-details">
                  <h5>Task Progress</h5>
                  <p>Keep Going!</p>
                </div>
              </div>
              <button id="view-schedule-btn">View Schedule</button>
            </section>
            <section id="stats-container">
              <select id="stats-dropdown-time">
                <option value="24 hours">24 Hours</option>
                <option value="7 days">7 Days</option>
                <option value="30 days">30 Days</option>
                <option value="alltime">All time</option>
              </select>
              <div id="stats-card-container"> {/*bagus pake file lain buat urus data card */}
                <StatsCard
                  bgColor="#FF6F6F"
                  logo={logoMeetings}
                  count="500"
                  label="Meetings"
                />
                <StatsCard
                  bgColor="#6DFF77"
                  logo={logoEvents}
                  count="120"
                  label="Events"
                />
                <StatsCard
                  bgColor="#80DDFF"
                  logo={logoTaskDone}
                  count="67"
                  label="Task Done"
                />
                <StatsCard //Tasknya ngaco gambarnya
                  bgColor="#FFAE00"
                  logo={logoTaskPending}
                  count="37"
                  label="Task pending"
                />
              </div>
            </section>
            <UpcomingCard
              header="Events"
              link="#"
              data={eventList}
            />
          </div>

          <div id="main-bottom-container">
            <section id="greetings-container">
              <h2>Hello, Username.</h2>
              <p>
                Today you have 5 new task to be completed,
                2 meetings to attend, 5 event to participate
                in, and you have receive 28 message from 5 different people
              </p>
              <div id="task-progress-container">
                <span>52</span>
                <div id="task-progress-details">
                  <h5>Task Progress</h5>
                  <p>Keep Going!</p>
                </div>
              </div>
              <button id="view-schedule-btn">View Schedule</button>
            </section>
            <UpcomingCard
              header="Meetings"
              link="#"
              data={meetingList}
            />
          </div>  
        </motion.main>
      </div>
    </>
  )
}