import React, { useRef } from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import LiquidGlassLite from "../components/LiquidGlassLite.jsx";

/**
 * Project thumbnails are in /public, so reference with "/<filename>"
 *   - /mothershub-1.png  -> https://themothershub.com
 *   - /playchike-1.png   -> https://playchike.com
 *   - /fursume-1.png     -> https://fursume.com
 *   - /personal-1.png    -> https://checker-calendar.rezwoan.me
 */

const projects = [
    {
        title: "The Mothers Hub",
        summary:
            "Community & services platform. Responsive UI, fast navigation, SEO tuned.",
        tech: ["Next.js/React", "Tailwind v4", "SSR/SEO", "Analytics"],
        image: "/mothershub-1.png",
        live: "https://themothershub.com",
    },
    {
        title: "Playchike",
        summary: "Fun casual gaming site with clean UX and quick loads.",
        tech: ["React", "Vite", "Tailwind v4"],
        image: "/playchike-1.png",
        live: "https://playchike.com",
    },
    {
        title: "Fursume",
        summary: "Portfolio/resumé builder concept with playful branding.",
        tech: ["React", "Design System", "Tailwind v4"],
        image: "/fursume-1.png",
        live: "https://fursume.com",
    },
    {
        title: "Checker Calendar",
        summary: "Minimal calendar/checker utility. Fast, clean, reliable.",
        tech: ["React", "Vite", "Netlify/Vercel"],
        image: "/personal-1.png",
        live: "https://checker-calendar.rezwoan.me",
    },
];

export default function Projects() {
    const gridRef = useRef(null);

    return (
        <>
            <SectionHeader
                id="projects"
                eyebrow="Projects"
                title="Selected work"
                description="Quick peeks — open for case studies & repos."
            />

            {/* Liquid project tiles */}
            <div
                ref={gridRef}
                className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
                {projects.map((p, i) => (
                    <Reveal key={p.title} delay={i * 0.05}>
                        <LiquidGlassLite
                            className="rounded-3xl tilt"
                            padding="0"
                            cornerRadius={24}
                            blurPx={10}
                            saturation={1.35}
                            displacementScale={52}
                            elasticity={0.3}
                            mouseContainer={gridRef}
                        >
                            <a
                                href={p.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative block overflow-hidden rounded-3xl"
                                aria-label={`${p.title} — open live site`}
                            >
                                <img
                                    src={p.image}
                                    alt={`${p.title} screenshot`}
                                    className="h-48 w-full object-cover transition duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-4">
                                    <h3 className="text-lg font-semibold text-white drop-shadow">
                                        {p.title}
                                    </h3>
                                    <p className="text-sm text-white/85 drop-shadow">
                                        {p.summary}
                                    </p>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {p.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="chip bg-white/85 text-fg backdrop-blur"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        </LiquidGlassLite>
                    </Reveal>
                ))}
            </div>

            {/* Liquid CTA band */}
            <Reveal delay={0.2}>
                <div className="section-wrap -mt-6">
                    <LiquidGlassLite
                        className="block rounded-3xl"
                        padding="32px"
                        cornerRadius={24}
                        blurPx={12}
                        saturation={1.3}
                        displacementScale={42}
                        elasticity={0.22}
                    >
                        <div className="text-center">
                            <h3 className="text-2xl font-extrabold">
                                Like what you see?{" "}
                                <span className="text-gradient">
                                    Let’s build together.
                                </span>
                            </h3>
                            <p className="mt-2 text-fg/75">
                                Available for internships, freelance, and junior
                                roles.
                            </p>
                            <div className="mt-5 flex justify-center gap-3">
                                <a href="#contact" className="btn btn-primary">
                                    Get in touch
                                </a>
                                <a href="#projects" className="btn btn-outline">
                                    More projects
                                </a>
                            </div>
                        </div>
                    </LiquidGlassLite>
                </div>
            </Reveal>
        </>
    );
}
