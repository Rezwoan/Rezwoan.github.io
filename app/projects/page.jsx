"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github } from "lucide-react"
import { CustomCursor } from "@/components/custom-cursor"

const projects = [
  {
    id: 1,
    title: "Wellness Program Site",
    role: "Full-stack Developer",
    description: "A comprehensive wellness platform with user management and program tracking",
    longDescription:
      "Built a complete wellness program management system with user authentication, program enrollment, progress tracking, and administrative dashboard. Implemented reusable React components and optimized performance through code-splitting and image optimization.",
    technologies: ["React.js", "Flask", "SQL", "Tailwind CSS", "REST API"],
    highlights: [
      "Reusable component architecture",
      "Image and code-splitting for performance",
      "SQL schema design and optimization",
      "Stable REST API endpoints",
      "User authentication and authorization",
    ],
    image: "/wellness-dashboard-interface.png",
    github: "https://github.com/Rezwoan/wellness-program",
    live: "https://wellness-program.vercel.app",
    color: "from-green-400 to-blue-400",
  },
  {
    id: 2,
    title: "TheMothersHub.com",
    role: "Full-stack Developer",
    description: "Modern platform for mothers with community features and resource sharing",
    longDescription:
      "Developed a scalable platform for mothers to connect, share resources, and access parenting information. Focused on performance optimization, smooth user experience, and modern design patterns.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Socket.io"],
    highlights: [
      "Modern, scalable architecture",
      "Real-time chat functionality",
      "Performance optimization",
      "Smooth integration between components",
      "Mobile-responsive design",
    ],
    image: "/mothers-community-platform.png",
    github: "https://github.com/Rezwoan/mothers-hub",
    live: "https://themothershub.com",
    color: "from-pink-400 to-purple-400",
  },
  {
    id: 3,
    title: "Fursume.com",
    role: "Frontend Developer",
    description: "Professional resume builder with modern templates and validation",
    longDescription:
      "Created a user-friendly resume builder with multiple professional templates, real-time preview, and comprehensive form validation. Collaborated with a team to deliver a polished product.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Form Validation", "PDF Generation"],
    highlights: [
      "Mobile-first responsive design",
      "Strong form validation",
      "Real-time preview functionality",
      "Team collaboration and code reviews",
      "Multiple professional templates",
    ],
    image: "/resume-builder-templates.png",
    github: "https://github.com/Rezwoan/fursume",
    live: "https://fursume.com",
    color: "from-blue-400 to-cyan-400",
  },
  {
    id: 4,
    title: "PlayChike.com",
    role: "Frontend Developer",
    description: "Blockchain-based gaming platform with reward system integration",
    longDescription:
      "Developed the frontend for a blockchain gaming platform featuring reward flows, wallet integration, and seamless user experience. Integrated with REST endpoints and managed complex state for gaming mechanics.",
    technologies: ["React.js", "Web3.js", "Redux", "REST API", "Blockchain Integration"],
    highlights: [
      "Blockchain reward flow implementation",
      "REST endpoint integration",
      "Complex state management",
      "Wallet connectivity features",
      "Gaming UI/UX optimization",
    ],
    image: "/blockchain-gaming-platform.png",
    github: "https://github.com/Rezwoan/playchike",
    live: "https://playchike.com",
    color: "from-purple-400 to-pink-400",
  },
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null)

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
            Featured Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work in full-stack web development, featuring modern technologies and innovative
            solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <Card className="bg-gray-900 border-gray-700 hover:border-cyan-400 transition-all duration-300 h-full overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20`}></div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`bg-gradient-to-r ${project.color} text-black font-semibold`}>
                      {project.role}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.github, "_blank")
                      }}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className={`bg-gradient-to-r ${project.color} text-black hover:opacity-80`}
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.live, "_blank")
                      }}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />

                <div className="flex items-center gap-4">
                  <Badge className={`bg-gradient-to-r ${selectedProject.color} text-black font-semibold`}>
                    {selectedProject.role}
                  </Badge>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                      onClick={() => window.open(selectedProject.github, "_blank")}
                    >
                      <Github size={16} className="mr-2" />
                      View Code
                    </Button>
                    <Button
                      size="sm"
                      className={`bg-gradient-to-r ${selectedProject.color} text-black hover:opacity-80`}
                      onClick={() => window.open(selectedProject.live, "_blank")}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Project Overview</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.longDescription}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Key Highlights</h3>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-gray-600 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
