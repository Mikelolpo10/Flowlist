import { Link } from 'react-router'
import { motion } from 'motion/react'
import './Button.css'

const MotionLink = motion.create(Link)

export default function Button({ url, label }) {
  return (
    <>
      <MotionLink
        id='button'
        to={url}
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
      >
        {label}
      </MotionLink>
    </>
  )
}