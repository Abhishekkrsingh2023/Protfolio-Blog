import type { Metadata } from "next";

import SectionLabel from '@/components/SectionLabel'
import Reveal from '@/components/Reveal'
import Connect from "@/components/Connect";
import { ProjectCard, UnderBuildCard } from "@/components/project/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my projects, from personal initiatives to collaborative efforts. See how I apply my skills in full-stack development and DevOps.",
};

const projects = [
  {
    id: "portfolio-website",
    title: "Portfolio | Blog Website",
    summary: "Personal portfolio with terminal aesthetic, built using Next.js and Tailwind CSS.",
    date: "2026",
    image: "/project-images/portfolio.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    codeUrl: "https://github.com/Abhishekkrsingh2023/",
    liveUrl: "https://developerabhishek.me",
    live: true,
  },
  {
    id: "markdown-converter",
    title: "Markdown Converter",
    summary: "A simple yet powerful markdown to pdf/doc converter. Containerized and can run locally.",
    date: "2026",
    image: "/project-images/markdown-converter.jpg",
    techStack: ["Python", "FastAPI", "Docker", "pypandoc", "latex"],
    codeUrl: "https://github.com/Abhishekkrsingh2023/md-converter",
    liveUrl: "",
    live: false,
  },
  {
    id: "code0",
    title: "Code0 | Code Execution Sandbox",
    summary: "A backend interface code execution sandbox supporting multiple programming languages.",
    date: "2026",
    image: "/project-images/Code0.png",
    techStack: ["Python", "FastAPI", "Redis", "Docker", "subprocess"],
    codeUrl: "https://github.com/Abhishekkrsingh2023/",
    liveUrl: "",
    live: false,
  },
  {
    id: "ecommerce-app",
    title: "BuyNow | E-commerce App",
    summary: "A full-stack e-commerce application with product listings, cart, and checkout.",
    date: "2025",
    image: "/project-images/buynow.png",
    techStack: ["React", "FastAPI", "MongoDB", "Docker"],
    codeUrl: "https://github.com/Abhishekkrsingh2023/ecommerce-app",
    liveUrl: "",
    live: false,
  },
];

const underBuild = [
  {
    id: "ai-code-reviewer",
    title: "AI Code Reviewer",
    description: "Automated code review bot using LLMs with GitHub integration.",
    techStack: ["Python", "FastAPI", "OpenAI"],
    startDate: "2026 Q2",
    status: "In Progress",
  },
];

// ---------- Main Page ----------
export default function ProjectsPage() {

  return (
    <div className="min-h-screen bg-[#0B1120] text-[#7C8AA8]">
      {/* <TopBar to="/projects" /> */}

      <main className="max-page-width mx-auto px-6 py-8">
        {/* ===== GET /projects ===== */}
        <SectionLabel method="GET">Projects</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* ===== POST /planned ===== */}
        <SectionLabel method="POST">Under Construction</SectionLabel>
        <div className="space-y-0">
          {underBuild.map((project) => (
            <UnderBuildCard key={project.id} project={project} />
          ))}
        </div>

        {/* looking for */}
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