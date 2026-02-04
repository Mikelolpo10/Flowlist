import UpcomingDetails from './UpcomingDetails.jsx'
import './UpcomingCard.css'

export default function UpcomingCard({ header, link, data }) {
  return (
    <section className="upcoming-container">
      <div className="upcoming-container-head">
        <h2>{header}</h2>
        <a href={link}>View all</a>
      </div>
      <ul>
        {data.map(({title, date, desc}) => {
          return (
            <UpcomingDetails 
            key={desc}
            title={title}
            date={date}
            desc={desc}
            />
          )
        })}
      </ul>
    </section>
  )
}


