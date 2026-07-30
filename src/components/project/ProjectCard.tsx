"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "../Reveal";
import { FaCircleDot, FaCode } from "react-icons/fa6";

interface Project {
    id: string;
    title: string;
    summary: string;
    date: string;
    image: string;
    techStack: string[];
    codeUrl: string;
    liveUrl?: string;
    live: boolean;
}

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

const ProjectCard = ({ project }: { project: Project }) => {
    // const router = useRouter();

    return (
        <Link href={`/projects/${project.id}`} className="block group">
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
                        {project.techStack.map((tech: string) => (
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
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.codeUrl, "_blank", "noopener,noreferrer");
                            }}
                            className="inline-flex items-center gap-1.5 py-2 px-3 text-xs font-mono text-[#7C8AA8] border border-[#26314f] rounded hover:border-[#4FD1C5] hover:text-[#4FD1C5] transition-colors"
                        >
                            <span className="text-[#4FD1C5]"><FaCode /></span> code
                        </button>
                        {project.live && (
                            <div>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(project.liveUrl, "_blank", "noopener,noreferrer");
                                    }}
                                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#7C8AA8] border border-[#26314f] rounded hover:border-[#36c766] hover:text-[#36c766] transition-colors"
                                >
                                    <span className="text-[#36c766] pb-0.5"><FaCircleDot size={10} /></span> live
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </Endpoint>
        </Link>
    )
};

const UnderBuildCard = ({ project }: { project: any }) => (
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
                    {project.techStack.map((tech: string) => (
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