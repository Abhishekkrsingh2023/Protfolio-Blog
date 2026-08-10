import type { Metadata } from "next";

import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import Connect from "@/components/Connect";
import { ProjectCard, UnderBuildCard } from "@/components/project/ProjectCard";
import { PROJECTS, UNDER_BUILD } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my projects, from personal initiatives to collaborative efforts. See how I apply my skills in full-stack development and DevOps.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-[#7C8AA8]">
      <main className="max-page-width mx-auto px-6 py-8">
        {/* GET /projects */}
        <SectionLabel method="GET">Projects</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* POST /planned */}
        <SectionLabel method="POST">Under Construction</SectionLabel>
        <div className="space-y-4">
          {UNDER_BUILD.map((project) => (
            <UnderBuildCard key={project.id} project={project} />
          ))}
        </div>

        {/* Collab Section */}
        <section id="looking-for" className="py-6 mt-16">
          <SectionLabel method="POST"> /collab</SectionLabel>
          <Reveal>
            <Connect />
          </Reveal>
        </section>
      </main>
    </div>
  );
}