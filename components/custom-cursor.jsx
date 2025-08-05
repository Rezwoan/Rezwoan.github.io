"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState([])
  const [isHovering, setIsHovering] = useState(false)
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
        const newTrail = [newTrailPoint, ...prev.slice(0, 2)] // Only keep 2 trailing bubbles
        return newTrail
      })
    }

    const handleMouseOver = (e) => {
      const target = e.target
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.classList.contains("cursor-pointer") ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    // Restore default cursor
    document.body.style.cursor = "auto"
    document.documentElement.style.cursor = "auto"

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", handleMouseOver)
      document.body.style.cursor = "auto"
      document.documentElement.style.cursor = "auto"
    }
  }, [])

  // Return null to remove all custom cursor effects
  if (!mounted) return null

  return null
}
