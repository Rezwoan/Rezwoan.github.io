"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Code, Zap } from "lucide-react";

export function HeroSection() {
    const scrollToContact = () => {
        document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToProjects = () => {
        document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Hero Glow Effect */}
            <div className="absolute inset-0 bg-gradient-radial from-cyan-500/20 via-purple-500/10 to-transparent opacity-60" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-purple-600/30 rounded-full blur-3xl opacity-40" />

            {/* Animated particles */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        initial={{
                            x:
                                Math.random() *
                                (typeof window !== "undefined"
                                    ? window.innerWidth
                                    : 1200),
                            y:
                                Math.random() *
                                (typeof window !== "undefined"
                                    ? window.innerHeight
                                    : 800),
                            opacity: 0,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                            rotate: [0, 180, 360],
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

            <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24">
                {/* Symmetrical floating elements */}
                <motion.div
                    className="absolute -left-20 top-20 text-cyan-400 opacity-30"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                    }}
                >
                    <Code size={40} />
                </motion.div>
                <motion.div
                    className="absolute -right-20 top-20 text-purple-400 opacity-30"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, -10, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: 1.5,
                    }}
                >
                    <Zap size={40} />
                </motion.div>

                {/* Enhanced Avatar with glow */}
                <motion.div
                    initial={{ scale: 0, rotate: -180, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="mb-8 mt-24"
                >
                    <div className="relative mx-auto w-32 h-32 mb-8">
                        <div
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 p-2 rotate-smooth spin-continuous"
                            style={{
                                filter: "drop-shadow(0 0 20px rgba(34, 211, 238, 0.5))",
                            }}
                        >
                            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                    DR
                                </span>
                            </div>
                        </div>
                        <motion.div
                            className="absolute -inset-4 rounded-full border border-cyan-400 opacity-30"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.7, 0.3],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                            }}
                        />
                        <motion.div
                            className="absolute -inset-6 rounded-full border border-purple-400 opacity-20"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: 1,
                            }}
                        />
                    </div>
                </motion.div>

                {/* Enhanced Main headline with better spacing */}
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-3xl md:text-5xl lg:text-7xl font-black mb-10 leading-tight relative z-10"
                    style={{ lineHeight: "1.1" }}
                >
                    <span className="block bg-gradient-to-r from-white via-cyan-400 to-purple-600 bg-clip-text text-transparent mb-3">
                        Turning Ideas
                    </span>
                    <span className="block bg-gradient-to-r from-purple-600 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                        into Code,
                    </span>
                    <span className="block bg-gradient-to-r from-cyan-400 via-green-400 to-purple-600 bg-clip-text text-transparent mb-3">
                        and Code into
                    </span>
                    <motion.span
                        className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent"
                        animate={{
                            backgroundPosition: [
                                "0% 50%",
                                "100% 50%",
                                "0% 50%",
                            ],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                        }}
                    >
                        Impact.
                    </motion.span>
                </motion.h1>

                {/* Enhanced Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed relative z-10"
                >
                    I build modern, efficient, and scalable digital solutions
                    tailored to your needs from concept to deployment.
                    <br />
                    <span className="text-cyan-400 font-semibold">
                        Let's create something extraordinary together.
                    </span>
                </motion.p>

                {/* Symmetrical CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10"
                >
                    <Button
                        onClick={scrollToContact}
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 group cursor-pointer shadow-lg hover:shadow-cyan-500/25"
                    >
                        <Sparkles
                            className="mr-2 group-hover:animate-spin"
                            size={20}
                        />
                        Let's Work Together
                        <motion.div
                            className="ml-2"
                            animate={{ x: [0, 4, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                            }}
                        >
                            →
                        </motion.div>
                    </Button>

                    <Button
                        onClick={scrollToProjects}
                        variant="outline"
                        className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-purple-500/25 bg-transparent"
                    >
                        View My Work
                    </Button>
                </motion.div>

                {/* Stats or highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="mt-16 max-w-6xl mx-auto"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Now Building Card */}
                        <div className="glassmorphic rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                            <div className="text-center">
                                <div className="text-sm text-gray-300 mb-3 font-medium">
                                    Now building
                                </div>
                                <div className="text-lg md:text-xl font-bold text-cyan-400 mb-2 flex items-center justify-center gap-2">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                                    <a
                                        href="https://themothershub.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Visit The Mothers Hub (opens in new tab)"
                                        className="hover:text-cyan-300 transition-colors duration-200"
                                    >
                                        The Mothers Hub
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Projects Completed Card */}
                        <div className="glassmorphic rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-3">
                                    12+
                                </div>
                                <div className="text-sm text-gray-300 font-medium">
                                    Projects Completed
                                </div>
                            </div>
                        </div>

                        {/* Available to Work Card */}
                        <div className="glassmorphic rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                            <div className="text-center">
                                <div className="text-lg md:text-xl font-bold text-green-400 mb-3 flex items-center justify-center gap-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    Available
                                </div>
                                <div className="text-sm text-gray-300 font-medium">
                                    to Work
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
