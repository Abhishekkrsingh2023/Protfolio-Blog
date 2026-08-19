import type { Metadata } from "next";
import Image from "next/image";

import TechStack from "@/components/TechStack";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import Certificate from "@/components/Certificate";
import ExperienceSection from "@/components/about/ExperienceSection";
import Connect from "@/components/Connect";
import TopBar from "@/components/TopBar";
import { HOW_I_WORK } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "About | Abhishek Singh",
  description:
    "Background, technical expertise, work experience, and engineering principles of Abhishek Singh.",
};

const SKILL_TAGS = [
  "Python",
  "FastAPI",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Redis",
  "MongoDB",
  "Docker",
  "SQLAlchemy",
  "Next.js",
  "React",
  "Linux / Bash",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#E8ECF4] font-sans leading-relaxed">
      <TopBar to="/about" />

      <div className="max-page-width mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        {/* <SectionLabel method="GET">/about</SectionLabel> */}

        <Reveal>
          <div className="space-y-6 flex flex-col items-center text-center">
            {/* Avatar & Name */}
            <div className="flex flex-col items-center gap-3">
              <div className="relative">
                <Image
                  src="/images/abhi-logo.jpg"
                  alt="Abhishek Singh"
                  width={110}
                  height={110}
                  className="rounded-2xl border border-[#4FD1C5]/40 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(79,209,197,0.25)]"
                  priority
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#0B1120] animate-pulse" />
              </div>

              <h1 className="font-mono text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Abhishek Kumar Singh
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-xs sm:text-sm uppercase tracking-widest text-[#4FD1C5] font-mono font-semibold">
              Backend Architecture · Distributed Systems · DevOps
            </p>

            {/* Concise Bio */}
            <div className="max-w-2xl text-[#94A3B8] text-sm sm:text-[15px] leading-relaxed space-y-3">
              <p>
                I&apos;m a backend engineer and full-stack developer based in Kolkata, India. I specialize in building high-throughput APIs, asynchronous microservices, and reliable cloud workflows with{" "}
                <span className="text-[#4FD1C5] font-medium">Python</span>,{" "}
                <span className="text-[#4FD1C5] font-medium">FastAPI</span>,{" "}
                <span className="text-[#60abe9] font-medium">Express</span>,{" "}
                <span className="text-[#F2B84B] font-medium">PostgreSQL</span>, and{" "}
                <span className="text-[#2496ED] font-medium">Docker</span>.
              </p>
              <p className="text-xs sm:text-sm text-[#7C8AA8]">
                Focusing on strict type safety, predictable schema design, low response latency, and observable microservice pipelines.
              </p>
            </div>

            {/* Tech stack chips */}
            <div className="flex flex-wrap justify-center gap-2 pt-2 max-w-xl">
              {SKILL_TAGS.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-[#162038] text-[#A5B4D6] border border-[#26314f] hover:border-[#4FD1C5] hover:text-[#4FD1C5] transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl border-t border-[#26314f]/70 pt-6 mt-4">
              <div className="border border-[#26314f] rounded-2xl glass-panel p-4 text-center">
                <span className="text-[#4FD1C5] font-mono font-bold text-2xl block">1+</span>
                <span className="text-xs text-[#7C8AA8] font-mono">Years Industry Exp</span>
              </div>
              <div className="border border-[#26314f] rounded-2xl glass-panel p-4 text-center">
                <span className="text-[#F2B84B] font-mono font-bold text-2xl block">10+</span>
                <span className="text-xs text-[#7C8AA8] font-mono">Projects Delivered</span>
              </div>
              <div className="border border-[#26314f] rounded-2xl glass-panel p-4 text-center">
                <span className="text-[#36c766] font-mono font-bold text-2xl block">99.9%</span>
                <span className="text-xs text-[#7C8AA8] font-mono">Uptime Mindset</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* How I Work */}
        <section className="mt-14">
          <SectionLabel method="GET">/principles</SectionLabel>
          <Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {HOW_I_WORK.map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col border border-[#26314f] rounded-2xl glass-panel p-6 hover:-translate-y-1 transition-all duration-200 hover:border-[#4FD1C5]/40"
                >
                  <div className="font-mono text-sm text-[#F2B84B] font-bold mb-2">
                    {item.step} · {item.title}
                  </div>
                  <p className="text-[#7C8AA8] text-xs sm:text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Experience */}
        <section className="mt-14">
          <SectionLabel method="GET">/experience</SectionLabel>
          <ExperienceSection />
        </section>

        {/* Tech Stack Grid */}
        <section className="mt-14">
          <SectionLabel method="GET">/stack-matrix</SectionLabel>
          <Reveal>
            <div className="border border-[#26314f] rounded-2xl glass-panel p-6 sm:p-8">
              <TechStack />
            </div>
          </Reveal>
        </section>

        {/* Certifications */}
        <section className="mt-14">
          <SectionLabel method="GET">/certifications</SectionLabel>
          <Certificate />
        </section>

        {/* Connect */}
        <section className="mt-14 mb-8">
          <SectionLabel method="POST">/connect</SectionLabel>
          <Reveal>
            <Connect />
          </Reveal>
        </section>
      </div>
    </div>
  );
}