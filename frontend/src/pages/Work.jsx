import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import { useState, useMemo } from "react";

export default function Work() {
    // DATA LIVES HERE (not shared)
    const projects = [
        {
            title: "TheMother'sHub",
            slug: "mothershub",
            to: "/work/mothershub",
            category: "Client",
            summary: "Wellness platform for women & pregnant women.",
            images: ["/images/mothershub-1.png"],
            featured: true,
            order: 1,
        },
        {
            title: "playChike",
            slug: "playchike",
            to: "/work/playchike",
            category: "Client",
            summary: "Minigame rewards & leaderboards, web3-ready.",
            images: ["/images/playchike-1.png"],
            featured: true,
            order: 2,
        },
        {
            title: "Fursume",
            slug: "fursume",
            to: "/work/fursume",
            category: "Client",
            summary: "Pet resume & travel card.",
            images: ["/images/fursume-1.png"],
            featured: true,
            order: 3,
        },
        {
            title: "Personal Project",
            slug: "personal",
            to: "/work/personal",
            category: "Personal",
            summary: "Interaction design + performance demo.",
            images: ["/images/personal-1.png"],
            featured: false,
            order: 4,
        },
    ];

    const [filter, setFilter] = useState("All");
    const visible = useMemo(
        () =>
            projects
                .filter((p) => filter === "All" || p.category === filter)
                .sort((a, b) => a.order - b.order),
        [projects, filter]
    );

    return (
        <main className="container py-16">
            <SectionHeader
                eyebrow="Portfolio"
                title="All Projects"
                right={
                    <div className="flex gap-2">
                        {["All", "Client", "Personal"].map((v) => (
                            <button
                                key={v}
                                onClick={() => setFilter(v)}
                                className={`btn ${
                                    filter === v ? "btn-accent" : ""
                                }`}
                                data-magnetic
                            >
                                {v}
                            </button>
                        ))}
                    </div>
                }
            />
            <div className="grid md:grid-cols-2 gap-6">
                {visible.map((p) => (
                    <ProjectCard key={p.slug} project={p} />
                ))}
            </div>
        </main>
    );
}
