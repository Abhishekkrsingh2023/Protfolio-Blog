"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdVerified, MdWorkHistory } from "react-icons/md";
import { FaCloudDownloadAlt, FaServer } from "react-icons/fa";
import {
  SiPython,
  SiFastapi,
  SiJavascript,
  SiDocker,
  SiPostgresql,
  SiRedis,
} from "react-icons/si";
import Reveal from "@/components/Reveal";

interface FloatingBadge {
  name: string;
  icon: React.ReactNode;
  color: string;
  position: string;
  animationClass: string;
  delay: string;
}

const FLOATING_BADGES: FloatingBadge[] = [
  {
    name: "Python",
    icon: <SiPython size={18} />,
    color: "#3776AB",
    position: "-top-3 -left-3 md:-top-4 md:-left-6",
    animationClass: "animate-float-1",
    delay: "0s",
  },
  {
    name: "FastAPI",
    icon: <SiFastapi size={18} />,
    color: "#009688",
    position: "top-1/3 -left-5 md:top-1/3 md:-left-8",
    animationClass: "animate-float-3",
    delay: "0.5s",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={17} />,
    color: "#F7DF1E",
    position: "-top-3 -right-3 md:-top-4 md:-right-6",
    animationClass: "animate-float-2",
    delay: "0.2s",
  },
  {
    name: "Docker",
    icon: <SiDocker size={18} />,
    color: "#2496ED",
    position: "top-1/2 -right-5 md:top-1/2 md:-right-8",
    animationClass: "animate-float-4",
    delay: "0.7s",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={17} />,
    color: "#4169E1",
    position: "-bottom-3 -left-2 md:-bottom-4 md:-left-4",
    animationClass: "animate-float-2",
    delay: "0.4s",
  },
  {
    name: "Redis",
    icon: <SiRedis size={17} />,
    color: "#DC382D",
    position: "-bottom-3 -right-2 md:-bottom-4 md:-right-4",
    animationClass: "animate-float-1",
    delay: "0.9s",
  },
];

export default function HeroTerminal() {
  const [typed, setTyped] = useState("");
  const [showData, setShowData] = useState(false);
  const command = "curl -X GET api.abhishek.dev/v1/profile";

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setTyped(command);
      setShowData(true);
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(command.slice(0, i));
      if (i >= command.length) {
        clearInterval(interval);
        setTimeout(() => setShowData(true), 200);
      }
    }, 38);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-6 md:py-10">
      <div className="flex flex-col lg:flex-row items-stretch gap-8">
        {/* Terminal section */}
        <div className="flex-1 glass-panel rounded-2xl overflow-hidden shadow-[0_25px_60px_-25px_rgba(0,0,0,0.8)] border border-[#26314f]/80 hover:border-[#4FD1C5]/40 transition-all duration-300 flex flex-col justify-between">
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#151e36]/90 border-b border-[#26314f]/80 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#E5657A] shadow-[0_0_8px_rgba(229,101,122,0.4)]" />
              <span className="w-3 h-3 rounded-full bg-[#F2B84B] shadow-[0_0_8px_rgba(242,184,75,0.4)]" />
              <span className="w-3 h-3 rounded-full bg-[#4FD1C5] shadow-[0_0_8px_rgba(79,209,197,0.4)]" />
              <span className="ml-2 font-mono text-xs text-[#7C8AA8] hidden sm:inline">
                abhishek@backend:~/profile
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px]">
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                200 OK
              </span>
              <span className="text-[#5C6884] hidden md:inline">14ms</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-5 md:p-7 font-mono text-sm flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center flex-wrap gap-1">
                <span className="text-[#4FD1C5] font-semibold">$</span>
                <span className="text-white ml-1 font-medium">{typed}</span>
                <span className="inline-block w-2 h-4 bg-[#F2B84B] align-middle ml-1 animate-pulse" />
              </div>

              <div
                className={`mt-5 whitespace-pre-wrap transition-all duration-500 ease-out leading-relaxed text-xs md:text-sm ${
                  showData ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                <div className="text-[#7C8AA8] text-[11px] mb-2">
                  {"// Response Header: HTTP/2.0 application/json"}
                </div>
                <div className="space-y-1.5 text-[#E8ECF4]">
                  <div>
                    <span className="text-[#4FD1C5]">name</span>:{" "}
                    <span className="text-[#d8b4fe] font-semibold">
                      &quot;Abhishek Kumar Singh&quot;
                    </span>
                  </div>
                  <div>
                    <span className="text-[#4FD1C5]">role</span>:{" "}
                    <span className="text-[#60abe9]">
                      &quot;Backend & Full-Stack Developer&quot;
                    </span>
                  </div>
                  <div>
                    <span className="text-[#4FD1C5]">core_stack</span>:{" "}
                    <span className="text-[#F2B84B]">
                      [&quot;Python&quot;, &quot;FastAPI&quot;, &quot;Node.js&quot;, &quot;Docker&quot;, &quot;PostgreSQL&quot;]
                    </span>
                  </div>
                  <div>
                    <span className="text-[#4FD1C5]">architecture</span>:{" "}
                    <span className="text-[#A5B4D6]">
                      &quot;REST APIs · Caching · System Design · Microservices&quot;
                    </span>
                  </div>
                  <div>
                    <span className="text-[#4FD1C5]">availability</span>:{" "}
                    <span className="text-[#36c766] font-medium">
                      &quot;Open for Full-Time Roles & Collaborations&quot;
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap gap-3 mt-7 pt-5 border-t border-[#26314f]/70">
              <Link
                href="/projects"
                className="group flex items-center justify-center text-[#4FD1C5] bg-[#4FD1C5]/10 px-4 py-2.5 rounded-xl border border-[#4FD1C5]/30 hover:bg-[#4FD1C5] hover:text-[#0B1120] hover:shadow-[0_0_20px_rgba(79,209,197,0.4)] transition-all duration-300 gap-2 text-xs font-mono font-semibold cursor-pointer"
              >
                <MdWorkHistory size={16} className="group-hover:scale-110 transition-transform" />
                <span>Explore Projects</span>
              </Link>

              <a
                href="/Resume.pdf"
                download="Abhishek_Kumar_Singh_Resume.pdf"
                className="group flex items-center justify-center text-[#E8ECF4] bg-white/5 px-4 py-2.5 rounded-xl border border-white/10 hover:border-[#F2B84B]/50 hover:bg-[#F2B84B]/10 hover:text-[#F2B84B] transition-all duration-300 gap-2 text-xs font-mono font-medium"
              >
                <FaCloudDownloadAlt size={15} className="group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              <Link
                href="/contact"
                className="group flex items-center justify-center text-[#7C8AA8] hover:text-[#4FD1C5] px-3.5 py-2.5 rounded-xl border border-transparent hover:border-[#4FD1C5]/30 hover:bg-[#4FD1C5]/5 transition-all duration-200 gap-1.5 text-xs font-mono"
              >
                <span>/contact &rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Profile Picture Card with Floating Tech Icons */}
        <Reveal className="shrink-0 flex justify-center items-center">
          <div className="relative p-6 sm:p-8">
            {/* Outer ambient glow ring */}
            <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-[#4FD1C5]/15 via-[#3B82F6]/10 to-[#8B5CF6]/15 blur-xl pointer-events-none" />

            {/* Profile Avatar Card */}
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-2xl glass-panel p-2.5 border border-[#26314f] group overflow-visible shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0e1628]">
                <Image
                  src="/images/my-pic.png"
                  alt="Abhishek Singh - Backend Developer"
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />

                {/* Dark bottom gradient overlay for contrast */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent" />

                {/* Verified Beacon Pill */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-[#121A2E]/90 px-2.5 py-1 backdrop-blur-md text-xs font-mono text-[#4FD1C5] border border-[#4FD1C5]/30 shadow-lg">
                  <MdVerified className="text-[#4FD1C5]" size={14} />
                  <span className="text-[11px] text-[#E8ECF4]">Verified</span>
                </div>

                {/* Status bar at bottom of picture */}
                <div className="absolute bottom-3 inset-x-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-[#121A2E]/90 backdrop-blur-md border border-[#26314f]/80 text-[11px] font-mono text-[#7C8AA8]">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-beacon" />
                    Operational
                  </span>
                  <span className="text-[#A5B4D6]">Kolkata, IN</span>
                </div>
              </div>

              {/* Dynamic Floating Tech Badges (Python, FastAPI, JS, Docker, PostgreSQL, Redis) */}
              {FLOATING_BADGES.map((badge) => (
                <div
                  key={badge.name}
                  className={`absolute ${badge.position} ${badge.animationClass} z-20 pointer-events-auto`}
                  style={{ animationDelay: badge.delay }}
                >
                  <div
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#121A2E]/95 backdrop-blur-md border shadow-lg hover:scale-110 transition-transform duration-200 cursor-default select-none group/badge"
                    style={{
                      borderColor: `${badge.color}55`,
                      boxShadow: `0 4px 20px -2px ${badge.color}33`,
                    }}
                  >
                    <span
                      style={{ color: badge.color }}
                      className="group-hover/badge:rotate-12 transition-transform duration-200"
                    >
                      {badge.icon}
                    </span>
                    <span className="text-[11px] font-mono font-medium text-[#E8ECF4] tracking-tight">
                      {badge.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
