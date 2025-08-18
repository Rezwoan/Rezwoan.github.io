import React from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";

const exp = [
    {
        role: "Full-Stack Developer (Freelance)",
        org: "TheMothersHub.com",
        date: "Apr 2025 — Present",
        points: [
            "Built wellness-program pages with React + Tailwind; Flask REST backend.",
            "Created reusable components, code-splitting & image optimization for faster loads.",
            "Designed SQL schema, added indexes, and stabilized APIs for smooth integrations.",
        ],
    },
    {
        role: "Frontend Developer (Freelance)",
        org: "Fursume.com",
        date: "Mar 2024 — Dec 2024",
        points: [
            "Developed pet résumé & travel-card creation flows with accessible, mobile-first forms.",
            "Added client/server validation to reduce submission errors and improve UX.",
            "Integrated REST APIs and collaborated closely on design system components.",
        ],
    },
    {
        role: "Frontend Developer (Freelance)",
        org: "PlayChike.com",
        date: "Nov 2023 — Jan 2024",
        points: [
            "Built the referral-rewards interface with reliable state management.",
            "Integrated REST endpoints; collaborated with backend on rewards logic.",
            "Improved performance and responsiveness across key user journeys.",
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
                description="Freelance roles delivering real features and performance wins."
            />
            <div className="mx-auto max-w-5xl">
                <div className="relative pl-6">
                    <div
                        className="absolute left-0 top-0 h-full w-1 rounded-full"
                        style={{
                            background:
                                "linear-gradient(180deg,var(--color-primary),var(--color-secondary))",
                        }}
                    />
                    <div className="space-y-5">
                        {exp.map((e, i) => (
                            <Reveal key={e.role + e.org} delay={i * 0.06}>
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
