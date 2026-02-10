import { motion } from 'motion/react'
import Sidebar from '@components/Sidebar.jsx'
import Button from '@components/Button.jsx'
import FeatureCard from './FeatureCard.jsx'
import logoPattern1 from '@assets/misc/logo-pattern-1.png'
import logoPattern2 from '@assets/misc/logo-pattern-2.png'
import logoPattern3 from '@assets/misc/logo-pattern-3.png'
import logoPattern4 from '@assets/misc/logo-pattern-4.png'
import logoPattern5 from '@assets/misc/logo-pattern-5.png'
import logoPattern6 from '@assets/misc/logo-pattern-6.png'
import './Homepage.css'

export default function Homepage({pageVariant}) {
  const logoPatterns = [
    logoPattern1,
    logoPattern2,
    logoPattern3,
    logoPattern4,
    logoPattern5,
    logoPattern6
  ]

  return (
    <>
      <title>Homepage</title>

      <div className="root-container">
        <Sidebar />

        <motion.main 
          id="homepage-container"
          variants={pageVariant}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{ duration: 0.3 }}
        >
          <div id="primary-top-container">
            <h1>A better way to organize your schedule<br /> powered by Flowlists</h1>
            <p>Plan smarter. Stay organized. Schedule everything</p>
            <Button url='/dashboard' label="Get Started"/>
          </div>

          <div id="secondary-container">
            <h2>Everything you need to stay organized</h2>
            <div id="feature-container">
              <FeatureCard
                title="Connect your calendar"
                text="Integrate your calendar to seamlessly manage events, deadlines, and meetings in real time."
                label="Connect"
                background="#C4D1FF, #E2E8FF 70%, #FFFFFF"
              />
              <FeatureCard
                title="Share your schedule"
                text="Share your schedule and keep everyone in sync."
                label="Share"
                background="#C4FFC9, #FFFFFF"
              />
            </div>
          </div>
          {logoPatterns.map((logo, index) => (
            <motion.img
              key={index}
              id={`background-pattern-${index + 1}`}
              src={logo}
              className="background-pattern"
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.main>
      </div>
    </>
  )
}