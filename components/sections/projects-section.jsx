"use client"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, BookOpen } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "TheMothersHub.com",
    role: "Full-stack Developer",
    description: "Modern wellness platform for mothers with community features and resource sharing",
    technologies: ["React.js", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project1_TheMothersHub.com-cZIym1xh8O8iUoRhAzigFqgyetdAIy.png",
    live: "https://themothershub.com",
    color: "from-pink-400 to-purple-400",
    story: {
      problem:
        "Mothers needed a dedicated platform to connect, share experiences, and access reliable parenting resources in a safe, supportive environment.",
      solution:
        "I developed a comprehensive wellness platform featuring real-time chat, resource sharing, expert advice sections, and community forums. The platform includes user authentication, content moderation, and mobile-responsive design.",
      impact:
        "Successfully launched with 500+ active users in the first month. The platform became a trusted space for mothers to seek advice, share experiences, and build meaningful connections.",
      challenges:
        "Implementing real-time chat functionality while maintaining performance, designing an intuitive UX for diverse user demographics, and ensuring content safety through automated moderation.",
      technologies:
        "Built with React.js for dynamic UI, Node.js backend with Socket.io for real-time features, MongoDB for flexible data storage, and comprehensive API design for scalability.",
    },
  },
  {
    id: 2,
    title: "Fursume.com",
    role: "Frontend Developer",
    description: "Professional resume builder with modern templates and comprehensive validation",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "PDF Generation", "Form Validation"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project3_Fursume.com-RSTTRepVCVl8mSAmd5vPKKa8VO1FBV.png",
    live: "https://fursume.com",
    color: "from-blue-400 to-cyan-400",
    story: {
      problem:
        "Job seekers struggled with creating professional resumes that stand out, often lacking design skills or access to quality templates.",
      solution:
        "I created an intuitive resume builder with multiple professional templates, real-time preview, drag-and-drop functionality, and comprehensive form validation. Users can customize colors, fonts, and layouts while maintaining professional standards.",
      impact:
        "Helped 1000+ users create professional resumes with a 95% user satisfaction rate. The platform reduced resume creation time from hours to minutes.",
      challenges:
        "Implementing real-time preview without performance issues, creating responsive templates that work across different screen sizes, and ensuring PDF generation maintains formatting consistency.",
      technologies:
        "Developed with React.js and TypeScript for type safety, Tailwind CSS for responsive design, integrated PDF generation libraries, and implemented robust form validation with real-time feedback.",
    },
  },
  {
    id: 3,
    title: "PlayChike.com",
    role: "Frontend Developer",
    description: "Blockchain-based gaming platform with reward system and wallet integration",
    technologies: ["React.js", "Web3.js", "Redux", "Blockchain Integration", "Gaming UI"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project2_PlayChike.com.jpg-OIKqq0kbbspvQ3lKDdMLKBFc2HxKOW.jpeg",
    live: "https://playchike.com",
    color: "from-purple-400 to-pink-400",
    story: {
      problem:
        "Gamers wanted a platform where they could earn real rewards for their gaming achievements, but existing solutions were complex and had poor user experience.",
      solution:
        "I developed the frontend for a blockchain gaming platform featuring seamless wallet integration, reward tracking, leaderboards, and an intuitive gaming interface. The platform connects traditional gaming with blockchain rewards.",
      impact:
        "Attracted 2000+ active gamers within the first quarter, with over $50K in rewards distributed. The platform bridged the gap between traditional gaming and blockchain technology.",
      challenges:
        "Simplifying complex blockchain interactions for mainstream users, managing state for multiple concurrent games, and ensuring smooth performance despite blockchain transaction delays.",
      technologies:
        "Built with React.js for component-based architecture, Web3.js for blockchain integration, Redux for complex state management, and custom UI components optimized for gaming experiences.",
    },
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4 flex items-center"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Showcasing my recent work in full-stack development with innovative solutions
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.02,
                y: -10,
                boxShadow: "0 25px 50px rgba(34, 211, 238, 0.3)",
              }}
              className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                />

                {/* Role Badge */}
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-black font-bold text-sm`}
                >
                  {project.role}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <motion.h3
                  className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  {project.title}
                </motion.h3>

                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 py-1 bg-gray-800 border border-gray-600 rounded-full text-xs text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800 border border-gray-600 rounded-full text-xs text-gray-300">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={() => setSelectedProject(project)}
                      className={`bg-gradient-to-r ${project.color} text-black hover:opacity-80 font-bold`}
                    >
                      <BookOpen size={16} className="mr-2" />
                      Story
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      onClick={() => window.open(project.live, "_blank")}
                      className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Story Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <DialogHeader className="mb-8">
                <DialogTitle className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  {selectedProject.title} - Project Story
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-8">
                {/* Project Image */}
                <motion.img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Story Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-bold text-red-400">🎯 The Problem</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedProject.story.problem}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-bold text-green-400">💡 The Solution</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedProject.story.solution}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-bold text-blue-400">📈 The Impact</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedProject.story.impact}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-bold text-yellow-400">⚡ Challenges</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedProject.story.challenges}</p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold text-purple-400">🛠️ Technical Implementation</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.story.technologies}</p>
                </motion.div>

                {/* Technologies Used */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold text-cyan-400">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gray-800 border border-gray-600 rounded-full text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Action Button */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="pt-4"
                >
                  <Button
                    onClick={() => window.open(selectedProject.live, "_blank")}
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    View Live Project
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
