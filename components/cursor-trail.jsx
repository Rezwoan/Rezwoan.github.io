"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CursorTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    let trailId = 0

    const updateMousePosition = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setMousePosition(newPosition)

      // Add new trail point
      const newTrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++,
      }

      setTrail((prev) => {
        const newTrail = [newTrailPoint, ...prev.slice(0, 15)]
        return newTrail
      })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Main jiggly bubble cursor */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-80"
          animate={{
            borderRadius: ["50%", "40%", "50%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            boxShadow: "0 0 20px rgba(34, 211, 238, 0.6)",
            filter: "blur(0.5px)",
          }}
        />
      </motion.div>

      {/* Trail bubbles */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed pointer-events-none z-40"
          style={{
            left: point.x - 3,
            top: point.y - 3,
          }}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{
            opacity: 0,
            scale: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600"
            style={{
              boxShadow: `0 0 ${6 - index * 0.3}px rgba(34, 211, 238, ${0.5 - index * 0.03})`,
            }}
          />
        </motion.div>
      ))}
    </>
  )
}
