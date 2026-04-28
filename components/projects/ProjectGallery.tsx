import { PROJECTS } from "@/lib/data";

import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectGallery() {
    return (
        <section className="relative bg-ocean-950 text-ocean-50" id="work">
            <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
                <div className="flex flex-col gap-3">
                    <h2 className="text-2xl font-semibold tracking-tight text-ocean-100 sm:text-3xl">
                        Featured Works
                    </h2>
                    <p className="max-w-prose text-sm leading-6 text-ocean-200 sm:text-base">
                        A few recent projects that showcase my approach to product engineering and design.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
