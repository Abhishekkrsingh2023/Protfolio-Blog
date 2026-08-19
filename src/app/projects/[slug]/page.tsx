import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FaCircleDot, FaCode } from "react-icons/fa6";
import { FaRegDotCircle, FaArrowLeft } from "react-icons/fa";

import SectionLabel from "@/components/SectionLabel";
import TopBar from "@/components/TopBar";
import Reveal from "@/components/Reveal";
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
    title: `${project.title} | Abhishek Singh`,
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
      className={`${color} text-xs font-mono px-3 py-1 border rounded-full font-semibold flex items-center gap-1.5`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
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
    <div className="min-h-screen bg-transparent text-[#7C8AA8]">
      <TopBar to={`/projects/${project.id}`} />

      <main className="max-page-width mx-auto px-4 sm:px-6 py-8">
        {/* <SectionLabel method="GET">/projects/{project.id}</SectionLabel> */}

        <Reveal>
          <div className="glass-panel rounded-2xl mb-10 overflow-hidden shadow-2xl border border-[#26314f]/80">
            <div className="p-5 sm:p-8 md:p-10">
              <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border border-[#26314f]/80 mb-8 bg-[#0a1020]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 860px"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-[#26314f]/60">
                <div>
                  <h1 className="text-white font-mono text-2xl md:text-3xl font-bold mb-2">
                    {project.title}
                  </h1>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-mono">
                    {project.role && (
                      <span className="text-[#4FD1C5] font-semibold">{project.role}</span>
                    )}
                    {project.role && <span className="text-[#5C6884]">•</span>}
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
                <h2 className="text-white font-mono text-xs uppercase tracking-wider font-semibold mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5]" />
                  Tech Stack & Dependencies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-[#162038] text-[#4FD1C5] border border-[#26314f] rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-white font-mono text-xs uppercase tracking-wider font-semibold mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F2B84B]" />
                    Architecture & Key Capabilities
                  </h2>
                  <ul className="space-y-2.5">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-[#A5B4D6] text-sm"
                      >
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono text-white bg-white/5 border border-[#26314f] rounded-xl hover:border-[#4FD1C5] hover:text-[#4FD1C5] transition-all duration-200"
                >
                  <FaCode size={14} className="text-[#4FD1C5]" /> View Source Code
                </a>
                {project.live && project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono text-[#0B1120] bg-[#36c766] font-semibold rounded-xl hover:bg-[#43e67b] hover:shadow-[0_0_20px_rgba(54,199,102,0.4)] transition-all duration-200"
                  >
                    <FaCircleDot size={10} /> Live Deployment
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="text-center pb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-mono text-[#7C8AA8] hover:text-[#4FD1C5] transition-colors"
          >
            <FaArrowLeft size={12} /> back to /projects
          </Link>
        </div>
      </main>
    </div>
  );
}