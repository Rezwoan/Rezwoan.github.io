import React, { useEffect, useState } from "react";
import LiquidGlassLite from "./LiquidGlassLite.jsx";

const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Education", "#education"],
    ["Contact", "#contact"],
];

export default function NavbarLiquid() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setOpen(false);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="sticky top-0 z-50 border-b border-border/70 bg-surface/90 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
                <a
                    href="#"
                    className="font-extrabold tracking-tight text-primary"
                >
                    Your Name
                </a>
                <div className="hidden md:flex items-center gap-6">
                    {links.map(([label, href]) => (
                        <a
                            key={href}
                            href={href}
                            className="text-sm text-fg/80 hover:text-primary transition"
                        >
                            {label}
                        </a>
                    ))}
                    <a href="#contact" className="hidden md:inline-block">
                        <LiquidGlassLite
                            padding="10px 16px"
                            cornerRadius={999}
                            blurPx={10}
                            saturation={1.35}
                            displacementScale={34}
                            overLight
                        >
                            <span className="text-white font-semibold">
                                Hire Me
                            </span>
                        </LiquidGlassLite>
                    </a>
                </div>
                <button
                    className="md:hidden rounded-md border border-border px-3 py-2"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </nav>

            {open && (
                <div className="md:hidden border-t border-border/70 bg-surface">
                    <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 flex flex-col gap-3">
                        {links.map(([label, href]) => (
                            <a
                                key={href}
                                href={href}
                                className="text-fg/90"
                                onClick={() => setOpen(false)}
                            >
                                {label}
                            </a>
                        ))}
                        <a href="#contact" className="btn btn-primary w-max">
                            Hire Me
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
