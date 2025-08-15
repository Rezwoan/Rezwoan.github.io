import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useSite } from "../lib/site.jsx";
import SectionHeader from "../components/SectionHeader";

export default function CaseStudy() {
    const { slug } = useParams();
    const { projects } = useSite();
    const project = useMemo(
        () => projects.find((p) => p.slug === slug) || null,
        [projects, slug]
    );
    if (!project) return <main className="container py-16">Not found.</main>;

    const cover = project.images?.[0] ? `/images/${project.images[0]}` : null;

    return (
        <main>
            <section className="container pt-10">
                <div className="text-sm opacity-60">{project.category}</div>
                <h1 className="text-4xl md:text-5xl font-semibold mt-1">
                    {project.title}
                </h1>
                <p className="mt-3 opacity-80 max-w-[65ch]">
                    {project.summary}
                </p>
            </section>

            {cover && (
                <div className="container mt-8">
                    <div className="frame depth-lg overflow-hidden">
                        <img
                            src={cover}
                            alt={project.title}
                            className="w-full h-[380px] md:h-[520px] object-cover"
                        />
                    </div>
                </div>
            )}

            <section className="container py-12">
                <SectionHeader eyebrow="Story" title="Approach & Outcome" />
                <article
                    className="prose opacity-90"
                    dangerouslySetInnerHTML={{
                        __html: project.descriptionMD.replace(/\n/g, "<br/>"),
                    }}
                />
                <div className="mt-6 flex gap-3">
                    {project.links?.live && (
                        <a
                            className="btn btn-accent"
                            href={project.links.live}
                            target="_blank"
                            rel="noreferrer"
                            data-magnetic
                        >
                            Visit live site
                        </a>
                    )}
                </div>
            </section>
        </main>
    );
}
