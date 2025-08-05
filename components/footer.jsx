"use client"

import { motion } from "framer-motion"
import { Github, Mail, MapPin, Heart, ExternalLink, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

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
      label: "Facebook",
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

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Journey", href: "#journey" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const services = [
    "Web Development",
    "Full-Stack Solutions",
    "API Development",
    "UI/UX Implementation",
    "Database Design",
    "Performance Optimization",
  ]

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-t from-gray-900 via-black to-gray-900 border-t border-gray-800 py-16 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400"></div>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * 400,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <motion.div className="flex items-center mb-6" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <motion.div
                className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center mr-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <span className="text-black font-bold text-xl">DR</span>
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white">Din Muhammad Rezwoan</h3>
                <p className="text-cyan-400 font-semibold">Full-Stack Developer</p>
              </div>
            </motion.div>

            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
              Passionate about turning ideas into code and code into impact. Building modern, efficient, and scalable
              digital solutions from Dhaka, Bangladesh.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <motion.div
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                <MapPin size={16} className="text-purple-400" />
                <span>Dhaka, Bangladesh</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
                onClick={() => window.open("mailto:frezwoan@gmail.com", "_blank")}
              >
                <Mail size={16} className="text-cyan-400" />
                <span>frezwoan@gmail.com</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Calendar size={16} className="text-green-400" />
                <span>Available for freelance work</span>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mb-6">
              {socialLinks.map((link) => (
                <motion.div key={link.name} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => window.open(link.url, "_blank")}
                    className={`border-gray-600 text-gray-400 bg-transparent hover:border-current transition-all duration-300 focus:outline-none ${link.color}`}
                  >
                    <link.icon size={20} />
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Additional Social Links */}
            <div className="space-y-2">
              {additionalSocialLinks.map((link) => (
                <motion.div
                  key={link.name}
                  className={`flex items-center gap-3 text-gray-400 transition-colors cursor-pointer ${link.color}`}
                  whileHover={{ x: 5 }}
                  onClick={() => window.open(link.url, "_blank")}
                >
                  <ExternalLink size={14} />
                  <span className="text-sm">
                    {link.name}: {link.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-left focus:outline-none"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  className="flex items-center gap-2 text-gray-400"
                  whileHover={{ x: 5, color: "#22d3ee" }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: `hsl(${180 + index * 30}, 70%, 60%)`,
                    }}
                  ></div>
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>© {currentYear} Din Muhammad Rezwoan. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart size={16} className="text-red-400 fill-current" />
              </motion.div>
              <span>in Bangladesh</span>
            </div>

            <div className="flex items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors text-sm focus:outline-none"
                onClick={() => scrollToSection("#contact")}
              >
                Let's Work Together
              </motion.button>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                onClick={() => scrollToSection("#hero")}
              >
                <span className="text-sm">Back to top</span>
                <ExternalLink size={14} className="rotate-[-90deg]" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
