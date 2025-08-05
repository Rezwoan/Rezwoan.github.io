"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Code, Monitor, Award } from "lucide-react"
import { CustomCursor } from "@/components/custom-cursor"

const timeline = [
  {
    year: "2022",
    title: "Started BSc in Computer Science & Engineering",
    description: "Began my journey at American International University-Bangladesh (AIUB)",
    icon: GraduationCap,
    color: "from-blue-400 to-cyan-400",
  },
  {
    year: "2023",
    title: "First Web Development Project",
    description: "Built my first full-stack application using React and Flask",
    icon: Code,
    color: "from-green-400 to-blue-400",
  },
  {
    year: "2024",
    title: "Advanced Linux Mastery",
    description: "Mastered Linux systems, Kali Linux, and Hyprland window manager",
    icon: Monitor,
    color: "from-purple-400 to-pink-400",
  },
  {
    year: "2025",
    title: "Current CGPA: 3.86",
    description: "Maintaining excellent academic performance while building real-world projects",
    icon: Award,
    color: "from-yellow-400 to-orange-400",
  },
]

const funFacts = [
  {
    title: "Fitness Enthusiast",
    description: "Regular gym-goer who believes in maintaining both mental and physical health",
    icon: "💪",
    color: "from-red-400 to-pink-400",
  },
  {
    title: "Tech Content Consumer",
    description: "Always watching the latest tech videos and staying updated with industry trends",
    icon: "📺",
    color: "from-blue-400 to-purple-400",
  },
  {
    title: "Problem Solver",
    description: "Love tackling complex coding challenges and debugging intricate issues",
    icon: "🧩",
    color: "from-green-400 to-cyan-400",
  },
  {
    title: "Linux Power User",
    description: "Comfortable with command line, system administration, and custom configurations",
    icon: "🐧",
    color: "from-yellow-400 to-green-400",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <CustomCursor />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate Computer Science & Engineering student at AIUB with a love for building innovative web
            applications and solving complex problems. Based in Dhaka, Bangladesh, I combine academic excellence with
            hands-on development experience.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">My Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="flex-1">
                  <Card className="bg-gray-900 border-gray-700 hover:border-cyan-400 transition-colors duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className={`bg-gradient-to-r ${item.color} text-black font-semibold`}>{item.year}</Badge>
                        <item.icon className="text-cyan-400" size={20} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex-shrink-0"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-purple-400">Fun Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {funFacts.map((fact, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05, rotateY: 5 }} transition={{ duration: 0.3 }}>
                <Card className="bg-gray-900 border-gray-700 hover:border-purple-400 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`text-4xl p-3 rounded-full bg-gradient-to-r ${fact.color}`}>{fact.icon}</div>
                      <h3 className="text-xl font-semibold text-white">{fact.title}</h3>
                    </div>
                    <p className="text-gray-300">{fact.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-green-400">Languages</h2>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="text-2xl font-semibold text-white mb-2">Bengali</div>
              <Badge className="bg-green-500 text-black">Native</Badge>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-white mb-2">English</div>
              <Badge className="bg-blue-500 text-white">Professional</Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
