import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Din Muhammad Rezwoan - Full-Stack Developer",
    description:
        "Turning Ideas into Code, and Code into Impact. Dhaka-based CSE Student | Passionate Web Developer | Problem Solver. Portfolio showcasing modern web development projects and skills.",
    keywords:
        "Din Muhammad Rezwoan, web developer, full-stack developer, React, Flask, Django, Bangladesh, AIUB, CSE student, Dhaka developer",
    authors: [{ name: "Din Muhammad Rezwoan" }],
    creator: "Din Muhammad Rezwoan",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://rezwoan.dev",
        title: "Din Muhammad Rezwoan - Full-Stack Developer",
        description:
            "Turning Ideas into Code, and Code into Impact. Dhaka-based CSE Student | Passionate Web Developer",
        siteName: "Din Muhammad Rezwoan Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Din Muhammad Rezwoan - Full-Stack Developer",
        description:
            "Turning Ideas into Code, and Code into Impact. Dhaka-based CSE Student | Passionate Web Developer",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${inter.className} bg-background text-foreground overflow-x-hidden`}
            >
                <Navigation />
                <main>{children}</main>
            </body>
        </html>
    );
}
