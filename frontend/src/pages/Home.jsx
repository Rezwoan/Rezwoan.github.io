import SectionHeader from "../components/SectionHeader";

export default function Home() {
    return (
        <main>
            <section className="container py-20 md:py-28">
                <div className="grid md:grid-cols-[1.2fr_.8fr] gap-10 items-center">
                    <div>
                        <h1 className="hero-title">
                            Rezwoan — Software Engineer
                        </h1>
                        <p className="mt-4 text-lg opacity-80 max-w-[60ch]">
                            Building calm, fluent, innovative web experiences
                            with React & Tailwind.
                        </p>
                        <div className="mt-7 flex gap-3">
                            <a
                                className="btn btn-accent"
                                href="/work"
                                data-magnetic
                            >
                                View Work
                            </a>
                            <a
                                className="btn btn-quiet"
                                href="/contact"
                                data-magnetic
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div
                            className="relative w-48 h-48 md:w-64 md:h-64 rounded-[2rem] depth-lg"
                            style={{
                                background: `radial-gradient(60% 60% at 50% 40%, var(--accent), transparent)`,
                            }}
                        >
                            <div className="absolute inset-0 rounded-[2rem] frame overflow-hidden">
                                <img
                                    src="/images/headshot.png"
                                    alt="Rezwoan headshot"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* quick logo row (text placeholders) */}
            <section className="container -mt-6 mb-10">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-80">
                    {[
                        "TheMother'sHub",
                        "playChike",
                        "Fursume",
                        "React",
                        "Tailwind",
                        "GSAP",
                    ].map((n, i) => (
                        <div
                            key={i}
                            className="h-10 flex items-center justify-center rounded-xl border border-zinc-200/60 dark:border-zinc-800/80 bg-white/40 dark:bg-white/[.04] backdrop-blur px-3 text-xs"
                        >
                            {n}
                        </div>
                    ))}
                </div>
            </section>

            <section className="container">
                <SectionHeader
                    eyebrow="Selected Work"
                    title="Featured Projects"
                />
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "TheMother'sHub",
                            to: "/work/mothershub",
                            category: "Client",
                            summary:
                                "Wellness platform for women & pregnant women.",
                            featured: true,
                            images: ["/images/mothershub-1.png"],
                        },
                        {
                            title: "playChike",
                            to: "/work/playchike",
                            category: "Client",
                            summary:
                                "Minigame rewards & leaderboards, web3-ready.",
                            featured: true,
                            images: ["/images/playchike-1.png"],
                        },
                        {
                            title: "Fursume",
                            to: "/work/fursume",
                            category: "Client",
                            summary: "Pet resume & travel card, mobile-first.",
                            featured: true,
                            images: ["/images/fursume-1.png"],
                        },
                    ].map((p, i) => (
                        <a
                            key={i}
                            href={p.to}
                            className="group block"
                            data-magnetic
                        >
                            <div className="frame depth overflow-hidden relative">
                                <img
                                    src={p.images[0]}
                                    alt={p.title}
                                    className="w-full h-64 md:h-[22rem] object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-90" />
                                <div className="absolute left-5 right-5 bottom-4 text-white">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="badge bg-white/20 border-white/20">
                                            {p.category}
                                        </span>
                                        <span className="badge bg-white/20 border-white/20">
                                            Featured
                                        </span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-semibold">
                                        {p.title}
                                    </h3>
                                    <p className="opacity-90 text-sm md:text-base clamp-2">
                                        {p.summary}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
}
