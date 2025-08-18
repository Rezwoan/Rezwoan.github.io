import { motion } from "framer-motion";
import LiquidGlassLite from "../components/LiquidGlassLite.jsx";

export default function Hero() {
    return (
        <section className="section-wrap">
            <div className="grid items-center gap-10 sm:grid-cols-2">
                {/* Left */}
                <div className="soft-gradient p-6 rounded-3xl glass-strong">
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <LiquidGlassLite
                            padding="8px 12px"
                            cornerRadius={999}
                            blurPx={10}
                            saturation={1.35}
                            displacementScale={30}
                            elasticity={0.25}
                            overLight={false}
                            bg="color-mix(in oklab, var(--color-primary) 22%, var(--color-surface) 60%)"
                            highlightColor="rgba(255,255,255,0.18)"
                            style={{
                                border: "1px solid color-mix(in oklab, var(--color-primary) 35%, var(--color-border) 55%)",
                            }}
                            className="inline-block"
                        >
                            <span className="text-xs font-semibold text-fg drop-shadow-sm">
                                Open to Internships & Roles
                            </span>
                        </LiquidGlassLite>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05, duration: 0.6 }}
                        className="mt-4 text-5xl font-extrabold tracking-tight"
                    >
                        Hi, I’m{" "}
                        <span className="text-gradient">&nbsp;Rezwoan</span> a
                        CSE student & web developer.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12, duration: 0.6 }}
                        className="mt-4 text-fg/80 max-w-prose"
                    >
                        I build clean, user-focused web apps with React,
                        Tailwind, and Python/JS backends. I enjoy turning ideas
                        into fast, reliable products.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.18, duration: 0.6 }}
                        className="mt-6 flex flex-wrap items-center gap-3"
                    >
                        <a href="#projects" className="btn btn-primary">
                            View Projects
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                        <a href="/CV.pdf" className="btn btn-outline">
                            Download CV
                        </a>
                    </motion.div>
                </div>

                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative w-full overflow-hidden glass-strong rounded-3xl tilt"
                >
                    <img
                        src="/profile.jpg"
                        alt="Din Muhammad Rezwoan"
                        className="h-full w-full object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
