import Sidebar from '@components/Sidebar.jsx'
import Button from '@components/Button.jsx'
import FeatureCard from './FeatureCard.jsx'
import './Homepage.css'

export default function Homepage() {
  return (
    <>
      <title>Homepage</title>

      <div id="root-container">
        <Sidebar />

        <main id="homepage-container">
          <div id="primary-top-container">
            <h1>A better way to organize your schedule<br/> powered by Flowlists</h1>
            <p>Plan smarter. Stay organized. Schedule everything</p>
            <Button label="Get Started" />
          </div>

          <div id="secondary-container">
            <h2>Everything you need to stay organized</h2>
            <div id="feature-container">
              <FeatureCard 
                title="Connect your calendar"
                text="Integrate your calendar to seamlessly manage events, deadlines, and meetings in real time."
                label="Connect"
              />
              <FeatureCard 
                title="Share your schedule"
                text="Share your schedule and keep everyone in sync."
                label="Share"
              />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}