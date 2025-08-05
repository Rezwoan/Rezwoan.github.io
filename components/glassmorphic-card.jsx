"use client"

import { motion } from "framer-motion"

export function GlassmorphicCard({ children, className = "", hover = true }) {
  return (
    <motion.div
      className={`
        bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl
        shadow-xl hover:shadow-2xl transition-all duration-300
        ${hover ? "hover:bg-white/10 hover:border-white/20" : ""}
        ${className}
      `}
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.3 }}
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      }}
    >
      {children}
    </motion.div>
  )
}
