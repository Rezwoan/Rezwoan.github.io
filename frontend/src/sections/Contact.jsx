import React from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Contact() {
    return (
        <>
            <SectionHeader
                id="contact"
                eyebrow="Contact"
                title="Let’s build something"
                description="Drop me a line—happy to talk about roles, projects, or collaborations."
            />
            <div className="mx-auto max-w-3xl">
                <Reveal>
                    <form
                        className="glass p-6 grid gap-4 sm:grid-cols-2"
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Demo only. Wire it up later.");
                        }}
                    >
                        <div>
                            <label className="block text-sm text-fg/80">
                                Name
                            </label>
                            <input
                                className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-fg/80">
                                Email
                            </label>
                            <input
                                type="email"
                                className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2"
                                placeholder="you@email.com"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-sm text-fg/80">
                                Message
                            </label>
                            <textarea
                                rows="5"
                                className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2"
                                placeholder="Tell me about your project..."
                            />
                        </div>
                        <div className="sm:col-span-2 flex items-center justify-between">
                            <div className="text-sm text-fg/60">
                                Or email:{" "}
                                <span className="text-primary">
                                    you@domain.com
                                </span>
                            </div>
                            <button className="btn btn-primary">Send</button>
                        </div>
                    </form>
                </Reveal>
            </div>
        </>
    );
}
