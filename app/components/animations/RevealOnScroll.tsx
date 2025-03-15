import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface RevealOnScrollProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
}

type DirectionOffset = {
  up: { y: number; x?: never }
  down: { y: number; x?: never }
  left: { x: number; y?: never }
  right: { x: number; y?: never }
}

export default function RevealOnScroll({ 
  children, 
  direction = "up", 
  delay = 0 
}: RevealOnScrollProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const directionOffset: DirectionOffset = {
    up: { y: 75 },
    down: { y: -75 },
    left: { x: 75 },
    right: { x: -75 }
  }

  const offset = directionOffset[direction]

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...offset
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        ...(isInView ? { x: 0, y: 0 } : offset)
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