import './StatsCard.css'

export default function StatsCard({ bgColor, logo, count, label }) {
  return(
    <div className="stats-card" style={{backgroundColor: `${bgColor}`}}>
      <div className="stats-logo">
        <img src={logo} />
      </div>
      <div className="stats-details">
        <h3>{count}</h3>
        <p>{label}</p>
      </div>
    </div>
  )
}