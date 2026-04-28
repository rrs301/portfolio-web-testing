import { ExternalLink } from "lucide-react";

import type { Project } from "@/lib/data";
import { Github } from "@/components/icons/Github";

type ProjectCardProps = {
    project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article
            className="group relative flex h-full flex-col justify-between gap-6 rounded-2xl border border-ocean-800/50 bg-ocean-900/40 p-6 transition-colors duration-200 hover:border-ocean-400 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)]"
        >
            <div className="flex flex-col gap-4">
                <header className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold tracking-tight text-ocean-50">
                        {project.title}
                    </h3>
                    <p className="text-sm leading-6 text-ocean-200">
                        {project.description}
                    </p>
                </header>

                <ul className="flex flex-wrap gap-2" aria-label="Project tags">
                    {project.tags.map((tag) => (
                        <li
                            key={tag}
                            className="rounded-full bg-ocean-800/50 px-3 py-1 text-[11px] font-medium tracking-wide text-ocean-300"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>

            <footer className="flex items-center gap-5">
                <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-ocean-100 transition-colors hover:text-ocean-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-400/40"
                >
                    <ExternalLink className="h-4 w-4" aria-hidden />
                    <span>Live</span>
                </a>
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-ocean-100 transition-colors hover:text-ocean-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-400/40"
                >
                    <Github className="h-4 w-4" aria-hidden />
                    <span>Code</span>
                </a>
            </footer>
        </article>
    );
}
