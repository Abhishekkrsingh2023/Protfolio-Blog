"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";

import SectionLabel from '@/components/SectionLabel'
import Reveal from '@/components/Reveal'
import Connect from "@/components/Connect";
import { FaCircleDot, FaCode } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Projects | Abhishek Singh",
  description: "Explore my projects, from personal initiatives to collaborative efforts. See how I apply my skills in full-stack development and DevOps.",
};

// ---------- Demo Data ----------
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

function Endpoint({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Reveal>
      <div className="border border-[#26314f] rounded-lg bg-[#121A2E] mb-3.5 overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-2 font-mono text-[13.5px]">
        </div>
        <div className="px-3 pb-2 text-[#7C8AA8] text-[14.5px]">{children}</div>
      </div>
    </Reveal>
  );
}


// ---------- Helper Components ----------
const ProjectCard = ({ project, router }: { project: (typeof projects)[0]; router: any }) => (

  <div onClick={() => router.push(`/projects/${project.id}`)} className="block group">
    <Endpoint>
      {/* Card content goes inside Endpoint’s children */}
      <div className="p-1 pb-4">
        {/* Image */}
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-cover rounded-md mb-4 border border-[#26314f] group-hover:border-[#4FD1C5]/40 transition-colors"
          width={600}
          height={400}
        />
        {/* Title & Date */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-white font-mono text-lg font-semibold group-hover:text-[#4FD1C5] transition-colors">
            {project.title}
          </h3>
          <span className="text-[#7C8AA8] text-xs font-mono ml-2 mt-1">{project.date}</span>
        </div>
        {/* Summary */}
        <p className="text-[#7C8AA8] text-sm mb-4 leading-relaxed">{project.summary}</p>
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-mono bg-[#1A2340] text-[#4FD1C5] border border-[#26314f] rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link
            href={project.codeUrl}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 py-2 px-3 text-xs font-mono text-[#7C8AA8] border border-[#26314f] rounded hover:border-[#4FD1C5] hover:text-[#4FD1C5] transition-colors"
          >
            <span className="text-[#4FD1C5]"><FaCode /></span> code
          </Link>
          {project.live && (
            <div>
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#7C8AA8] border border-[#26314f] rounded hover:border-[#36c766] hover:text-[#36c766] transition-colors"
              >
                <span className="text-[#36c766] pb-0.5"><FaCircleDot size={10} /></span> live
              </Link>
            </div>
          )}
        </div>
      </div>
    </Endpoint>
  </div>
);

const UnderBuildCard = ({ project }: { project: (typeof underBuild)[0] }) => (
  <div className="relative pl-8 pb-10 group last:pb-0">
    {/* Timeline line & dot */}
    <div className="absolute left-[11px] top-0 bottom-0 w-px bg-[#26314f] group-last:hidden" />
    <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#F2B84B] bg-[#121A2E] z-10" />
    <Endpoint>
      {/* Content */}
      <div className="px-4 pb-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-white font-mono text-lg font-semibold">{project.title}</h3>
          <span className="text-[#F2B84B] text-xs font-mono ml-2 mt-1">{project.status}</span>
        </div>
        <p className="text-[#7C8AA8] text-sm mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-mono bg-[#1A2340] text-[#F2B84B] border border-[#26314f] rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="text-xs font-mono text-[#7C8AA8]">
          Started: <span className="text-[#4FD1C5]">{project.startDate}</span>
        </div>
      </div>
    </Endpoint>
  </div>
);

// ---------- Main Page ----------
export default function ProjectsPage() {

  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0B1120] text-[#7C8AA8]">
      {/* <TopBar to="/projects" /> */}

      <main className="max-page-width mx-auto px-6 py-8">
        {/* ===== GET /projects ===== */}
        <SectionLabel method="GET">Projects</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} router={router} />
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