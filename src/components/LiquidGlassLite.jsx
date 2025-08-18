import React, { useEffect, useRef } from "react";

/**
 * LiquidGlassLite (React 18 compatible)
 * Glass blur + mouse-reactive highlight + subtle wobble.
 *
 * New props:
 *  - bg: background color (defaults to surface glass)
 *  - highlightColor: override highlight color
 */
export default function LiquidGlassLite({
    className = "",
    children,
    padding = "10px 16px",
    cornerRadius = 24,
    blurPx = 12,
    saturation = 1.35,
    displacementScale = 50,
    elasticity = 0.25,
    overLight = false,
    mouseContainer = null,
    bg,
    highlightColor,
    style,
}) {
    const id = useRef(`lg-${Math.random().toString(36).slice(2)}`);
    const wrapperRef = useRef(null);
    const overlayRef = useRef(null);
    const turbRef = useRef(null);

    // Mouse-following highlight
    useEffect(() => {
        const el = mouseContainer?.current || wrapperRef.current;
        if (!el || !overlayRef.current) return;

        let raf = 0;
        let target = { x: 50, y: 50 };
        let current = { x: 50, y: 50 };

        const onMove = (e) => {
            const rect = wrapperRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            target.x = Math.max(0, Math.min(100, x));
            target.y = Math.max(0, Math.min(100, y));
        };

        const tick = () => {
            current.x += (target.x - current.x) * elasticity;
            current.y += (target.y - current.y) * elasticity;
            overlayRef.current.style.setProperty("--mx", `${current.x}%`);
            overlayRef.current.style.setProperty("--my", `${current.y}%`);
            raf = requestAnimationFrame(tick);
        };

        el.addEventListener("mousemove", onMove, { passive: true });
        raf = requestAnimationFrame(tick);

        return () => {
            el.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(raf);
        };
    }, [elasticity, mouseContainer]);

    // Gentle turbulence animation (wobble)
    useEffect(() => {
        if (!turbRef.current) return;
        let raf = 0;
        let t = 0;
        const loop = () => {
            t += 0.015;
            const baseX = 0.008 + Math.sin(t) * 0.004;
            const baseY = 0.015 + Math.cos(t * 0.8) * 0.004;
            turbRef.current.setAttribute(
                "baseFrequency",
                `${baseX.toFixed(4)} ${baseY.toFixed(4)}`
            );
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(raf);
    }, []);

    const bgColor =
        bg ?? "color-mix(in oklab, var(--color-surface) 70%, transparent)";
    const borderColor =
        "1px solid color-mix(in oklab, var(--color-border) 60%, transparent)";
    const hiColor =
        highlightColor ??
        (overLight ? "rgba(255,255,255,0.40)" : "rgba(255,255,255,0.22)");

    return (
        <div
            ref={wrapperRef}
            className={`relative ${className}`}
            style={{
                borderRadius: cornerRadius,
                overflow: "hidden",
                backgroundColor: bgColor,
                backdropFilter: `blur(${blurPx}px) saturate(${saturation})`,
                WebkitBackdropFilter: `blur(${blurPx}px) saturate(${saturation})`,
                border: borderColor,
                boxShadow:
                    "0 12px 32px -12px color-mix(in oklab, var(--color-fg) 14%, transparent)",
                ...style, // allow overrides
            }}
        >
            {/* Liquid wobble filter target */}
            <svg
                width="0"
                height="0"
                style={{ position: "absolute" }}
                aria-hidden
            >
                <filter id={id.current}>
                    <feTurbulence
                        ref={turbRef}
                        type="fractalNoise"
                        numOctaves="2"
                        seed="2"
                        baseFrequency="0.010 0.015"
                        result="noise"
                    />
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="noise"
                        scale={displacementScale}
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                </filter>
            </svg>

            {/* Mouse-reactive highlight */}
            <div
                ref={overlayRef}
                className="pointer-events-none absolute inset-0"
                style={{
                    filter: `url(#${id.current})`,
                    background: `radial-gradient(600px 600px at var(--mx,50%) var(--my,50%), ${hiColor}, transparent 60%)`,
                    mixBlendMode: overLight ? "screen" : "overlay",
                }}
            />

            {/* Content */}
            <div style={{ padding }}>{children}</div>
        </div>
    );
}
