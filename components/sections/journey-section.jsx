"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Briefcase, Code, Award } from "lucide-react"

const journeyData = [
  {
    year: "2022",
    title: "Started BSc in Computer Science & Engineering",
    subtitle: "American International University-Bangladesh (AIUB)",
    description:
      "Began my journey in computer science with a focus on software engineering, data structures, and web development. Consistently challenged myself with competitive programming and real-world projects.",
    icon: GraduationCap,
    color: "from-blue-400 to-cyan-400",
  },
  {
    year: "2023",
    title: "Freelance Developer",
    subtitle: "Self-Employed | Remote",
    description:
      "Started developing custom software solutions for clients across different domains. Specialized in building secure and responsive full-stack web applications with focus on performance and user experience.",
    icon: Briefcase,
    color: "from-green-400 to-blue-400",
  },
  {
    year: "2024",
    title: "Advanced Full-Stack Development",
    subtitle: "Multiple Client Projects",
    description:
      "Handled full development cycles: requirements gathering, UI/UX design, backend logic, deployment, and maintenance. Prioritized code quality, performance optimization, and long-term client satisfaction.",
    icon: Code,
    color: "from-purple-400 to-pink-400",
  },
  {
    year: "2025",
    title: "Current CGPA: 3.86",
    subtitle: "Academic Excellence & Professional Growth",
    description:
      "Maintaining excellent academic performance while building real-world projects. Always learning and improving, ready to bring innovative solutions to life through reliable and smart development.",
    icon: Award,
    color: "from-yellow-400 to-orange-400",
  },
]

export function JourneySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4 flex items-center"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            My Journey
          </motion.h2>
          <motion.p
            className="text-2xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From curious student to passionate developer - here's how my story unfolds
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated timeline line - full length */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gray-700">
            <motion.div
              className="w-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-400 origin-top"
              style={{ height: "100%" }}
              initial={{ height: "0%" }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              {/* Glowing effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-400 blur-sm opacity-50"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </div>

          {/* Timeline items */}
          <div className="space-y-16">
            {journeyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"} mb-8 md:mb-0`}>
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(34, 211, 238, 0.2)",
                    }}
                    className="bg-gray-900 border border-gray-700 rounded-2xl p-8 cursor-pointer group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-400/50`}
                      >
                        <item.icon size={28} className="text-black" />
                      </motion.div>
                      <div
                        className={`px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-black font-bold text-lg`}
                      >
                        {item.year}
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <h4 className="text-lg text-purple-400 mb-4 font-semibold">{item.subtitle}</h4>
                    <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 border-4 border-black z-10"
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  />
                </motion.div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Work With Me Section - improved design */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Why Work With Me?
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Here's what makes our collaboration successful and impactful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Strong Foundation",
                description: "Solid expertise in both frontend & backend technologies",
                icon: "🏗️",
                color: "from-blue-400 to-cyan-400",
              },
              {
                title: "Clear Communication",
                description: "Transparent updates and on-time delivery guaranteed",
                icon: "💬",
                color: "from-green-400 to-blue-400",
              },
              {
                title: "Client Satisfaction",
                description: "Dedicated to long-term success and relationship building",
                icon: "🎯",
                color: "from-purple-400 to-pink-400",
              },
              {
                title: "Continuous Growth",
                description: "Always learning and improving with latest technologies",
                icon: "📈",
                color: "from-yellow-400 to-orange-400",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gray-900 border border-gray-700 rounded-2xl p-8 cursor-pointer group hover:border-cyan-400 transition-all duration-300"
              >
                <motion.div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors text-center">
                  {item.title}
                </h4>
                <p className="text-gray-300 group-hover:text-white transition-colors text-center leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
