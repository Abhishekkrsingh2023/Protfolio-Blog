"use client";

import Link from "next/link";
import Image from "next/image";
import { FaCircleDot, FaCode, FaArrowRight } from "react-icons/fa6";
import { Project, UnderBuildProject } from "@/types";
import Endpoint from "../Endpoint";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Endpoint>
      <div className="flex flex-col h-full justify-between">
        <div>
          {/* Project Image wrapped in Link to detail page */}
          <Link
            href={`/projects/${project.id}`}
            className="block relative overflow-hidden rounded-xl border border-[#26314f]/80 group mb-4 bg-[#0a1020]"
          >
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-52 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              width={600}
              height={350}
            />
            {project.live && (
              <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0B1120]/85 border border-[#36c766]/40 backdrop-blur-md text-[11px] font-mono text-[#36c766]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#36c766] animate-pulse" />
                Live
              </div>
            )}
          </Link>

          {/* Title & Date */}
          <div className="flex items-start justify-between mb-2">
            <Link
              href={`/projects/${project.id}`}
              className="text-white font-mono text-base sm:text-lg font-bold hover:text-[#4FD1C5] transition-colors"
            >
              {project.title}
            </Link>
            <span className="text-[#7C8AA8] text-xs font-mono shrink-0 ml-2 mt-0.5">
              {project.date}
            </span>
          </div>

          {/* Summary */}
          <p className="text-[#94A3B8] text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3">
            {project.summary}
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-[11px] font-mono bg-[#162038] text-[#4FD1C5] border border-[#26314f] rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons: Details, Source Code, Live Link */}
        <div className="flex items-center justify-between gap-2 pt-3 border-t border-[#26314f]/70">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#4FD1C5] hover:text-white transition-colors group/link"
          >
            <span>Details</span>
            <FaArrowRight size={11} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>

          <div className="flex items-center gap-2">
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 py-1.5 px-3 text-xs font-mono text-[#E8ECF4] bg-white/5 border border-[#26314f] rounded-lg hover:border-[#4FD1C5]/50 hover:text-[#4FD1C5] transition-colors"
            >
              <FaCode size={12} /> code
            </a>

            {project.live && project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#36c766] bg-[#36c766]/10 border border-[#36c766]/30 rounded-lg hover:bg-[#36c766] hover:text-[#0B1120] transition-colors font-semibold"
              >
                <FaCircleDot size={9} /> demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Endpoint>
  );
};

const UnderBuildCard = ({ project }: { project: UnderBuildProject }) => (
  <div className="relative pl-7 pb-6 group last:pb-0">
    <div className="absolute left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-[#F2B84B]/40 via-[#26314f] to-transparent group-last:hidden" />
    <div className="absolute left-0.5 top-2.5 w-3 h-3 rounded-full border-2 border-[#F2B84B] bg-[#0B1120] z-10 shadow-[0_0_8px_rgba(242,184,75,0.5)]" />
    <Endpoint>
      <div className="flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-white font-mono text-base font-bold">
            {project.title}
          </h3>
          <span className="text-[#F2B84B] text-[11px] font-mono px-2.5 py-0.5 border border-[#F2B84B]/40 rounded-full bg-[#F2B84B]/10 font-semibold">
            {project.status}
          </span>
        </div>
        <p className="text-[#94A3B8] text-xs sm:text-sm mb-3 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-[11px] font-mono bg-[#162038] text-[#F2B84B] border border-[#26314f] rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="text-xs font-mono text-[#7C8AA8]">
            Target: <span className="text-[#4FD1C5] font-medium">{project.startDate}</span>
          </div>
        </div>
      </div>
    </Endpoint>
  </div>
);

export { ProjectCard, UnderBuildCard };