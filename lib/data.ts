export type Project = {
    title: string;
    description: string;
    tags: string[];
    link: string;
    githubLink: string;
};

export const PROJECTS: readonly Project[] = [
    {
        title: "Ocean Portfolio",
        description:
            "A personal portfolio built with Next.js and Tailwind CSS, focused on clean typography, accessibility, and performance.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind"],
        link: "https://example.com/portfolio",
        githubLink: "https://github.com/example/ocean-portfolio",
    },
    {
        title: "Realtime Analytics Dashboard",
        description:
            "A dashboard UI for streaming metrics with charts, filters, and a responsive layout optimized for large datasets.",
        tags: ["React", "WebSockets", "Charts", "UI"],
        link: "https://example.com/analytics",
        githubLink: "https://github.com/example/realtime-analytics",
    },
    {
        title: "API Starter Kit",
        description:
            "A production-ready API template with auth scaffolding, database migrations, and a tidy modular architecture.",
        tags: ["Node.js", "PostgreSQL", "Prisma", "Auth"],
        link: "https://example.com/api-starter",
        githubLink: "https://github.com/example/api-starter-kit",
    },
] as const;
