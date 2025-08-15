export default function Contact() {
    return (
        <main className="container py-16">
            <h1 className="text-4xl font-semibold">Contact</h1>
            <p className="mt-3 opacity-80">
                Email me at{" "}
                <a className="underline" href="mailto:hello@rezwoan.me">
                    hello@rezwoan.me
                </a>
            </p>
            <div className="mt-6 flex gap-3">
                <a
                    className="btn"
                    href="https://github.com/Rezwoan"
                    target="_blank"
                    rel="noreferrer"
                    data-magnetic
                >
                    GitHub
                </a>
                <a
                    className="btn"
                    href="https://www.linkedin.com/in/rezwoan"
                    target="_blank"
                    rel="noreferrer"
                    data-magnetic
                >
                    LinkedIn
                </a>
            </div>

            <div className="card depth flex flex-col md:flex-row items-center justify-between gap-4 mt-10">
                <div>
                    <div className="text-sm uppercase tracking-[.2em] opacity-60 mb-1">
                        Open for work
                    </div>
                    <div className="text-xl font-semibold">
                        Have a project in mind?
                    </div>
                    <div className="opacity-80">
                        I collaborate with startups & founders to ship polished
                        product UIs.
                    </div>
                </div>
                <a
                    className="btn btn-accent"
                    href="mailto:hello@rezwoan.me"
                    data-magnetic
                >
                    Let’s talk
                </a>
            </div>
        </main>
    );
}
