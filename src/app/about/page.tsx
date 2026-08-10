import type { Metadata } from "next";
import Image from "next/image";

import TechStack from "@/components/TechStack";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import Certificate from "@/components/Certificate";
import ExperienceSection from "@/components/about/ExperienceSection";
import Connect from "@/components/Connect";
import { HOW_I_WORK } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Abhishek Singh, a Full Stack Developer & DevOps enthusiast. Explore experience, tech stack, certifications, and background.",
};

const SKILL_TAGS = [
  "Python",
  "FastAPI",
  "Node.js",
  "Express",
  "Next.js",
  "React",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Ubuntu",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-[#E8ECF4] font-sans leading-relaxed">
      <div className="max-page-width mx-auto px-6 py-8">
        {/* Header */}
        <SectionLabel method="GET"> /about</SectionLabel>
        <Reveal>
          <div className="space-y-6 flex flex-col items-center text-center">
            {/* Avatar & Name */}
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/images/abhi-logo.jpg"
                alt="Abhishek Singh"
                width={110}
                height={110}
                className="rounded-2xl border border-[#4FD1C5]/30 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(79,209,197,0.15)]"
                priority
              />
              <h1 className="font-mono text-2xl md:text-4xl font-bold tracking-tight text-[#E8ECF4]">
                Abhishek Kumar Singh
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-xs md:text-sm uppercase tracking-widest text-[#4FD1C5] font-mono font-medium">
              Backend · Full-Stack · DevOps
            </p>

            {/* Main bio */}
            <div className="max-w-2xl text-[#B0C4DE] text-sm md:text-base leading-relaxed space-y-4">
              <p>
                I&apos;m a backend-focused full-stack engineer from India. I primarily work with{" "}
                <span className="text-[#4FD1C5] font-medium">Python</span>,{" "}
                <span className="text-[#4FD1C5] font-medium">FastAPI</span>,{" "}
                <span className="text-[#4FD1C5] font-medium">Express</span>,{" "}
                <span className="text-[#4FD1C5] font-medium">React</span>,{" "}
                <span className="text-[#4FD1C5] font-medium">Next.js</span>, and{" "}
                <span className="text-[#4FD1C5] font-medium">Docker</span> to build
                scalable web applications, REST APIs, and developer-centric tools. I enjoy
                designing clean backend architectures and writing code that&apos;s maintainable,
                efficient, and easy to extend.
              </p>
            </div>

            {/* Tech stack chips */}
            <div className="flex flex-wrap justify-center gap-2 pt-2 max-w-xl">
              {SKILL_TAGS.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-[#1E293B] text-[#94A3B8] border border-[#334155] hover:border-[#4FD1C5] hover:text-[#E8ECF4] transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-xl border-t border-[#1E293B] pt-6 mt-4">
              <div className="border border-[#26314f] rounded-xl bg-[#121A2E] p-4 text-center">
                <span className="text-[#4FD1C5] font-mono font-bold text-xl block">1+</span>
                <span className="text-xs text-[#7C8AA8]">years of experience</span>
              </div>
              <div className="border border-[#26314f] rounded-xl bg-[#121A2E] p-4 text-center">
                <span className="text-[#4FD1C5] font-mono font-bold text-xl block">10+</span>
                <span className="text-xs text-[#7C8AA8]">projects built</span>
              </div>
              <div className="border border-[#26314f] rounded-xl bg-[#121A2E] p-4 text-center">
                <span className="text-[#4FD1C5] font-mono font-bold text-xl block">1</span>
                <span className="text-xs text-[#7C8AA8]">open‑source focus</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* How I Work */}
        <section className="mt-14">
          <SectionLabel method="GET"> /how-i-work</SectionLabel>
          <Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {HOW_I_WORK.map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col border border-[#26314f] rounded-xl bg-[#121A2E] p-5 hover:scale-[1.02] transition-transform duration-200 hover:border-[#4FD1C5]/30"
                >
                  <div className="font-mono text-sm text-[#F2B84B] font-semibold mb-2">
                    {item.step} · {item.title}
                  </div>
                  <p className="text-[#7C8AA8] text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Experience */}
        <section className="mt-14">
          <SectionLabel method="GET"> /experience</SectionLabel>
          <ExperienceSection />
        </section>

        {/* Tech Stack Grid */}
        <section className="mt-14">
          <SectionLabel method="GET"> /stack</SectionLabel>
          <Reveal>
            <div className="border border-[#26314f] rounded-xl bg-[#121A2E] p-6">
              <TechStack />
            </div>
          </Reveal>
        </section>

        {/* Certifications */}
        <section className="mt-14">
          <SectionLabel method="GET"> /certifications</SectionLabel>
          <Certificate />
        </section>

        {/* Connect */}
        <section className="mt-14">
          <SectionLabel method="POST"> /connect</SectionLabel>
          <Reveal>
            <Connect />
          </Reveal>
        </section>
      </div>
    </div>
  );
}