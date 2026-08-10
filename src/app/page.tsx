import type { Metadata } from "next";
import Link from "next/link";
import { MdOutlineReadMore } from "react-icons/md";

import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import Endpoint from "@/components/Endpoint";
import HeroTerminal from "@/components/home/HeroTerminal";
import TopBar from "@/components/TopBar";
import TechStackFloat from "@/components/TechStackFloating";
import Connect from "@/components/Connect";

export const metadata: Metadata = {
  title: "Abhishek Singh | Full Stack Developer & DevOps Engineer",
  description:
    "Portfolio and blog of Abhishek Singh — Full Stack Developer & DevOps enthusiast building responsive, user-friendly web applications.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-[#E8ECF4] font-sans leading-relaxed">
      <TopBar to="" />

      <main className="max-page-width mx-auto px-6">
        {/* Hero Terminal */}
        <HeroTerminal />

        {/* About Section */}
        <section id="about" className="py-6">
          <SectionLabel method="GET"> /about</SectionLabel>
          <Endpoint>
            <p>
              I&apos;m a DevOps enthusiast and full-stack engineer based in Kolkata, India. I primarily
              build and work on APIs and backend services using{" "}
              <span className="text-[#4FD1C5] font-medium">Python</span>,{" "}
              <span className="text-[#4FD1C5] font-medium">FastAPI</span>,{" "}
              <span className="text-[#4FD1C5] font-medium">Node.js</span>,{" "}
              <span className="text-[#4FD1C5] font-medium">Express</span>,{" "}
              <span className="text-[#4FD1C5] font-medium">PostgreSQL</span>, and{" "}
              <span className="text-[#4FD1C5] font-medium">Redis</span>. I enjoy designing
              clean architectures, predictable data models, and backend systems that are
              maintainable, efficient, and reliable.
            </p>
            <p className="mt-4">
              Beyond application development, I&apos;m passionate about backend infrastructure
              and system design. I regularly work with Docker, Git, Linux, and message
              queues while exploring distributed systems and cloud-native technologies.
            </p>
            <div className="flex mt-5">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#4FD1C5] bg-[#4FD1C5]/10 px-4 py-2 rounded-lg border border-[#4FD1C5]/20 hover:bg-[#4FD1C5]/20 hover:text-orange-400 font-mono text-xs transition-all duration-200"
              >
                <MdOutlineReadMore size={18} /> know more
              </Link>
            </div>
          </Endpoint>
        </section>

        {/* Tech Stack Floating Section */}
        <section id="stack" className="py-6">
          <SectionLabel method="GET">
            <span>
              /stack?<span className="text-orange-400">learning=endless</span>
            </span>
          </SectionLabel>
          <Reveal>
            <TechStackFloat />
          </Reveal>
        </section>

        {/* Focus Section */}
        <section id="focus" className="py-6">
          <SectionLabel method="GET"> /focus</SectionLabel>
          <Endpoint>
            <p>
              I enjoy building across the stack — from crafting responsive interfaces to designing
              reliable backend architectures. My primary focus is backend engineering, system design,
              and automation, while continuously expanding into DevOps, cloud-native workflows, and
              modern development practices.
            </p>

            <p className="mt-4">
              I believe good engineers are adaptable, so I actively explore new technologies,
              frameworks, and tools beyond my current stack. Whether it&apos;s improving existing systems,
              experimenting with emerging ideas, or diving into areas like Agentic AI, I enjoy the
              process of learning, building, and staying close to the future of technology.
            </p>
          </Endpoint>
        </section>

        {/* Looking for / Connect Section */}
        <section id="looking-for" className="py-6">
          <SectionLabel method="POST"> /collab</SectionLabel>
          <Reveal>
            <Connect />
          </Reveal>
        </section>
      </main>
    </div>
  );
}