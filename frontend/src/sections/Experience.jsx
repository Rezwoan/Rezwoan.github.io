import React from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";

const exp = [
    {
        role: "Frontend Intern (Demo)",
        org: "Awesome Co.",
        date: "Jun 2025 — Aug 2025",
        points: [
            "Built React components and improved Core Web Vitals.",
            "Implemented responsive design and accessibility fixes.",
            "Integrated APIs via React Query.",
        ],
    },
    {
        role: "Open Source Contributor",
        org: "Various",
        date: "2024 — Present",
        points: [
            "Contributed bug fixes & docs to community projects.",
            "Participated in code reviews and issue triage.",
        ],
    },
];

export default function Experience() {
    return (
        <>
            <SectionHeader
                id="experience"
                eyebrow="Experience"
                title="Where I’ve contributed"
                description="Internships, open source, hackathons—real shipping experience."
            />
            <div className="mx-auto max-w-5xl">
                <div className="relative pl-6">
                    {/* gradient rail */}
                    <div
                        className="absolute left-0 top-0 h-full w-1 rounded-full"
                        style={{
                            background:
                                "linear-gradient(180deg,var(--color-primary),var(--color-secondary))",
                        }}
                    />
                    <div className="space-y-5">
                        {exp.map((e, i) => (
                            <Reveal key={e.role} delay={i * 0.06}>
                                <div className="glass p-5">
                                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                                        <h3 className="text-lg font-semibold">
                                            {e.role} ·{" "}
                                            <span className="text-primary">
                                                {e.org}
                                            </span>
                                        </h3>
                                        <p className="text-sm text-fg/70">
                                            {e.date}
                                        </p>
                                    </div>
                                    <ul className="mt-3 list-disc pl-4 text-fg/80">
                                        {e.points.map((p, idx) => (
                                            <li key={idx}>{p}</li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
