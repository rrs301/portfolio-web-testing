import Image from "next/image";

const BIO =
    "I’m a full‑stack developer focused on building fast, accessible web experiences. I enjoy turning complex product requirements into clean UI, reliable APIs, and maintainable systems.";

export function Hero() {
    return (
        <section className="relative isolate overflow-hidden bg-ocean-950 text-ocean-50">
            {/* Subtle radial gradient wash */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(90rem_60rem_at_20%_0%,theme(colors.ocean.900)_0%,theme(colors.ocean.950)_55%,transparent_100%)] opacity-90"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(70rem_40rem_at_100%_20%,rgba(45,212,191,0.12)_0%,transparent_60%)]"
            />

            <div className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:py-28 lg:px-8">
                <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-12">
                    {/* Left: copy */}
                    <div className="flex flex-col gap-7">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm font-medium tracking-wide text-ocean-200">
                                Tubeguruji Portfolio
                            </p>
                            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-ocean-50 sm:text-5xl lg:text-6xl">
                                Building polished products with modern web tech.
                            </h1>
                        </div>

                        <p className="max-w-prose text-base leading-7 text-ocean-200 sm:text-lg sm:leading-8">
                            {BIO}
                        </p>

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <a
                                href="#contact"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 px-6 text-sm font-semibold text-black shadow-[0_14px_40px_-18px_rgba(34,211,238,0.65)] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
                            >
                                Get in touch
                            </a>
                            <a
                                href="#work"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-ocean-50 backdrop-blur transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
                            >
                                View work
                            </a>
                        </div>
                    </div>

                    {/* Right: image/placeholder */}
                    <div className="relative mx-auto w-full max-w-lg">
                        {/* glow */}
                        <div
                            aria-hidden
                            className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_25%,rgba(45,212,191,0.22),transparent_55%)] blur-2xl"
                        />

                        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ocean-900/40 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 via-transparent to-cyan-500/10" />
                            <div className="relative aspect-[4/3]">
                                <Image
                                    src="/globe.svg"
                                    alt="Stylized placeholder graphic"
                                    fill
                                    priority
                                    className="object-contain p-16 opacity-90 drop-shadow-[0_12px_40px_rgba(45,212,191,0.25)]"
                                />
                            </div>

                            <div className="relative border-t border-white/10 bg-ocean-950/30 px-6 py-4">
                                <p className="text-sm leading-6 text-ocean-200">
                                    Placeholder visual — replace with your headshot or a product screenshot.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
