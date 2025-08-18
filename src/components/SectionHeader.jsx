import React from "react";
import Reveal from "./Reveal.jsx";

export default function SectionHeader({ id, eyebrow, title, description }) {
    return (
        <section id={id} className="section-wrap">
            <Reveal>
                <div className="mx-auto max-w-3xl text-center">
                    {eyebrow && (
                        <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
                            {eyebrow}
                        </p>
                    )}
                    <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                        {title}
                    </h2>
                    {description && (
                        <p className="mt-3 text-fg/75">{description}</p>
                    )}
                </div>
            </Reveal>
        </section>
    );
}
