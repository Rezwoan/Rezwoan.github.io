"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Send, Github } from "lucide-react";
import { CustomCursor } from "@/components/custom-cursor";

export default function ContactPage() {
    const qs = useSearchParams();
    const isSubmitted = useMemo(() => qs.get("sent") === "1", [qs]);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) =>
        setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

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
                        Get In Touch
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Have a project in mind or want to collaborate? I'd love
                        to hear from you. Let's create something amazing
                        together!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-cyan-400">
                                Let's Connect
                            </h2>
                            <p className="text-gray-300 mb-8">
                                I'm always open to discussing new opportunities,
                                interesting projects, or just having a chat
                                about technology and development.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center">
                                    <Mail size={20} className="text-black" />
                                </div>
                                <div>
                                    <div className="text-white font-semibold">
                                        Email
                                    </div>
                                    <div className="text-gray-300">
                                        frezwoan@gmail.com
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                                    <MapPin size={20} className="text-black" />
                                </div>
                                <div>
                                    <div className="text-white font-semibold">
                                        Location
                                    </div>
                                    <div className="text-gray-300">
                                        Dhaka, Bangladesh
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 flex items-center justify-center">
                                    <Github size={20} className="text-black" />
                                </div>
                                <div>
                                    <div className="text-white font-semibold">
                                        GitHub
                                    </div>
                                    <div className="text-gray-300">
                                        github.com/Rezwoan
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-8">
                            <h3 className="text-xl font-semibold mb-4 text-purple-400">
                                Follow Me
                            </h3>
                            <div className="flex gap-4">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/Rezwoan",
                                            "_blank"
                                        )
                                    }
                                >
                                    <Github size={20} />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent"
                                    onClick={() =>
                                        window.open(
                                            "mailto:frezwoan@gmail.com",
                                            "_blank"
                                        )
                                    }
                                >
                                    <Mail size={20} />
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form: native POST to your proxy; server redirects to ?sent=1 */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Card className="bg-gray-900 border-gray-700">
                            <CardContent className="p-8">
                                {!isSubmitted ? (
                                    <form
                                        action="/api/formbold"
                                        method="POST"
                                        encType="multipart/form-data"
                                        className="space-y-6"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <Label
                                                    htmlFor="name"
                                                    className="text-white mb-2 block"
                                                >
                                                    Name
                                                </Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="bg-gray-800 border-gray-600 text-white focus:border-cyan-400"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div>
                                                <Label
                                                    htmlFor="email"
                                                    className="text-white mb-2 block"
                                                >
                                                    Email
                                                </Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="bg-gray-800 border-gray-600 text-white focus:border-cyan-400"
                                                    placeholder="your.email@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <Label
                                                htmlFor="subject"
                                                className="text-white mb-2 block"
                                            >
                                                Subject
                                            </Label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="bg-gray-800 border-gray-600 text-white focus:border-cyan-400"
                                                placeholder="What's this about?"
                                            />
                                        </div>

                                        <div>
                                            <Label
                                                htmlFor="message"
                                                className="text-white mb-2 block"
                                            >
                                                Message
                                            </Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                className="bg-gray-800 border-gray-600 text-white focus:border-cyan-400 resize-none"
                                                placeholder="Tell me about your project or just say hello!"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                                        >
                                            <div className="flex items-center gap-2">
                                                <Send size={20} />
                                                Send Message
                                            </div>
                                        </Button>
                                    </form>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 flex items-center justify-center">
                                            <Send
                                                size={24}
                                                className="text-black"
                                            />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">
                                            Message Sent!
                                        </h3>
                                        <p className="text-gray-300">
                                            Thank you for reaching out! I'll get
                                            back to you as soon as possible.
                                        </p>
                                        <motion.div
                                            initial={{ x: -100, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.5 }}
                                            className="mt-6"
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
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <h2 className="text-3xl font-bold mb-8 text-purple-400">
                        Let's Build Something Great
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Fast Response
                            </h3>
                            <p className="text-gray-300">
                                I typically respond within 24 hours
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-4">💡</div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Creative Solutions
                            </h3>
                            <p className="text-gray-300">
                                Innovative approaches to complex problems
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Collaboration
                            </h3>
                            <p className="text-gray-300">
                                Working together to achieve your goals
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
