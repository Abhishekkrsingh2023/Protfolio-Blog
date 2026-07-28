"use client";
import React, { useRef, useState, useEffect } from "react";
import TechStack from "@/components/TechStack";
import SectionLabel from "@/components/SectionLabel";

import { FaExternalLinkAlt } from "react-icons/fa";

const CERTIFICATIONS = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-SAA-XXXXXXX",
    verifyUrl: "https://www.credly.com/badges/your-badge-id",
  },
  {
    name: "Meta Backend Developer",
    issuer: "Meta (Coursera)",
    date: "2024",
    credentialId: "META-BE-XXXXXXX",
    verifyUrl: "https://coursera.org/verify/your-cert-id",
  },
  {
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2023",
    credentialId: "MDB-DEV-XXXXXXX",
    verifyUrl: "https://university.mongodb.com/verify/your-cert-id",
  },
];


function Reveal({ children }: Readonly<{ children: React.ReactNode }>) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.15 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"
        }`}
    >
      {children}
    </div>
  );
}


function Card({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="border border-[#26314f] rounded-lg bg-[#121A2E] p-5 md:p-6">
      {children}
    </div>
  );
}

const BUILDING = [
  {
    name: "Blog SPA (FARM Stack)",
    detail: "FastAPI + React + MongoDB blog platform — SEO crawler middleware, server-side Markdown rendering, cookie-based JWT auth.",
  },
  {
    name: "GIF Compressor Service",
    detail: "FastAPI + gifsicle, Dockerized — frame-skip control, compression stat headers, background temp-file cleanup.",
  },
  {
    name: "Markdown → PDF/DOCX Exporter",
    detail: "FastAPI service using pypandoc to convert Markdown into polished PDF and DOCX output.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-[#E8ECF4] font-sans leading-relaxed">
      <div className="max-w-[920px] mx-auto px-6 py-10">
        {/* header */}
        <SectionLabel method="GET"> /about</SectionLabel>
        <Reveal>
          <div className="space-y-6">
            {/* Name + decorative line */}
            <div>
              <h1 className="font-mono text-2xl md:text-4xl font-bold tracking-tight text-[#E8ECF4] inline-block">
                Abhishek Kumar Singh
              </h1>
              <div className="w-12 h-1 bg-gradient-to-r from-[#4FD1C5] to-[#F2B84B] rounded-full mt-2" />
            </div>

            {/* Tagline */}
            <p className="text-sm uppercase tracking-widest text-[#4FD1C5] font-medium">
              Backend‑first · Full‑stack · System thinker
            </p>

            {/* Main bio – more verbose and narrative */}
            <div className="prose prose-invert prose-sm md:prose-base max-w-none text-[#B0C4DE] space-y-4">
              <p>
                I'm a backend-focused full-stack engineer based in Kolkata, India. I primarily
                work with <span className="text-[#4FD1C5] font-medium">Python</span>,
                <span className="text-[#4FD1C5] font-medium"> FastAPI</span>,
                <span className="text-[#4FD1C5] font-medium"> React</span>, and
                <span className="text-[#4FD1C5] font-medium"> Next.js</span> to build
                scalable web applications, REST APIs, and developer-centric tools. I enjoy
                designing clean backend architectures and writing code that's maintainable,
                efficient, and easy to extend.
              </p>

              <p>
                Beyond application development, I'm interested in backend infrastructure and
                system design. I regularly work with databases, Docker, Redis, Git, and Linux,
                and I'm currently expanding my knowledge in distributed systems, DevOps, and
                cloud-native technologies. I enjoy understanding how systems work under the
                hood and continuously improving my engineering skills through hands-on
                projects.
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
            <div className="flex items-center justify-center gap-6 text-sm text-[#7C8AA8] border-t border-[#1E293B] pt-4 mt-2">
              <span className="flex flex-col items-center justify-center gap-1 bg-gray-700/20 px-3 p-4 rounded-lg">
                <span className="text-[#4FD1C5] font-semibold">1+</span>
                <span className="text-center">years of experience</span>
              </span>
              <span className="flex flex-col items-center justify-center gap-1 bg-gray-700/20 px-3 p-4 rounded-lg">
                <span className="text-[#4FD1C5] font-semibold">5+</span>
                <span className="text-center">side projects</span>
              </span>
              <span className="flex flex-col items-center justify-center gap-1 bg-gray-700/20 px-3 p-4 rounded-lg">

                <span className="text-[#4FD1C5] font-semibold">1</span>
                <span className="text-center">open‑source contributions</span>
              </span>
            </div>
          </div>
        </Reveal>

        {/* how i work */}
        <section className="mt-14">
          <SectionLabel method="GET"> /how-i-work</SectionLabel>
          <Reveal>
            <div className="grid gap-3 md:grid-cols-3">
              <Card>
                <div className="font-mono text-[13px] text-[#F2B84B] mb-2">
                  01 · build
                </div>
                <p className="text-[#7C8AA8] text-sm">
                  I learn new technologies by building real projects, not just following tutorials.
                </p>
              </Card>

              <Card>
                <div className="font-mono text-[13px] text-[#F2B84B] mb-2">
                  02 · understand
                </div>
                <p className="text-[#7C8AA8] text-sm">
                  I like understanding how things work internally instead of relying on quick fixes.
                </p>
              </Card>

              <Card>
                <div className="font-mono text-[13px] text-[#F2B84B] mb-2">
                  03 · improve
                </div>
                <p className="text-[#7C8AA8] text-sm">
                  I enjoy building scalable backends, developer tools, and systems that solve real problems.
                </p>
              </Card>
            </div>
          </Reveal>
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

        {/* devops */}
        <section className="mt-14">
          <SectionLabel method="GET"> /devops</SectionLabel>
          <Reveal>
            <Card>
              <p className="text-[#7C8AA8] text-sm md:text-[15px]">
                DevOps enthusiast — comfortable containerizing services with
                Docker, and generally more interested in how a system stays
                reliable in production than in how it looks in a demo.
              </p>
            </Card>
          </Reveal>
        </section>

        {/* certifications */}
        <section className="mt-14">
          <SectionLabel method="GET"> /certifications</SectionLabel>
          <div className="grid gap-3 md:grid-cols-3">
            {CERTIFICATIONS.map((cert) => (
              <Reveal key={cert.name}>
                <Card>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.5)]" />
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#7C8AA8]">
                        Verified
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#7C8AA8]">
                      {cert.date}
                    </span>
                  </div>

                  <div className="font-mono text-[13px] text-[#E8ECF4] font-semibold mb-1 leading-snug">
                    {cert.name}
                  </div>
                  <p className="text-[#7C8AA8] text-sm mb-3">{cert.issuer}</p>

                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="text-[11px] font-mono text-[#5C6884] truncate">
                      {cert.credentialId}
                    </span>

                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[11px] font-mono text-[#E8ECF4] hover:text-emerald-400 transition-colors shrink-0"
                    >
                      Verify
                      <FaExternalLinkAlt size={12} strokeWidth={2} />
                    </a>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>
        {/* currently building */}
        <section className="mt-14">
          <SectionLabel method="GET"> /currently-building</SectionLabel>
          <div className="grid gap-3 md:grid-cols-3">
            {BUILDING.map((b) => (
              <Reveal key={b.name}>
                <Card>
                  <div className="font-mono text-[13px] text-[#E8ECF4] font-semibold mb-2">
                    {b.name}
                  </div>
                  <p className="text-[#7C8AA8] text-sm">{b.detail}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        {/* connect */}
        <section className="mt-14">
          <SectionLabel method="POST"> /connect</SectionLabel>
          <Reveal>
            <div className="border border-[#F2B84B] rounded-lg px-6 py-5 bg-gradient-to-b from-[#F2B84B]/[0.06] to-transparent">
              <div className="font-mono text-xs text-[#F2B84B] mb-2">
                status: open to collabs
              </div>
              <p className="text-[#E8ECF4] text-[15px]">
                FastAPI, React, Dockerized services, Node.js — if you&apos;re
                building in that space, reach out.
              </p>
            </div>
          </Reveal>
        </section>
      </div >
    </div >
  );
}