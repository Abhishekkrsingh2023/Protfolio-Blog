
import type { Metadata } from "next";
import Image from "next/image";

import TechStack from "@/components/TechStack";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import Certificate from "@/components/Certificate";
import ExperienceSection from "@/components/about/ExperienceSection";
import Connect from "@/components/Connect";


export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Abhishek Singh, a Full Stack Developer & DevOps enthusiast. Explore his experience, tech stack, certifications, and how to connect with me. Discover my approach to building scalable web applications and contributing to open-source projects.",
};

const HOW_I_WORK = [
  {
    step: "01",
    title: "Build",
    description: "I learn new technologies by building real projects, not just following tutorials.",
  },
  {
    step: "02",
    title: "Understand",
    description: "I like understanding how things work internally instead of relying on quick fixes.",
  },
  {
    step: "03",
    title: "Improve",
    description: "I enjoy building scalable backends, developer tools, and systems that solve real problems.",
  },
];

function Card({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-full flex flex-col border border-[#26314f] rounded-lg bg-[#121A2E] p-4 md:p-6 hover:scale-[1.02] transition-transform duration-200 hover:shadow-[0_30px_60px_-40px_rgba(34,211,238,0.2)]">
      {children}
    </div>
  );
}


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-[#E8ECF4] font-sans leading-relaxed">

      <div className="max-page-width mx-auto px-6 py-6">
        {/* header */}
        <SectionLabel method="GET"> /about</SectionLabel>
        <Reveal>
          <div className="space-y-6 flex flex-col items-center">
            {/* Name + decorative line */}
            <div className="flex flex-col items-center gap-2">
              <Image src="/images/abhi-logo.jpg" alt="Abhishek Singh" width={120} height={100} className="rounded-2xl border border-cyan-500/20 hover:scale-105 
              transition-all duration-300 ease-out hover:scale-[1.03] 
              hover:shadow-[0_0_20px_rgba(34,211,238,0.20),0_0_40px_rgba(34,211,238,0.15),0_0_80px_rgba(34,211,238,0.10)]" />
              <h1 className="font-mono text-2xl md:text-4xl font-bold tracking-tight text-[#E8ECF4] inline-block name shimmer">
                Abhishek Kumar Singh
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-sm uppercase tracking-widest text-[#4FD1C5] font-medium">
              Backend · Full-Stack · DevOps
            </p>

            {/* Main bio – more verbose and narrative */}
            <div className="prose prose-invert prose-sm md:prose-base max-w-none text-[#B0C4DE] space-y-4">
              <p>
                I'm a backend-focused full-stack engineer from India. I primarily
                work with <span className="text-[#4FD1C5] font-medium">Python</span>,
                <span className="text-[#4FD1C5] font-medium"> FastAPI</span>,
                <span className="text-[#4FD1C5] font-medium"> Express</span>,
                <span className="text-[#4FD1C5] font-medium"> React</span>,
                <span className="text-[#4FD1C5] font-medium"> Next.js</span> and
                <span className="text-[#4FD1C5] font-medium"> Docker</span> to build
                scalable web applications, REST APIs, and developer-centric tools. I enjoy
                designing clean backend architectures and writing code that's maintainable,
                efficient, and easy to extend.
              </p>
            </div>

            {/* Tech stack chips – adds visual interest */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Python", "FastAPI", "Node.js", "Express", "Next.js", "React", "SQL", "MongoDB", "Redis", "Docker", "Ubuntu"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-[#1E293B] text-[#94A3B8] border border-[#334155] hover:border-[#4FD1C5] hover:text-[#E8ECF4] transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Optional small stats / social proof */}
            <div className="flex items-center justify-center gap-6 text-sm text-[#7C8AA8] border-t border-[#1E293B]/50 mt-2 pt-4 px-10">
              <Card>
                <div className="flex flex-col items-center">
                  <span className="text-[#4FD1C5] font-semibold">1+</span>
                  <span className="text-center">years of experience</span>
                </div>
              </Card>
              <Card>
                <div className="flex flex-col items-center">
                  <span className="text-[#4FD1C5] font-semibold">10+</span>
                  <span className="text-center">side projects</span>
                </div>
              </Card>
              <Card>
                <div className="flex flex-col items-center">
                  <span className="text-[#4FD1C5] font-semibold">1</span>
                  <span className="text-center">open‑source contributions</span>
                </div>
              </Card>
            </div>
          </div>
        </Reveal>

        {/* how i work */}
        <section className="mt-14">
          <SectionLabel method="GET"> /how-i-work</SectionLabel>
          <Reveal>
            <div className="grid gap-3 md:grid-cols-3">
              {HOW_I_WORK.map((item) => (
                <Card key={item.step}>
                  <div className="font-mono text-[13px] text-[#F2B84B] mb-2">
                    {item.step} · {item.title}
                  </div>
                  <p className="text-[#7C8AA8] text-sm">{item.description}</p>
                </Card>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Experience */}
        <section className="mt-14">
          <SectionLabel method="GET"> /experience</SectionLabel>
          <ExperienceSection />
        </section>

        {/* stack – modified with icons & hover */}
        <section className="mt-14">
          <SectionLabel method="GET"> /stack</SectionLabel>
          <Reveal>
            <Card>
              <TechStack />
            </Card>
          </Reveal>
        </section>

        {/* certifications */}
        <section className="mt-14">
          <SectionLabel method="GET"> /certifications</SectionLabel>
          <Certificate />
        </section>

        {/* connect */}
        <section className="mt-14">
          <SectionLabel method="POST"> /connect</SectionLabel>
          <Reveal>
            <Connect />
          </Reveal>
        </section>
      </div >
    </div >
  );
}