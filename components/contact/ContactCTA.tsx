import type { ComponentType, SVGProps } from "react";

import { Mail } from "lucide-react";

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
        <div aria-hidden className="absolute inset-x-0 bottom-0 overflow-hidden leading-none">
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
            className="relative isolate overflow-hidden bg-gradient-to-b from-ocean-950 to-ocean-900 text-ocean-50"
        >
            {/* Ambient glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_50%_10%,rgba(45,212,191,0.14)_0%,transparent_60%)]"
            />

            <div className="relative mx-auto w-full max-w-6xl px-6 py-20 text-center sm:py-24 lg:px-8 lg:py-28">
                <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
                    <p className="text-sm font-medium tracking-wide text-ocean-200">
                        Ready when you are
                    </p>
                    <h2 className="text-balance text-3xl font-semibold tracking-tight text-ocean-50 sm:text-4xl">
                        Let’s dive in and build something people love.
                    </h2>
                    <p className="max-w-prose text-pretty text-base leading-7 text-ocean-200 sm:text-lg sm:leading-8">
                        Have an idea, a role, or a problem worth solving? Send a message and I’ll reply with next steps
                        and a clear plan.
                    </p>

                    <div className="mt-2 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
                        <a
                            href="mailto:hello@example.com"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-ocean-500 px-7 text-sm font-semibold text-white shadow-lg transition-all hover:bg-ocean-400 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-300"
                        >
                            Start a conversation
                        </a>
                        <a
                            href="#work"
                            className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-sm font-semibold text-ocean-50 backdrop-blur transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
                        >
                            See recent work
                        </a>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        {SOCIAL_LINKS.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith("http") ? "_blank" : undefined}
                                    rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                                    aria-label={link.label}
                                    className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ocean-200 transition-colors hover:text-ocean-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-300"
                                >
                                    <Icon className="h-5 w-5" aria-hidden />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Decorative wave divider into footer / page end */}
            <WaveDivider />
        </section>
    );
}
