import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(() =>
        typeof window !== "undefined"
            ? document.documentElement.classList.contains("dark")
            : false
    );

    useEffect(() => {
        const root = document.documentElement;
        if (dark) root.classList.add("dark");
        else root.classList.remove("dark");
    }, [dark]);

    return (
        <button
            className="rounded-full border border-border px-3 py-1 text-sm"
            onClick={() => setDark((v) => !v)}
            aria-label="Toggle theme"
            title="Toggle theme"
        >
            {dark ? "🌙" : "☀️"}
        </button>
    );
}
