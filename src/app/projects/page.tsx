import type { Metadata } from "next";

import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import Connect from "@/components/Connect";
import TopBar from "@/components/TopBar";
import { ProjectCard, UnderBuildCard } from "@/components/project/ProjectCard";
import { PROJECTS, UNDER_BUILD } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Projects | Abhishek Singh",
  description:
    "Explore backend architectures, microservices, code execution engines, and full-stack projects built by Abhishek Singh.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#7C8AA8]">
      <TopBar to="/projects" />

      <main className="max-page-width mx-auto px-4 sm:px-6 py-8">
        {/* Section Label: GET /projects */}
        {/* <SectionLabel method="GET">/projects</SectionLabel> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {PROJECTS.map((project) => (
            <Reveal key={project.id}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {/* Section Label: POST /in-development */}
        <div className="mt-12 mb-6">
          <SectionLabel method="POST" statusCode={202} statusText="Queued">
            /in-development
          </SectionLabel>
        </div>

        <div className="space-y-4 mb-16">
          {UNDER_BUILD.map((project) => (
            <Reveal key={project.id}>
              <UnderBuildCard project={project} />
            </Reveal>
          ))}
        </div>

        {/* Collab Section */}
        <section id="looking-for" className="py-6 mt-12 mb-8">
          <SectionLabel method="POST">/collab</SectionLabel>
          <Reveal>
            <Connect />
          </Reveal>
        </section>
      </main>
    </div>
  );
}