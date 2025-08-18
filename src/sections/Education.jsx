import React from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";

const schools = [
    {
        degree: "B.Sc. in Computer Science & Engineering (CSE)",
        inst: "American International University-Bangladesh (AIUB), Dhaka",
        period: "Apr 2023 — Present",
        extra: "Current CGPA: 3.86 (as of Spring 2024-2025)",
    },
    {
        degree: "Higher Secondary Certificate (HSC), Science",
        inst: "Rajbari Government College, Rajbari",
        period: "2021",
        extra: "GPA: 5.00",
    },
    {
        degree: "Secondary School Certificate (SSC), Science",
        inst: "Rajbari Government High School, Rajbari",
        period: "2019",
        extra: "GPA: 5.00",
    },
];

export default function Education() {
    return (
        <>
            <SectionHeader
                id="education"
                eyebrow="Education"
                title="Academic background"
                description="Grounded in fundamentals, focused on practical application."
            />
            <div className="mx-auto max-w-5xl space-y-5">
                {schools.map((s, i) => (
                    <Reveal key={s.inst} delay={i * 0.05}>
                        <div className="glass p-6">
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                                <h3 className="text-lg font-semibold">
                                    {s.degree}
                                </h3>
                                <p className="text-sm text-fg/70">{s.period}</p>
                            </div>
                            <p className="mt-1 text-primary">{s.inst}</p>
                            <p className="mt-2 text-fg/80">{s.extra}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </>
    );
}
