import React from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Education() {
    return (
        <>
            <SectionHeader
                id="education"
                eyebrow="Education"
                title="Academic background"
                description="Grounded in fundamentals, focused on practical application."
            />
            <div className="mx-auto max-w-5xl">
                <Reveal>
                    <div className="glass p-6">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                            <h3 className="text-lg font-semibold">
                                B.Sc. in Computer Science & Engineering (CSE)
                            </h3>
                            <p className="text-sm text-fg/70">
                                2022 — 2026 (expected)
                            </p>
                        </div>
                        <p className="mt-1 text-primary">
                            Your University, City
                        </p>
                        <ul className="mt-3 list-disc pl-4 text-fg/80">
                            <li>CGPA: X.XX/4.00 (update later)</li>
                            <li>
                                Relevant Coursework: DSA, Algorithms, DBMS, OS,
                                Networks, Web Dev
                            </li>
                            <li>Clubs: Programming Club, Robotics Club</li>
                        </ul>
                    </div>
                </Reveal>
            </div>
        </>
    );
}
