# Agent Instructions: Portfolio Development

## Project Overview
You are building a "Full Stack Landing Screen for Portfolio" using Next.js and Tailwind CSS with an "Ocean" design theme. All content is hardcoded for maximum performance and simplicity.

## Technical Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Components**: Radix UI (if needed for primitives) or clean headless Tailwind components.
- **Deployment**: Optimized for Vercel/Static hosting.

## Architectural Patterns

### 1. Component Structure
- `/components/ui`: Atomic components (Buttons, Badges, Inputs).
- `/components/sections`: Large layout blocks (Hero, Gallery, TechStack, Footer).
- `/data`: Centralized configuration files (e.g., `projects.ts`, `skills.ts`) for easy editing of the "hardcoded" content.

### 2. Styling Conventions
- Use `tailwind-merge` and `clsx` for dynamic class manipulation.
- Strictly follow the `theme.md` color palette (Slate, Sky, Teal).
- Implement mobile-first responsive design for all sections.

### 3. Data Strategy
- Since there is no database, define all portfolio data in TypeScript constants.
- Example structure for project cards:
  typescript
  export const projects = [
    { title: "Project One", description: "...", tags: ["Next.js", "Tailwind"], link: "#" }
  ];
  

## Coding Guidelines
- **Functional Components**: Use Arrow functions and ensure all components are exported properly.
- **Clean Code**: Keep JSX clean by abstracting complex logic into custom hooks or helper functions if necessary.
- **SEO**: Ensure the `layout.tsx` includes proper metadata (title, description) for a professional profile.
- **Performance**: Use `next/image` for any project screenshots and prioritize fast LCP (Largest Contentful Paint).

## Design Alignment
- Ensure the "Ocean" theme is present through the use of subtle gradients and deep blue backgrounds.
- Typography must switch between `Inter` for prose and `DM Mono` for technical labels as specified in `theme.md`.
- Every interaction (hover, click) should have a smooth CSS transition (usually `duration-300`).