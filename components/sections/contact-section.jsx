"use client"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Send, Github, Sparkles, ExternalLink } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Rezwoan",
      icon: Github,
      color: "hover:text-gray-300",
    },
    {
      name: "Email",
      url: "mailto:frezwoan@gmail.com",
      icon: Mail,
      color: "hover:text-cyan-400",
    },
    {
      name: "Fiverr",
      url: "https://fiverr.com/rezwoanfaisal",
      icon: ExternalLink,
      color: "hover:text-green-400",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/din-muhammad-rezwoan-b4b87020a",
      icon: ExternalLink,
      color: "hover:text-blue-400",
    },
  ]

  const additionalSocialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com/rezwoan.din.muhammad",
      label: "Facebook Profile",
      color: "hover:text-blue-500",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/XRezwoan",
      label: "@XRezwoan",
      color: "hover:text-gray-300",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/din.muhammad.rezwoan",
      label: "@din.muhammad.rezwoan",
      color: "hover:text-pink-400",
    },
  ]

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
          className="text-center mb-20"
        >
          <motion.h2
            className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-2xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ready to bring your vision to life? Let's create something amazing together!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-4xl font-bold mb-6 text-cyan-400">Let's Connect</h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, or just have a conversation about
                technology and development. Whether you need a reliable developer or want to collaborate on something
                amazing, I'm here to help.
              </p>
            </div>

            <div className="space-y-8">
              <motion.div
                className="flex items-center gap-6 cursor-pointer group"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-400/50"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Mail size={24} className="text-black" />
                </motion.div>
                <div>
                  <div className="text-white font-bold text-xl group-hover:text-cyan-400 transition-colors">Email</div>
                  <div className="text-gray-300 text-lg">frezwoan@gmail.com</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-6 cursor-pointer group"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-400/50"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <MapPin size={24} className="text-black" />
                </motion.div>
                <div>
                  <div className="text-white font-bold text-xl group-hover:text-purple-400 transition-colors">
                    Location
                  </div>
                  <div className="text-gray-300 text-lg">Dhaka, Bangladesh</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-6 cursor-pointer group"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ duration: 0.3 }}
                onClick={() => window.open("https://github.com/Rezwoan", "_blank")}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-green-400/50"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Github size={24} className="text-black" />
                </motion.div>
                <div>
                  <div className="text-white font-bold text-xl group-hover:text-green-400 transition-colors">
                    GitHub
                  </div>
                  <div className="text-gray-300 text-lg">github.com/Rezwoan</div>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8"
            >
              <h4 className="text-2xl font-bold mb-6 text-purple-400">Follow Me</h4>
              <div className="flex gap-4 mb-6">
                {socialLinks.map((link) => (
                  <motion.div key={link.name} whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="outline"
                      size="icon"
                      className={`w-14 h-14 rounded-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent cursor-pointer focus:outline-none ${link.color}`}
                      onClick={() => window.open(link.url, "_blank")}
                    >
                      <link.icon size={24} />
                    </Button>
                  </motion.div>
                ))}
              </div>

              {/* Additional Social Links */}
              <div className="space-y-3">
                {additionalSocialLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    className={`flex items-center gap-3 text-gray-400 transition-colors cursor-pointer ${link.color}`}
                    whileHover={{ x: 5 }}
                    onClick={() => window.open(link.url, "_blank")}
                  >
                    <ExternalLink size={16} />
                    <span>
                      {link.name}: {link.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-gray-900 border-gray-700 hover:border-cyan-400 transition-colors duration-300">
              <CardContent className="p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                        <Label htmlFor="name" className="text-white mb-3 block text-lg font-semibold">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-gray-800 border-gray-600 text-white focus:border-cyan-400 h-12 text-lg cursor-pointer focus:outline-none"
                          placeholder="Your name"
                        />
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                        <Label htmlFor="email" className="text-white mb-3 block text-lg font-semibold">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-gray-800 border-gray-600 text-white focus:border-cyan-400 h-12 text-lg cursor-pointer focus:outline-none"
                          placeholder="your.email@example.com"
                        />
                      </motion.div>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <Label htmlFor="subject" className="text-white mb-3 block text-lg font-semibold">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-gray-800 border-gray-600 text-white focus:border-cyan-400 h-12 text-lg cursor-pointer focus:outline-none"
                        placeholder="What's this about?"
                      />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <Label htmlFor="message" className="text-white mb-3 block text-lg font-semibold">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-gray-800 border-gray-600 text-white focus:border-cyan-400 resize-none text-lg cursor-pointer focus:outline-none"
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-4 rounded-lg text-xl font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus:outline-none"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-3">
                            <motion.div
                              className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            />
                            Sending Message...
                          </div>
                        ) : (
                          <div className="flex items-center gap-3">
                            <Send size={24} />
                            Send Message
                            <Sparkles size={20} />
                          </div>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <motion.div
                      className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 flex items-center justify-center"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360, 0],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Send size={32} className="text-black" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white mb-6">Message Sent Successfully!</h3>
                    <p className="text-xl text-gray-300 mb-8">
                      Thank you for reaching out! I'll get back to you as soon as possible.
                    </p>
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="text-4xl"
                    >
                      ✈️
                    </motion.div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <h3 className="text-4xl font-bold mb-12 text-purple-400">Let's Build Something Great</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center cursor-pointer group"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-6xl mb-6"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                🚀
              </motion.div>
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                Fast Response
              </h4>
              <p className="text-gray-300 text-lg group-hover:text-white transition-colors">
                I typically respond within 24 hours
              </p>
            </motion.div>
            <motion.div
              className="text-center cursor-pointer group"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-6xl mb-6"
                animate={{
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              >
                💡
              </motion.div>
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                Creative Solutions
              </h4>
              <p className="text-gray-300 text-lg group-hover:text-white transition-colors">
                Innovative approaches to complex problems
              </p>
            </motion.div>
            <motion.div
              className="text-center cursor-pointer group"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-6xl mb-6"
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              >
                🤝
              </motion.div>
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                Collaboration
              </h4>
              <p className="text-gray-300 text-lg group-hover:text-white transition-colors">
                Working together to achieve your goals
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
