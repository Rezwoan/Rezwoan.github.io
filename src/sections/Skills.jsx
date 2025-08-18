import React from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";

const skills = {
    Frontend: [
        "React.js",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
    ],
    Backend: ["Flask", "Django", "Node.js", "Express.js"],
    "Databases & DevOps": [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "SQLite",
        "Redis",
        "Linux Systems",
    ],
    Tools: ["Git", "GitHub", "Trello", "Figma"],
    "Soft Skills": [
        "Problem Solving",
        "Team Collaboration",
        "Self-management",
        "Attention to detail",
    ],
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
