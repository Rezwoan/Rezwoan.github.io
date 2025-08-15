import { useEffect } from "react";

export default function MagneticCursor() {
    useEffect(() => {
        const cursor = document.createElement("div");
        Object.assign(cursor.style, {
            position: "fixed",
            top: "0",
            left: "0",
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            transition: "transform 120ms ease, background 200ms",
            zIndex: "9999",
            background: "color-mix(in srgb, var(--accent) 50%, transparent)",
        });
        document.body.appendChild(cursor);
        let x = 0,
            y = 0;
        const onMove = (e) => {
            x = e.clientX;
            y = e.clientY;
            cursor.style.transform = `translate(${x}px, ${y}px) scale(1)`;
        };
        const onOver = (e) => {
            if (e.target?.closest?.("[data-magnetic]"))
                cursor.style.transform = `translate(${x}px, ${y}px) scale(1.6)`;
        };
        const onOut = () => {
            cursor.style.transform = `translate(${x}px, ${y}px) scale(1)`;
        };
        const onDown = () => {
            cursor.style.background = "var(--accent)";
        };
        const onUp = () => {
            cursor.style.background =
                "color-mix(in srgb, var(--accent) 50%, transparent)";
        };
        window.addEventListener("mousemove", onMove);
        document.addEventListener("mouseover", onOver);
        document.addEventListener("mouseout", onOut);
        window.addEventListener("mousedown", onDown);
        window.addEventListener("mouseup", onUp);
        return () => {
            cursor.remove();
            window.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseover", onOver);
            document.removeEventListener("mouseout", onOut);
            window.removeEventListener("mousedown", onDown);
            window.removeEventListener("mouseup", onUp);
        };
    }, []);
    return null;
}
