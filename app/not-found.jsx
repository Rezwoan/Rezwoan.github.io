"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { CustomCursor } from "@/components/custom-cursor"

export default function NotFound() {
  const [score, setScore] = useState(0)
  const [gameActive, setGameActive] = useState(false)
  const [fallingItems, setFallingItems] = useState([])

  const codeSnippets = [
    "const",
    "function",
    "return",
    "useState",
    "useEffect",
    "async",
    "await",
    "import",
    "export",
    "class",
  ]

  const colors = [
    "text-cyan-400",
    "text-purple-400",
    "text-green-400",
    "text-yellow-400",
    "text-pink-400",
    "text-blue-400",
  ]

  useEffect(() => {
    if (!gameActive) return

    const interval = setInterval(() => {
      const newItem = {
        id: Date.now(),
        x: Math.random() * (window.innerWidth - 100),
        y: -50,
        code: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
      }

      setFallingItems((prev) => [...prev, newItem])
    }, 1000)

    return () => clearInterval(interval)
  }, [gameActive])

  useEffect(() => {
    if (!gameActive) return

    const animationInterval = setInterval(() => {
      setFallingItems((prev) =>
        prev.map((item) => ({ ...item, y: item.y + 5 })).filter((item) => item.y < window.innerHeight),
      )
    }, 50)

    return () => clearInterval(animationInterval)
  }, [gameActive])

  const catchItem = (id) => {
    setScore((prev) => prev + 10)
    setFallingItems((prev) => prev.filter((item) => item.id !== id))
  }

  const startGame = () => {
    setGameActive(true)
    setScore(0)
    setFallingItems([])
  }

  const stopGame = () => {
    setGameActive(false)
    setFallingItems([])
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <CustomCursor />

      {/* Falling Code Items */}
      {fallingItems.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute cursor-pointer font-mono text-lg ${item.color} select-none`}
          style={{ left: item.x, top: item.y }}
          onClick={() => catchItem(item.id)}
          whileHover={{ scale: 1.2 }}
        >
          {item.code}
        </motion.div>
      ))}

      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-400 bg-clip-text text-transparent mb-4">
              404
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Page Not Found</h2>
            <p className="text-xl text-gray-300 mb-8">
              Oops! The page you're looking for seems to have vanished into the digital void. But hey, while you're
              here, why not play a quick game?
            </p>
          </motion.div>

          {/* Mini Game */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 mb-6">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">🎮 Catch the Code Snippets!</h3>
              <p className="text-gray-300 mb-4">Click on the falling code snippets to catch them and earn points!</p>

              {gameActive && <div className="text-2xl font-bold text-green-400 mb-4">Score: {score}</div>}

              <div className="flex gap-4 justify-center">
                {!gameActive ? (
                  <Button
                    onClick={startGame}
                    className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-6 py-2"
                  >
                    Start Game
                  </Button>
                ) : (
                  <Button
                    onClick={stopGame}
                    variant="outline"
                    className="border-red-400 text-red-400 hover:bg-red-400 hover:text-black px-6 py-2 bg-transparent"
                  >
                    Stop Game
                  </Button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                <Home className="mr-2" size={20} />
                Go Home
              </Button>
            </Link>

            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 px-8 py-3 rounded-full text-lg font-semibold"
            >
              <ArrowLeft className="mr-2" size={20} />
              Go Back
            </Button>
          </motion.div>

          {/* Fun Facts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-sm">Fun fact: The first 404 error was at CERN in 1992! 🌐</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
