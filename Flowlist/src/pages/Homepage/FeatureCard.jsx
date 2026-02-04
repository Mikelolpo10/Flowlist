import Button from '@components/Button.jsx'
import './FeatureCard.css'

export default function FeatureCard({ title, text, label }) {
  return (
    <div className="feature-card">
      <h2>{title}</h2>
      <p>{text}</p>
      <Button label={label} />
    </div>
  )
}