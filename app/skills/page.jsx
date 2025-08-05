"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CustomCursor } from "@/components/custom-cursor"

const skills = [
  // Frontend
  {
    name: "React.js",
    category: "Frontend",
    level: 90,
    color: "from-blue-400 to-cyan-400",
    code: "const App = () => <div>Hello World</div>",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: 95,
    color: "from-cyan-400 to-blue-400",
    code: 'className="bg-gradient-to-r from-blue-500"',
  },
  {
    name: "HTML5",
    category: "Frontend",
    level: 95,
    color: "from-orange-400 to-red-400",
    code: '<section class="hero">Content</section>',
  },
  {
    name: "CSS3",
    category: "Frontend",
    level: 90,
    color: "from-blue-400 to-purple-400",
    code: ".hero { background: linear-gradient(...) }",
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    level: 85,
    color: "from-yellow-400 to-orange-400",
    code: 'const data = await fetch("/api/data")',
  },

  // Backend
  {
    name: "Flask",
    category: "Backend",
    level: 80,
    color: "from-green-400 to-blue-400",
    code: '@app.route("/api/users", methods=["GET"])',
  },
  {
    name: "Django",
    category: "Backend",
    level: 75,
    color: "from-green-600 to-green-400",
    code: "class UserViewSet(ModelViewSet):",
  },
  {
    name: "Node.js",
    category: "Backend",
    level: 70,
    color: "from-green-500 to-yellow-400",
    code: "const server = http.createServer(app)",
  },
  {
    name: "REST API",
    category: "Backend",
    level: 85,
    color: "from-purple-400 to-pink-400",
    code: "GET /api/v1/users?page=1&limit=10",
  },

  // Database
  {
    name: "MongoDB",
    category: "Database",
    level: 80,
    color: "from-green-400 to-green-600",
    code: "db.users.find({ active: true })",
  },
  {
    name: "SQL",
    category: "Database",
    level: 85,
    color: "from-blue-600 to-blue-400",
    code: "SELECT * FROM users WHERE active = 1",
  },
  {
    name: "SQLite",
    category: "Database",
    level: 80,
    color: "from-gray-400 to-blue-400",
    code: "CREATE TABLE users (id INTEGER PRIMARY KEY)",
  },

  // Tools
  {
    name: "Git",
    category: "Tools",
    level: 90,
    color: "from-orange-400 to-red-400",
    code: 'git commit -m "feat: add user auth"',
  },
  {
    name: "Linux",
    category: "Tools",
    level: 85,
    color: "from-yellow-400 to-orange-400",
    code: "sudo systemctl enable nginx",
  },
  {
    name: "SEO Optimization",
    category: "Tools",
    level: 75,
    color: "from-green-400 to-cyan-400",
    code: '<meta name="description" content="...">',
  },
  {
    name: "Responsive Design",
    category: "Tools",
    level: 90,
    color: "from-purple-400 to-pink-400",
    code: "@media (max-width: 768px) { ... }",
  },
]

const categories = ["All", "Frontend", "Backend", "Database", "Tools"]

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredSkills =
    selectedCategory === "All" ? skills : skills.filter((skill) => skill.category === selectedCategory)

  if (!mounted) return null

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
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels. Hover over any skill to see a code
            snippet and proficiency level.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                  : "border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <Card className="bg-gray-900 border-gray-700 hover:border-cyan-400 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    <Badge className={`bg-gradient-to-r ${skill.color} text-black text-xs`}>{skill.category}</Badge>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">Proficiency</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-gray-700" />
                  </div>

                  {hoveredSkill === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-gray-800 rounded-lg p-3 border border-gray-600"
                    >
                      <div className="text-xs text-gray-400 mb-1">Code Example:</div>
                      <code className="text-xs text-cyan-400 font-mono break-all">{skill.code}</code>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-purple-400">Skill Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">Frontend</div>
              <p className="text-gray-300">Modern React.js applications with responsive design</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">Backend</div>
              <p className="text-gray-300">RESTful APIs with Flask, Django, and Node.js</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">Full-Stack</div>
              <p className="text-gray-300">End-to-end web application development</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
