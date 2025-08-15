import React from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";

export default function About() {
    return (
        <>
            <SectionHeader
                id="about"
                eyebrow="About"
                title="Who I am"
                description="CSE student focusing on modern web development, algorithms, and scalable systems."
            />
            <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
                <Reveal>
                    <div className="glass p-6 transition-transform hover:-translate-y-1">
                        <h3 className="text-lg font-semibold">A short bio</h3>
                        <p className="mt-2 text-fg/75">
                            I’m a Computer Science & Engineering student
                            passionate about frontend and full-stack
                            development. I enjoy TypeScript, React, Tailwind,
                            Node, and exploring cloud & DevOps basics.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.05}>
                    <div className="glass p-6 transition-transform hover:-translate-y-1">
                        <h3 className="text-lg font-semibold">
                            What I’m looking for
                        </h3>
                        <ul className="mt-2 list-disc pl-4 text-fg/75">
                            <li>
                                Internships or junior roles (Frontend /
                                Full-stack)
                            </li>
                            <li>
                                Opportunities to solve real problems with users
                            </li>
                            <li>Teams that value code quality & mentorship</li>
                        </ul>
                    </div>
                </Reveal>
            </div>
        </>
    );
}
