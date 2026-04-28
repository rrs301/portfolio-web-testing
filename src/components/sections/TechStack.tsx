import type { LucideIcon } from "lucide-react";
import {
    Braces,
    Database,
    Layers,
    Server,
    Workflow,
    Wind,
} from "lucide-react";

type TechCategory = "Frontend" | "Backend" | "Database" | "Tooling";

type TechItem = {
    name: string;
    category: TechCategory;
    Icon: LucideIcon;
};

const TECH_STACK: readonly TechItem[] = [
    { name: "Next.js", category: "Frontend", Icon: Workflow },
    { name: "React", category: "Frontend", Icon: Layers },
    { name: "TypeScript", category: "Tooling", Icon: Braces },
    { name: "Tailwind CSS", category: "Frontend", Icon: Wind },
    { name: "Node.js", category: "Backend", Icon: Server },
    { name: "PostgreSQL", category: "Database", Icon: Database },
] as const;

export function TechStack() {
    return (
        <section className="relative bg-ocean-950 text-ocean-50">
            <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
                <div className="flex flex-col gap-3">
                    <h2 className="text-2xl font-semibold tracking-tight text-ocean-50 sm:text-3xl">
                        Tech stack
                    </h2>
                    <p className="max-w-prose text-sm leading-6 text-ocean-200 sm:text-base">
                        A snapshot of the tools I use to design, build, and ship products.
                    </p>
                </div>

                <ul
                    role="list"
                    className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {TECH_STACK.map(({ name, category, Icon }) => (
                        <li key={name} className="h-full">
                            <div
                                tabIndex={0}
                                className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-ocean-800 bg-ocean-900/50 p-5 transition will-change-transform hover:scale-[1.02] hover:border-teal-500 focus-visible:scale-[1.02] focus-visible:border-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400/40"
                            >
                                <div className="flex min-w-0 items-start gap-4">
                                    <div className="mt-0.5 rounded-xl border border-ocean-800 bg-ocean-950/40 p-2">
                                        <Icon
                                            aria-hidden
                                            className="h-5 w-5 text-teal-400"
                                        />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-semibold text-ocean-50">
                                            {name}
                                        </p>
                                        <p className="mt-1 text-xs text-ocean-200">
                                            Build faster with modern, maintainable patterns.
                                        </p>
                                    </div>
                                </div>

                                <span className="shrink-0 rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-[11px] font-medium tracking-wide text-teal-400">
                                    {category}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
