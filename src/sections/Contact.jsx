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
                        action="https://formbold.com/s/912PR"
                        method="POST"
                        encType="multipart/form-data"
                        className="glass p-6 grid gap-4 sm:grid-cols-2"
                    >
                        <div className="sm:col-span-2">
                            <label className="block text-sm text-fg/80">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@email.com"
                                required
                                className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-sm text-fg/80">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                                className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-sm text-fg/80">
                                File
                            </label>
                            <input
                                type="file"
                                name="file"
                                className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-sm text-fg/80">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Type your message..."
                                required
                                className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2"
                            />
                        </div>
                        <div className="sm:col-span-2 flex items-center justify-between">
                            <div className="text-sm text-fg/60">
                                Or email:{" "}
                                <span className="text-primary">
                                    frezwoan@gmail.com
                                </span>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Send Message
                            </button>
                        </div>
                    </form>
                </Reveal>
            </div>
        </>
    );
}
