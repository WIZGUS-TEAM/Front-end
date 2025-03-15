import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface RevealOnScrollProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
}

export default function RevealOnScroll({ 
  children, 
  direction = "up", 
  delay = 0 
}: RevealOnScrollProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const directionOffset = {
    up: { y: 75 },
    down: { y: -75 },
    left: { x: 75 },
    right: { x: -75 }
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionOffset[direction]
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : directionOffset[direction]?.y,
        x: isInView ? 0 : directionOffset[direction]?.x
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
} 