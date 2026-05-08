import type { ComponentType, SVGProps } from "react";

import { ArrowRight, Mail } from "lucide-react";

import { Github } from "@/components/icons/Github";
import { Linkedin } from "@/components/icons/Linkedin";
import { Twitter } from "@/components/icons/Twitter";

type SocialLink = {
    label: string;
    href: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const SOCIAL_LINKS: readonly SocialLink[] = [
    {
        label: "GitHub",
        href: "https://github.com/",
        icon: Github,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/",
        icon: Linkedin,
    },
    {
        label: "Twitter",
        href: "https://twitter.com/",
        icon: Twitter,
    },
    {
        label: "Email",
        href: "mailto:hello@example.com",
        icon: Mail,
    },
] as const;

function WaveDivider() {
    return (
        <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 overflow-hidden leading-none"
        >
            <svg
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
                className="h-16 w-[calc(100%+2px)] translate-y-[1px] text-ocean-950 sm:h-20"
            >
                <path
                    fill="currentColor"
                    d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,69.3C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
                />
            </svg>
        </div>
    );
}

export function ContactCTA() {
    return (
        <section
            id="contact"
            className="relative isolate overflow-hidden bg-ocean-950 text-ocean-50"
        >
            {/* Background gradients */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(70rem_40rem_at_50%_0%,rgba(45,212,191,0.18)_0%,transparent_60%)]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(45rem_35rem_at_85%_35%,rgba(14,165,233,0.14)_0%,transparent_65%)]"
            />

            {/* Decorative grid */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:48px_48px] text-white"
            />

            <div className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
                <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-12 text-center shadow-2xl shadow-black/20 backdrop-blur sm:px-10 lg:px-16 lg:py-16">
                    <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-ocean-300/20 bg-ocean-300/10 px-4 py-2 text-sm font-medium text-ocean-100">
                        <span className="h-2 w-2 rounded-full bg-ocean-300" />
                        Available for new opportunities
                    </div>

                    <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Let’s build something clean, fast, and meaningful.
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-ocean-200 sm:text-lg sm:leading-8">
                        Have an idea, a role, or a product challenge? Send me a message and
                        I’ll get back with clear next steps.
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a
                            href="mailto:hello@example.com"
                            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ocean-400 px-7 text-sm font-semibold text-ocean-950 shadow-lg shadow-ocean-950/30 transition-all hover:-translate-y-0.5 hover:bg-ocean-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-300"
                        >
                            Start a conversation
                            <ArrowRight
                                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                                aria-hidden
                            />
                        </a>

                        <a
                            href="#work"
                            className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-sm font-semibold text-ocean-50 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
                        >
                            View recent work
                        </a>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        {SOCIAL_LINKS.map((link) => {
                            const Icon = link.icon;
                            const isExternal = link.href.startsWith("http");

                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={isExternal ? "_blank" : undefined}
                                    rel={isExternal ? "noreferrer noopener" : undefined}
                                    aria-label={link.label}
                                    className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ocean-200 transition-all hover:-translate-y-0.5 hover:border-ocean-300/40 hover:bg-ocean-300/10 hover:text-ocean-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-300"
                                >
                                    <Icon className="h-5 w-5" aria-hidden />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            <WaveDivider />
        </section>
    );
}