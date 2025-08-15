import React, { createContext, useContext, useEffect, useState } from "react";

const SITE = {
    name: "Rezwoan",
    tagline:
        "Software Engineer crafting calm, fluent, innovative web experiences.",
    accentColor: "#6C8BFF",
    themeDefault: "dark",
    socials: {
        github: "https://github.com/Rezwoan",
        linkedin: "https://www.linkedin.com/in/rezwoan",
    },
    resumePath: "/resume-rezwoan.pdf",
    emailTo: "hello@rezwoan.me",
    headshot: "headshot.png",
};

const PROJECTS = [
    {
        title: "TheMother'sHub",
        slug: "the-mothers-hub",
        category: "Client",
        summary:
            "Wellness program for women and pregnant women, supporting mental health journeys.",
        descriptionMD:
            "### TheMother'sHub\nCalm, inclusive experience with clear onboarding and resource discovery.\n\n- Role: Full-stack\n- Stack: React, Tailwind\n- Focus: Accessibility, performance",
        tech: ["React", "Tailwind"],
        links: { live: "https://themothershub.com" },
        images: ["mothershub-1.png", "mothershub-2.png"],
        featured: true,
        order: 1,
    },
    {
        title: "playChike",
        slug: "playchike",
        category: "Client",
        summary:
            "Minigame rewards & leaderboard platform, designed to evolve toward web3.",
        descriptionMD:
            "### playChike\nCrisp UI, scalable architecture, leaderboard core.",
        tech: ["React", "Tailwind"],
        links: { live: "https://playchike.com" },
        images: ["playchike-1.png"],
        featured: true,
        order: 2,
    },
    {
        title: "Fursume",
        slug: "fursume",
        category: "Client",
        summary:
            "Pet resume & travel card for simple identity and travel readiness.",
        descriptionMD:
            "### Fursume\nMobile-first UI, simple flows, future-ready.",
        tech: ["React", "Tailwind"],
        links: { live: "https://fursume.com" },
        images: ["fursume-1.png"],
        featured: true,
        order: 3,
    },
    {
        title: "Personal Project",
        slug: "personal-project",
        category: "Personal",
        summary: "Live experiment in interaction design and performance.",
        descriptionMD:
            "### Personal Project\nButtery micro-interactions & patterns.",
        tech: ["React", "GSAP", "Tailwind"],
        links: {},
        images: ["personal-1.png"],
        featured: false,
        order: 4,
    },
];

const TESTIMONIALS = [
    {
        projectSlug: "the-mothers-hub",
        author: "Client, TheMother'sHub",
        roleCompany: "Founder",
        quote: "Rezwoan delivered a calm, inclusive experience that our users love.",
        avatar: "client1.png",
    },
    {
        projectSlug: "playchike",
        author: "Client, playChike",
        roleCompany: "Product Lead",
        quote: "Fast iterations, solid engineering — we shipped on time.",
        avatar: "client2.png",
    },
    {
        projectSlug: "fursume",
        author: "Client, Fursume",
        roleCompany: "Co-founder",
        quote: "Professional, thoughtful, and detail-oriented.",
        avatar: "client3.png",
    },
];

const NOW = [
    {
        title: "Refining portfolio",
        text: "Micro-interactions, scroll reveal, tilt.",
        status: "doing",
        icon: "✨",
        order: 1,
    },
    {
        title: "Learning",
        text: "Exploring GSAP ScrollTrigger patterns.",
        status: "planning",
        icon: "📚",
        order: 2,
    },
];

const LOGOS = [
    { name: "TheMother'sHub", file: "logo-mothershub.svg" },
    { name: "playChike", file: "logo-playchike.svg" },
    { name: "Fursume", file: "logo-fursume.svg" },
];

const SERVICES = [
    {
        title: "Design → Build",
        text: "From brief to production-ready React UI that feels premium.",
    },
    {
        title: "UI Engineering",
        text: "Accessible, performant components and micro-interactions.",
    },
    {
        title: "Consulting",
        text: "Audits, refactors, and velocity boosts for product teams.",
    },
];

const STACK = [
    { group: "Core", items: ["React", "Tailwind CSS v4", "GSAP"] },
    { group: "Web", items: ["Vite", "SPA/CSR", "PWAs"] },
    {
        group: "Quality",
        items: ["Accessibility", "Perf budgets", "Design tokens"],
    },
];

const EXP = [
    {
        when: "2022 — Present",
        title: "Freelance Software Engineer",
        where: "Remote",
        points: [
            "Shipping production React frontends",
            "Partnering with founders & PMs",
        ],
    },
    {
        when: "CSE Student",
        title: "Software Development & CSE",
        where: "University",
        points: ["Algorithms, systems, and UI engineering"],
    },
];

const SiteCtx = createContext({
    site: null,
    projects: [],
    testimonials: [],
    now: [],
    logos: [],
    services: [],
    stack: [],
    exp: [],
});
export function SiteProvider({ children }) {
    const [site] = useState(SITE);
    const [projects] = useState(PROJECTS);
    const [testimonials] = useState(TESTIMONIALS);
    const [now] = useState(NOW);
    const [logos] = useState(LOGOS);
    const [services] = useState(SERVICES);
    const [stack] = useState(STACK);
    const [exp] = useState(EXP);

    useEffect(() => {
        if (site?.accentColor)
            document.documentElement.style.setProperty(
                "--accent",
                site.accentColor
            );
        if ((site?.themeDefault || "dark") === "dark")
            document.documentElement.classList.add("dark");
    }, [site]);

    return (
        <SiteCtx.Provider
            value={{
                site,
                projects,
                testimonials,
                now,
                logos,
                services,
                stack,
                exp,
            }}
        >
            {children}
        </SiteCtx.Provider>
    );
}
export function useSite() {
    return useContext(SiteCtx);
}
