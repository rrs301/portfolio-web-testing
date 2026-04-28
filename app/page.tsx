import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { ProjectGallery } from "@/components/projects/ProjectGallery";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col">
      <Hero />
      <TechStack />
      <ProjectGallery />
    </main>
  );
}
