export default function Mothershub() {
    const project = {
        title: "TheMother'sHub",
        category: "Client",
        summary: "Wellness platform for women and pregnant women.",
        cover: "/images/mothershub-1.png",
        gallery: ["/images/mothershub-1.png", "/images/mothershub-2.png"],
        live: "https://themothershub.com",
        description: [
            "Built a calming, accessible experience focused on inclusive onboarding and resource discovery.",
            "Role: Frontend Engineering with React & Tailwind. Emphasis on performance and a soothing visual tone.",
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
