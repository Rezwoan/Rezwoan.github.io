import SectionHeader from "../components/SectionHeader";

export default function About() {
    return (
        <main className="container py-16">
            <div className="grid md:grid-cols-[.9fr_1.1fr] gap-10 items-start">
                <div className="frame overflow-hidden depth">
                    <img
                        src="/images/headshot.png"
                        alt="Rezwoan headshot"
                        className="w-full h-[360px] object-cover"
                    />
                </div>
                <div>
                    <h1 className="text-4xl font-semibold">Rezwoan</h1>
                    <p className="opacity-80 mt-3">
                        Software engineer focused on clean, performant
                        interfaces and delightful micro-interactions.
                    </p>
                    <div className="mt-6 flex gap-3">
                        <a
                            className="btn btn-accent"
                            href="/work"
                            data-magnetic
                        >
                            View Work
                        </a>
                        <a
                            className="btn"
                            href="/resume-rezwoan.pdf"
                            data-magnetic
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>

            <section className="mt-16">
                <SectionHeader eyebrow="Skills" title="Tooling & Focus" />
                <div className="grid md:grid-cols-3 gap-4">
                    {[
                        {
                            group: "Core",
                            items: ["React", "Tailwind v4", "Micro-UX"],
                        },
                        { group: "Web", items: ["Vite", "SPA", "PWA-ready"] },
                        {
                            group: "Quality",
                            items: [
                                "Accessibility",
                                "Perf Budgets",
                                "Design Tokens",
                            ],
                        },
                    ].map((g, i) => (
                        <div key={i} className="card-tight">
                            <div className="text-sm font-semibold">
                                {g.group}
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {g.items.map((t, idx) => (
                                    <span key={idx} className="badge">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
