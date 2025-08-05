"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Server, Palette, Users, Settings } from "lucide-react"

const skillsData = [
  {
    category: "Frontend Development",
    icon: Code,
    skills: [
      "HTML",
      "CSS",
      "JavaScript/TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "Next.js",
      "React",
      "Vercel AI SDK",
      "Gsap",
    ],
  },
  {
    category: "Backend & Systems",
    icon: Server,
    skills: ["Unix", "C", "C++", "Python", "TypeScript", "Git", "GitHub", "Docker", "GCP", "PostgreSQL"],
  },
  {
    category: "Design & Creative Tools",
    icon: Palette,
    skills: ["Figma", "Davinci Code", "Illustrator", "Canva", "Keynote"],
  },
  {
    category: "Soft Skills",
    icon: Users,
    skills: ["Communication", "Problem-Solving", "Adaptability", "Learning Agility", "Teamwork", "Creativity", "Focus"],
  },
  {
    category: "AI & Fullstack Engineering",
    icon: Settings,
    skills: [
      "LLM Providers (ChatGPT, Whisper, Groq, Mistral & Claude)",
      "AI Agents",
      "Prompt engineering",
      "Vector databases (Weaviate, Pinecone)",
      "RAG (Retrieval-Augmented Generation)",
      "Tool routing & calling",
      "Hugging Face Transformers",
      "Vercel AI SDK",
      "Supabase",
      "Prisma",
      "Next.js",
    ],
  },
]

const featuredProjects = [
  {
    title: "The Mothers Hub",
    description: "Wellness platform empowering mothers at every stage with holistic solutions",
    image: "/project1_TheMothersHub.png",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    link: "#",
  },
  {
    title: "Play Chike",
    description: "Live trivia game platform with real-time competition and rewards",
    image: "/project2_PlayChike.jpg",
    technologies: ["React", "TypeScript", "Real-time APIs", "Mobile Design"],
    link: "#",
  },
  {
    title: "Fursume",
    description: "Creative pet resume builder helping pets stand out for adoption and services",
    image: "/project3_Fursume.png",
    technologies: ["React", "Next.js", "UI/UX Design", "Creative Development"],
    link: "#",
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 flex items-center"
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12 mb-20">
          {skillsData.map((category, categoryIndex) => {
            const IconComponent = category.icon

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="space-y-4"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <IconComponent className="w-6 h-6 text-gray-400" />
                  <h3 className="text-xl font-semibold text-gray-300">{category.category}</h3>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.2 + skillIndex * 0.05,
                      }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(59, 130, 246, 0.1)",
                        borderColor: "rgba(59, 130, 246, 0.3)",
                      }}
                      className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm font-medium text-gray-200 cursor-pointer transition-all duration-200 hover:text-white"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="group cursor-pointer"
          >
            <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">50+</div>
            <p className="text-gray-300 group-hover:text-white transition-colors">Technologies Mastered</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="group cursor-pointer"
          >
            <div className="text-3xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
              5+
            </div>
            <p className="text-gray-300 group-hover:text-white transition-colors">Years Experience</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="group cursor-pointer"
          >
            <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">
              100+
            </div>
            <p className="text-gray-300 group-hover:text-white transition-colors">Projects Completed</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
