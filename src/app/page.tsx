import type { Metadata } from "next";
import Link from "next/link";
import { MdOutlineReadMore } from "react-icons/md";
import { FaServer, FaDatabase, FaDocker, FaBolt } from "react-icons/fa";

import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import Endpoint from "@/components/Endpoint";
import HeroTerminal from "@/components/home/HeroTerminal";
import TopBar from "@/components/TopBar";
import TechStackFloat from "@/components/TechStackFloating";
import Connect from "@/components/Connect";

export const metadata: Metadata = {
  title: "Abhishek Singh | Backend & Full Stack Engineer",
  description:
    "Portfolio of Abhishek Singh — Backend & Full Stack Engineer specializing in Python, FastAPI, Node.js, distributed systems, and DevOps.",
};

const FOCUS_AREAS = [
  {
    title: "Backend Architecture",
    icon: <FaServer className="text-[#4FD1C5]" size={20} />,
    desc: "Designing resilient RESTful APIs, asynchronous worker systems, and microservices with FastAPI & Express.",
  },
  {
    title: "Data & Caching",
    icon: <FaDatabase className="text-[#60abe9]" size={20} />,
    desc: "Relational schema design with PostgreSQL, high-throughput caching with Redis, and document stores with MongoDB.",
  },
  {
    title: "DevOps & Containers",
    icon: <FaDocker className="text-[#2496ED]" size={20} />,
    desc: "Containerizing services with Docker, configuring Linux environments, and building automated CI/CD pipelines.",
  },
  {
    title: "AI & Modern Stack",
    icon: <FaBolt className="text-[#F2B84B]" size={20} />,
    desc: "Integrating LLMs, Agentic workflows, and modern reactive full-stack interfaces with Next.js & React.",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#E8ECF4] font-sans leading-relaxed">
      <TopBar to="" />

      <main className="max-page-width mx-auto px-4 sm:px-6">
        {/* Hero Terminal */}
        <HeroTerminal />

        {/* About Section */}
        <section id="about" className="py-6">
          {/* <SectionLabel method="GET">/about</SectionLabel> */}
          <Endpoint>
            <p className="text-[#A5B4D6] text-sm sm:text-base leading-relaxed">
              I&apos;m a backend-focused engineer from Kolkata, India. I specialize in building high-throughput APIs, asynchronous worker pipelines, and scalable microservices using{" "}
              <span className="text-[#4FD1C5] font-semibold">Python</span>,{" "}
              <span className="text-[#4FD1C5] font-semibold">FastAPI</span>,{" "}
              <span className="text-[#60abe9] font-semibold">Node.js</span>,{" "}
              <span className="text-[#F2B84B] font-semibold">PostgreSQL</span>, and{" "}
              <span className="text-[#DC382D] font-semibold">Redis</span>.
            </p>

            <p className="mt-3.5 text-[#7C8AA8] text-sm sm:text-[15px] leading-relaxed">
              My engineering philosophy revolves around writing idiomatic code, enforcing strict data schemas, and automating containerized deployments with Docker and Linux tooling.
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4 mt-6 pt-4 border-t border-[#26314f]/60">
              <div className="flex flex-wrap gap-2 text-xs font-mono text-[#7C8AA8]">
                <span className="px-2.5 py-1 rounded-md bg-[#162038] border border-[#26314f] text-[#4FD1C5]">
                  ⚡ Async I/O
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#162038] border border-[#26314f] text-[#36c766]">
                  🐳 Containerized
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#162038] border border-[#26314f] text-[#F2B84B]">
                  🛡️ Type-Safe
                </span>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-[#4FD1C5] bg-[#4FD1C5]/10 px-3.5 py-2 rounded-lg border border-[#4FD1C5]/30 hover:bg-[#4FD1C5] hover:text-[#0B1120] font-mono text-xs font-semibold transition-all duration-200"
              >
                <MdOutlineReadMore size={18} /> Read full bio &rarr;
              </Link>
            </div>
          </Endpoint>
        </section>

        {/* Tech Stack Floating Section */}
        <section id="stack" className="py-6">
          <SectionLabel method="GET">
            <span>
              /stack?<span className="text-[#F2B84B]">runtime=distributed</span>
            </span>
          </SectionLabel>
          <Reveal>
            <TechStackFloat />
          </Reveal>
        </section>

        {/* Focus Section */}
        <section id="focus" className="py-6">
          <SectionLabel method="GET">/focus</SectionLabel>
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FOCUS_AREAS.map((area) => (
                <div
                  key={area.title}
                  className="glass-panel p-5 rounded-2xl border border-[#26314f]/80 hover:border-[#4FD1C5]/40 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2.5 rounded-xl bg-[#162038] border border-[#26314f] group-hover:scale-110 transition-transform">
                      {area.icon}
                    </div>
                    <h3 className="font-mono text-sm font-semibold text-white group-hover:text-[#4FD1C5] transition-colors">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#7C8AA8] leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Looking for / Connect Section */}
        <section id="looking-for" className="py-8 mb-8">
          <SectionLabel method="POST">/collab</SectionLabel>
          <Reveal>
            <Connect />
          </Reveal>
        </section>
      </main>
    </div>
  );
}