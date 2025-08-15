export default function Fursume() {
    const project = {
        title: "Fursume",
        category: "Client",
        summary:
            "Pet resume & travel card to streamline pet identity and travel readiness.",
        cover: "/images/fursume-1.png",
        gallery: ["/images/fursume-1.png"],
        live: "https://fursume.com",
        description: [
            "Mobile-first interface with clear flows and friendly visuals.",
            "Built with React & Tailwind; attention to accessibility and speed.",
        ],
    };
    return (
        <main className="container py-12">
            <a href="/work" className="text-sm opacity-70 underline">
                ← Back to Work
            </a>
            <h1 className="text-4xl md:text-5xl font-semibold mt-2">
                {project.title}
            </h1>
            <p className="opacity-80 mt-2">{project.summary}</p>

            <div className="frame depth-lg overflow-hidden mt-6">
                <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-[380px] md:h-[520px] object-cover"
                />
            </div>

            <article className="prose opacity-90 mt-8">
                {project.description.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </article>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
                {project.gallery.map((src, i) => (
                    <div key={i} className="frame overflow-hidden">
                        <img
                            src={src}
                            alt={`shot ${i + 1}`}
                            className="w-full h-[260px] object-cover"
                        />
                    </div>
                ))}
            </div>

            <div className="mt-6">
                <a
                    className="btn btn-accent"
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    data-magnetic
                >
                    Visit live site
                </a>
            </div>
        </main>
    );
}
