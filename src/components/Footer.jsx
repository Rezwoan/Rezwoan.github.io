import React from "react";

export default function Footer() {
    return (
        <footer className="border-t border-border/70 bg-bg">
            <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 text-center text-sm text-fg/70">
                © {new Date().getFullYear()} Your Name. All rights reserved.
            </div>
        </footer>
    );
}
