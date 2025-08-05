"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { CustomCursor } from "@/components/custom-cursor"

const blogPosts = [
  {
    id: 1,
    title: "Mastering React Hooks: A Complete Guide",
    excerpt: "Deep dive into React hooks and how they can transform your component logic and state management.",
    category: "React Tips",
    date: "2024-12-15",
    readTime: "8 min read",
    image: "/react-hooks-code-editor.png",
    color: "from-blue-400 to-cyan-400",
  },
  {
    id: 2,
    title: "Linux Command Line Productivity Hacks",
    excerpt: "Essential Linux commands and shortcuts that every developer should know to boost productivity.",
    category: "Linux Hacks",
    date: "2024-12-10",
    readTime: "6 min read",
    image: "/linux-terminal-commands.png",
    color: "from-green-400 to-blue-400",
  },
  {
    id: 3,
    title: "Optimizing Web Performance: Core Web Vitals",
    excerpt: "Learn how to improve your website's performance metrics and user experience with practical tips.",
    category: "Web Performance",
    date: "2024-12-05",
    readTime: "10 min read",
    image: "/web-performance-dashboard.png",
    color: "from-purple-400 to-pink-400",
  },
  {
    id: 4,
    title: "C++ Memory Management Best Practices",
    excerpt: "Understanding pointers, memory allocation, and avoiding common pitfalls in C++ development.",
    category: "C++ Tips",
    date: "2024-11-28",
    readTime: "12 min read",
    image: "/cpp-memory-management.png",
    color: "from-red-400 to-orange-400",
  },
  {
    id: 5,
    title: "Building RESTful APIs with Flask",
    excerpt: "Step-by-step guide to creating robust and scalable REST APIs using Python Flask framework.",
    category: "Backend Development",
    date: "2024-11-20",
    readTime: "15 min read",
    image: "/flask-api-development.png",
    color: "from-green-500 to-teal-400",
  },
  {
    id: 6,
    title: "Hyprland: The Future of Wayland Compositors",
    excerpt: "Exploring the features and customization options of Hyprland window manager on Linux.",
    category: "Linux Hacks",
    date: "2024-11-15",
    readTime: "7 min read",
    image: "/hyprland-desktop.png",
    color: "from-cyan-400 to-blue-500",
  },
]

const categories = ["All", "React Tips", "Linux Hacks", "Web Performance", "C++ Tips", "Backend Development"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

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
            Blog & Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sharing my thoughts on web development, programming tips, and technology insights. Learn from my experiences
            and discoveries in the world of software development.
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

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link href={`/blog/${post.id}`}>
                <Card className="bg-gray-900 border-gray-700 hover:border-cyan-400 transition-all duration-300 h-full overflow-hidden cursor-pointer">
                  <div className="relative">
                    <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${post.color} opacity-20`}></div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={`bg-gradient-to-r ${post.color} text-black font-semibold text-xs`}>
                        {post.category}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white line-clamp-2">{post.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-cyan-400" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Blog Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-purple-400">Blog Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{blogPosts.length}</div>
              <p className="text-gray-300">Articles Published</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">{categories.length - 1}</div>
              <p className="text-gray-300">Categories</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <p className="text-gray-300">Hours of Content</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
