import React from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";

const skills = {
    Languages: ["TypeScript", "JavaScript", "Python", "C/C++"],
    Frontend: ["React", "Vite", "Tailwind v4", "React Query", "Framer Motion"],
    Backend: ["Node.js", "Express", "REST APIs", "JWT/Auth"],
    "DB & Tools": ["PostgreSQL", "MongoDB", "Git", "Docker (basics)"],
};

export default function Skills() {
    return (
        <>
            <SectionHeader
                id="skills"
                eyebrow="Skills"
                title="Tools I work with"
                description="Always learning, always shipping."
            />
            <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
                {Object.entries(skills).map(([group, list], i) => (
                    <Reveal key={group} delay={i * 0.05}>
                        <div className="glass p-6 transition-transform hover:-translate-y-1">
                            <h3 className="text-lg font-semibold">{group}</h3>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {list.map((s) => (
                                    <span key={s} className="chip">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </>
    );
}
