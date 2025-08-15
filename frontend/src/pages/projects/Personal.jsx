export default function Personal() {
    const project = {
        title: "Personal Project",
        category: "Personal",
        summary: "Live experiment in interaction design & performance.",
        cover: "/images/personal-1.png",
        gallery: ["/images/personal-1.png"],
        live: "",
        description: [
            "Showcases tactile micro-interactions and smooth motion without compromising performance.",
            "Built with React + Tailwind; animation experiments kept subtle and purposeful.",
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
        </main>
    );
}
