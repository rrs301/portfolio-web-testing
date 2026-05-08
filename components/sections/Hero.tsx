import Image from "next/image";
import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react";

const BIO =
    "I’m a full-stack developer focused on building fast, accessible web experiences. I enjoy turning complex product requirements into clean UI, reliable APIs, and maintainable systems.";

const techStack = ["Next.js", "React", "Tailwind", "Node.js", "AI Apps"];

export function Hero() {
    return (
        <section className="relative isolate overflow-hidden bg-[#020617] text-white">
            {/* Background gradients */}
            <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.22),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.18),transparent_30%),linear-gradient(180deg,#020617_0%,#031525_100%)]"
            />

            {/* Grid pattern */}
            <div
                aria-hidden
                className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]"
            />

            {/* Decorative blur */}
            <div
                aria-hidden
                className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl"
            />
            <div
                aria-hidden
                className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"
            />

            <div className="relative mx-auto grid min-h-[90vh] w-full max-w-7xl items-center gap-16 px-6 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
                {/* Left Content */}
                <div className="flex flex-col items-start gap-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-100 shadow-lg backdrop-blur">
                        <Sparkles className="h-4 w-4 text-teal-300" />
                        Tubeguruji Portfolio
                    </div>

                    <div className="space-y-6">
                        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                            Building{" "}
                            <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                                polished digital products
                            </span>{" "}
                            with modern web tech.
                        </h1>

                        <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                            {BIO}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <a
                            href="#contact"
                            className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-300 to-cyan-400 px-7 py-4 text-sm font-bold text-slate-950 shadow-[0_20px_60px_-20px_rgba(34,211,238,0.9)] transition hover:-translate-y-1 hover:shadow-[0_25px_70px_-22px_rgba(34,211,238,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                        >
                            Get in touch
                            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                        </a>

                        <a
                            href="#work"
                            className="inline-flex h-13 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
                        >
                            View work
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                        {techStack.map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative mx-auto w-full max-w-xl">
                    {/* Floating cards */}
                    <div className="absolute -left-4 top-10 z-20 hidden rounded-2xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:block">
                        <div className="flex items-center gap-3">
                            <div className="grid h-10 w-10 place-items-center rounded-xl bg-teal-300 text-slate-950">
                                <Code2 className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-white">Clean Code</p>
                                <p className="text-xs text-slate-300">Scalable structure</p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -right-4 bottom-16 z-20 hidden rounded-2xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:block">
                        <div className="flex items-center gap-3">
                            <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-300 text-slate-950">
                                <Zap className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-white">Fast UI</p>
                                <p className="text-xs text-slate-300">Modern experience</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Image Card */}
                    <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-xl">
                        <div
                            aria-hidden
                            className="absolute -inset-1 rounded-[2.7rem] bg-gradient-to-r from-teal-400/30 via-cyan-400/20 to-blue-500/30 blur-xl"
                        />

                        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.2),transparent_45%)]" />

                            <div className="relative aspect-[4/4.2]">
                                <Image
                                    src="/globe.svg"
                                    alt="Portfolio visual"
                                    fill
                                    priority
                                    className="object-contain p-20 opacity-95 drop-shadow-[0_20px_60px_rgba(45,212,191,0.35)]"
                                />
                            </div>

                            <div className="relative border-t border-white/10 bg-white/[0.04] px-6 py-5">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-sm font-semibold text-white">
                                            Full Stack Developer
                                        </p>
                                        <p className="mt-1 text-sm text-slate-400">
                                            Replace this visual with your headshot, app screenshot, or portfolio mockup.
                                        </p>
                                    </div>

                                    <div className="hidden rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300 sm:block">
                                        Available
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom stats */}
                    <div className="relative mx-auto mt-5 grid max-w-md grid-cols-3 gap-3">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-center backdrop-blur">
                            <p className="text-xl font-bold text-white">10+</p>
                            <p className="text-xs text-slate-400">Years Exp.</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-center backdrop-blur">
                            <p className="text-xl font-bold text-white">AI</p>
                            <p className="text-xs text-slate-400">SaaS Apps</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-center backdrop-blur">
                            <p className="text-xl font-bold text-white">Full</p>
                            <p className="text-xs text-slate-400">Stack</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}