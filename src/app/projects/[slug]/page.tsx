import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FaCircleDot, FaCode } from "react-icons/fa6";
import { FaRegDotCircle } from "react-icons/fa";

import SectionLabel from "@/components/SectionLabel";
import { PROJECTS } from "@/data/portfolioData";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

const StatusBadge = ({ status }: { status: string }) => {
  const isCompleted = status === "Completed";
  const color = isCompleted
    ? "text-[#36c766] border-[#36c766]/40 bg-[#36c766]/10"
    : "text-[#F2B84B] border-[#F2B84B]/40 bg-[#F2B84B]/10";

  return (
    <span
      className={`${color} text-xs font-mono px-3 py-1 border rounded-full font-medium`}
    >
      {status}
    </span>
  );
};

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0B1120] text-[#7C8AA8]">
      <main className="max-page-width mx-auto px-6 py-10">
        <SectionLabel method="GET">/projects/{project.id}</SectionLabel>

        <div className="border border-[#26314f] rounded-xl bg-[#121A2E] mb-12 overflow-hidden shadow-xl">
          <div className="p-6 md:p-8">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={400}
              className="w-full max-h-125 object-cover rounded-lg border border-[#26314f] mb-8"
              priority
            />

            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h1 className="text-white font-mono text-2xl md:text-3xl font-semibold mb-2">
                  {project.title}
                </h1>
                <div className="flex items-center gap-3 text-sm font-mono">
                  {project.role && <span className="text-[#4FD1C5]">{project.role}</span>}
                  {project.role && <span className="text-[#7C8AA8]">•</span>}
                  <span className="text-[#7C8AA8]">{project.date}</span>
                </div>
              </div>
              {project.status && <StatusBadge status={project.status} />}
            </div>

            {project.description && (
              <p className="text-[#A5B4D6] text-sm md:text-base leading-relaxed whitespace-pre-line mb-8">
                {project.description}
              </p>
            )}

            {/* Tech Stack */}
            <div className="mb-8">
              <h2 className="text-white font-mono text-sm font-semibold mb-3 uppercase tracking-wider">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono bg-[#1A2340] text-[#4FD1C5] border border-[#26314f] rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-white font-mono text-sm font-semibold mb-3 uppercase tracking-wider">
                  Key Features
                </h2>
                <ul className="space-y-2.5">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[#A5B4D6] text-sm">
                      <span className="text-[#4FD1C5] mt-1 shrink-0">
                        <FaRegDotCircle size={12} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-6 border-t border-[#26314f]">
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono text-[#E8ECF4] border border-[#26314f] rounded-lg hover:border-[#4FD1C5] hover:text-[#4FD1C5] transition-colors"
              >
                <FaCode size={14} className="text-[#4FD1C5]" /> View Source Code
              </a>
              {project.live && project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono text-[#E8ECF4] border border-[#26314f] rounded-lg hover:border-[#36c766] hover:text-[#36c766] transition-colors"
                >
                  <FaCircleDot size={10} className="text-[#36c766]" /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-mono text-[#7C8AA8] hover:text-[#4FD1C5] transition-colors"
          >
            <span className="text-[#4FD1C5]">&larr; cd ..</span> back to projects
          </Link>
        </div>
      </main>
    </div>
  );
}