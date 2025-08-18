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
                description="CSE student focused on modern frontend & backend, building user-focused applications."
            />

            <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
                <Reveal>
                    <div className="glass p-6 transition-transform hover:-translate-y-1">
                        <h3 className="text-lg font-semibold">A short bio</h3>
                        <p className="mt-2 text-fg/75">
                            I’m Din Muhammad Rezwoan, a Bangladesh-based
                            developer. I love crafting responsive, accessible
                            web apps with React & Tailwind on the frontend and
                            Python/JS backends. I care about clean code,
                            performance and thoughtful UX.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.05}>
                    <div className="glass p-6 transition-transform hover:-translate-y-1">
                        <h3 className="text-lg font-semibold">
                            What I’m looking for
                        </h3>
                        <ul className="mt-2 list-disc pl-4 text-fg/75">
                            <li>Internships, junior roles, or freelance</li>
                            <li>
                                Opportunities to ship impactful features with a
                                team
                            </li>
                            <li>
                                Mentorship and code-quality focused environments
                            </li>
                        </ul>
                    </div>
                </Reveal>
            </div>
        </>
    );
}
