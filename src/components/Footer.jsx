import React from "react";

export default function Footer() {
    return (
        <footer className="border-t border-border/70 bg-bg">
            <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 text-center text-sm text-fg/70">
                <div className="mb-2">
                    © {new Date().getFullYear()} Din Muhammad Rezwoan — Dhaka,
                    Bangladesh
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="mailto:frezwoan@gmail.com"
                        className="underline-offset-4 hover:underline"
                    >
                        frezwoan@gmail.com
                    </a>
                    <a
                        href="https://github.com/Rezwoan"
                        target="_blank"
                        rel="noreferrer"
                        className="underline-offset-4 hover:underline"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rezwoan"
                        target="_blank"
                        rel="noreferrer"
                        className="underline-offset-4 hover:underline"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://www.fiverr.com/rezwoanfaisal"
                        target="_blank"
                        rel="noreferrer"
                        className="underline-offset-4 hover:underline"
                    >
                        Fiverr
                    </a>
                    <a
                        href="https://www.facebook.com/rezwoan.din.muhammad"
                        target="_blank"
                        rel="noreferrer"
                        className="underline-offset-4 hover:underline"
                    >
                        Facebook
                    </a>
                    <a
                        href="https://www.instagram.com/rezwoan.din.muhammad/"
                        target="_blank"
                        rel="noreferrer"
                        className="underline-offset-4 hover:underline"
                    >
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
}
