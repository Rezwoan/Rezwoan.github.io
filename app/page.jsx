"use client";

import { useEffect, useRef } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { JourneySection } from "@/components/sections/journey-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { AnimatedBackground } from "@/components/animated-background";

export default function HomePage() {
    const containerRef = useRef(null);

    useEffect(() => {
        // Add smooth scroll behavior
        document.documentElement.style.scrollBehavior = "smooth";

        return () => {
            document.documentElement.style.scrollBehavior = "auto";
        };
    }, []);

    return (
        <div ref={containerRef} className="relative">
            <CustomCursor />
            <AnimatedBackground />

            <div className="smooth-scroll">
                <section id="hero" className="h-screen">
                    <HeroSection />
                </section>

                <section id="about" className="min-h-screen">
                    <AboutSection />
                </section>

                <section id="journey" className="min-h-screen">
                    <JourneySection />
                </section>

                <section id="skills" className="min-h-screen">
                    <SkillsSection />
                </section>

                <section id="projects" className="min-h-screen">
                    <ProjectsSection />
                </section>

                <section id="contact" className="min-h-screen">
                    <ContactSection />
                </section>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
