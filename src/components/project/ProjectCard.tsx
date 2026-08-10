"use client";

import Link from "next/link";
import Image from "next/image";
import { FaCircleDot, FaCode } from "react-icons/fa6";
import { Project, UnderBuildProject } from "@/types";
import Endpoint from "../Endpoint";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Endpoint>
      <div className="flex flex-col h-full">
        {/* Project Image wrapped in Link to detail page */}
        <Link href={`/projects/${project.id}`} className="block overflow-hidden rounded-lg border border-[#26314f] group mb-4">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            width={600}
            height={350}
          />
        </Link>

        {/* Title & Date */}
        <div className="flex items-start justify-between mb-2">
          <Link
            href={`/projects/${project.id}`}
            className="text-white font-mono text-lg font-semibold hover:text-[#4FD1C5] transition-colors"
          >
            {project.title}
          </Link>
          <span className="text-[#7C8AA8] text-xs font-mono shrink-0 ml-2 mt-1">
            {project.date}
          </span>
        </div>

        {/* Summary */}
        <p className="text-[#7C8AA8] text-sm mb-4 leading-relaxed flex-1">
          {project.summary}
        </p>

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

        {/* Action Buttons: Details, Source Code, Live Link */}
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#26314f]/60">
          <Link
            href={`/projects/${project.id}`}
            className="text-xs font-mono text-[#4FD1C5] hover:underline"
          >
            Details &rarr;
          </Link>

          <div className="flex gap-2">
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 py-1.5 px-3 text-xs font-mono text-[#7C8AA8] border border-[#26314f] rounded hover:border-[#4FD1C5] hover:text-[#4FD1C5] transition-colors"
            >
              <FaCode size={13} /> code
            </a>

            {project.live && project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#7C8AA8] border border-[#26314f] rounded hover:border-[#36c766] hover:text-[#36c766] transition-colors"
              >
                <FaCircleDot size={10} className="text-[#36c766]" /> live
              </a>
            )}
          </div>
        </div>
      </div>
    </Endpoint>
  );
};

const UnderBuildCard = ({ project }: { project: UnderBuildProject }) => (
  <div className="relative pl-8 pb-8 group last:pb-0">
    <div className="absolute left-[11px] top-0 bottom-0 w-px bg-[#26314f] group-last:hidden" />
    <div className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full border-2 border-[#F2B84B] bg-[#121A2E] z-10" />
    <Endpoint>
      <div className="flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-white font-mono text-lg font-semibold">
            {project.title}
          </h3>
          <span className="text-[#F2B84B] text-xs font-mono px-2 py-0.5 border border-[#F2B84B]/40 rounded-full bg-[#F2B84B]/5">
            {project.status}
          </span>
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

export { ProjectCard, UnderBuildCard };