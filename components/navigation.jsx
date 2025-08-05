"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Journey", href: "#journey" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) => item.href.substring(1));
            const currentSection = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (href) => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };

    return (
        <>
            {/* Desktop Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
                className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <motion.div
                            className="flex items-center cursor-pointer focus:outline-none"
                            onClick={() => scrollToSection("#hero")}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <motion.div
                                className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center"
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 20,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "linear",
                                }}
                                style={{
                                    aspectRatio: "1/1",
                                    minWidth: "48px",
                                    minHeight: "48px",
                                    borderRadius: "50%",
                                }}
                            >
                                <span className="text-black font-bold text-lg">
                                    DR
                                </span>
                            </motion.div>
                            <span className="ml-3 text-white font-bold text-xl hidden sm:block">
                                Din Muhammad Rezwoan
                            </span>
                        </motion.div>

                        {/* Desktop Menu and Download CV */}
                        <div className="hidden md:flex items-center justify-between w-full ml-8">
                            {/* Navigation Links */}
                            <div className="flex items-center space-x-8">
                                {navItems.map((item) => (
                                    <motion.button
                                        key={item.name}
                                        onClick={() =>
                                            scrollToSection(item.href)
                                        }
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`relative text-lg font-semibold transition-colors duration-200 cursor-pointer focus:outline-none ${
                                            activeSection ===
                                            item.href.substring(1)
                                                ? "text-cyan-400"
                                                : "text-gray-300 hover:text-cyan-400"
                                        }`}
                                    >
                                        {item.name}
                                        {/* Active indicator with rounded outline - no blur */}
                                        {activeSection ===
                                            item.href.substring(1) && (
                                            <motion.div
                                                className="absolute -inset-3 bg-cyan-400/10 rounded-full border border-cyan-400/40"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: "backOut",
                                                }}
                                                style={{
                                                    boxShadow:
                                                        "0 4px 20px rgba(34, 211, 238, 0.3)",
                                                }}
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Download CV Button - positioned on the far right */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    onClick={() => {
                                        // Download CV.pdf from public folder
                                        const link =
                                            document.createElement("a");
                                        link.href = "/CV.pdf";
                                        link.download =
                                            "Din_Muhammad_Rezwoan_CV.pdf";
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    }}
                                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-bold transition-all duration-300 cursor-pointer focus:outline-none"
                                >
                                    Download CV
                                </Button>
                            </motion.div>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 w-12 h-12 cursor-pointer focus:outline-none"
                            >
                                {isOpen ? <X size={20} /> : <Menu size={20} />}
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-md">
                            <div className="flex flex-col items-center justify-center h-full space-y-8">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                        }}
                                    >
                                        <motion.button
                                            onClick={() =>
                                                scrollToSection(item.href)
                                            }
                                            whileHover={{ scale: 1.1, x: 10 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`text-3xl font-bold transition-colors duration-200 cursor-pointer focus:outline-none ${
                                                activeSection ===
                                                item.href.substring(1)
                                                    ? "text-cyan-400"
                                                    : "text-white hover:text-cyan-400"
                                            }`}
                                        >
                                            {item.name}
                                        </motion.button>
                                    </motion.div>
                                ))}

                                {/* Download CV Button for Mobile */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        onClick={() => {
                                            // Download CV.pdf from public folder
                                            const link =
                                                document.createElement("a");
                                            link.href = "/CV.pdf";
                                            link.download =
                                                "Din_Muhammad_Rezwoan_CV.pdf";
                                            document.body.appendChild(link);
                                            link.click();
                                            document.body.removeChild(link);
                                        }}
                                        className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-bold transition-all duration-300 cursor-pointer focus:outline-none"
                                    >
                                        Download CV
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
