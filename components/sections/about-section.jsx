"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Heart, Zap, Target, Award, Users } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and scalable solutions",
    },
    {
      icon: Heart,
      title: "Passionate",
      description: "Deeply committed to every project and client success",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising on quality",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on exceeding expectations and requirements",
    },
  ]

  const achievements = [
    {
      icon: Award,
      number: "3.86",
      label: "Current CGPA",
      color: "from-yellow-400 to-orange-400",
    },
    {
      icon: Code,
      number: "15+",
      label: "Technologies",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Users,
      number: "100%",
      label: "Client Satisfaction",
      color: "from-green-400 to-emerald-400",
    },
  ]

  return (
    <div
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 px-4 flex items-center relative overflow-hidden"
    >
      {/* Glassmorphic background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
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
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content with glassmorphic card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">
              <motion.p
                className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Hello! I'm <span className="text-cyan-400 font-bold">Rezwoan</span>, a passionate and detail-oriented
                Computer Science student based in <span className="text-purple-400 font-bold">Dhaka, Bangladesh</span>.
                I specialize in crafting clean, efficient, and scalable solutions through code.
              </motion.p>

              <motion.p
                className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                With a strong foundation in programming, problem-solving, and full-stack development, I bring both
                technical expertise and creative thinking to every project.
              </motion.p>

              <motion.p
                className="text-xl md:text-2xl text-gray-400 leading-relaxed"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                I thrive on challenges, love working on meaningful software, and take pride in delivering work that not
                only meets requirements but <span className="text-green-400 font-bold">exceeds expectations</span>.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center lg:text-left"
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Let's build something great together.
              </p>
            </motion.div>
          </motion.div>

          {/* Features Grid with glassmorphic effects */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 cursor-pointer group shadow-xl hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-400/50"
                >
                  <feature.icon size={28} className="text-black" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-4xl font-bold mb-12 text-purple-400">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 cursor-pointer group shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  className={`w-20 h-20 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <achievement.icon size={32} className="text-black" />
                </motion.div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {achievement.number}
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors text-lg">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
