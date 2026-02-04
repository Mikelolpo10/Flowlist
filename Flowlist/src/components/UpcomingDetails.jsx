import './UpcomingDetails.css'

export default function UpcomingDetails({ title, date, desc }) {
  return (
    <li className="upcoming-details">
      <div className="upcoming-details-head">
        <h3>&#183;{title}</h3>
        <span>{date}</span>
      </div>
      <p>{desc}</p>
    </li>
  )
}