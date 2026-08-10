"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdVerified, MdWorkHistory } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function HeroTerminal() {
  const [typed, setTyped] = useState("");
  const [showYaml, setShowYaml] = useState(false);
  const command = "whoami --verbose";

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setTyped(command);
      setShowYaml(true);
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(command.slice(0, i));
      if (i >= command.length) {
        clearInterval(interval);
        setTimeout(() => setShowYaml(true), 250);
      }
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-8 md:py-12">
      <div className="flex flex-col md:flex-row items-stretch gap-6">
        {/* Terminal section */}
        <div className="flex-1 bg-[#121A2E] border border-[#26314f] rounded-xl overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] hover:border-[#4FD1C5]/30 transition-all duration-300">
          <div className="flex items-center gap-2 px-4 py-3 bg-[#172140] border-b border-[#26314f]">
            <span className="w-3 h-3 rounded-full bg-[#E5657A]" />
            <span className="w-3 h-3 rounded-full bg-[#F2B84B]" />
            <span className="w-3 h-3 rounded-full bg-[#4FD1C5]" />
            <span className="ml-2 font-mono text-xs text-[#7C8AA8]">
              abhishek@backend — zsh
            </span>
          </div>

          <div className="p-5 md:p-6 font-mono text-sm">
            <div className="flex items-center">
              <span className="text-[#7C8AA8]">$ </span>
              <span className="text-white ml-1.5">{typed}</span>
              <span className="inline-block w-2 h-4 bg-[#F2B84B] align-middle ml-1 animate-pulse" />
            </div>

            <div
              className={`mt-4 whitespace-pre-wrap transition-all duration-500 ease-out leading-relaxed ${
                showYaml ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <span className="text-[#4FD1C5]">name</span>:{" "}
              <span className="text-[#d8b4fe] font-semibold uppercase">
                Abhishek Kumar Singh
              </span>
              {"\n"}
              <span className="text-[#4FD1C5]">role</span>: Python & Node.js / DevOps Enthusiast{"\n"}
              <span className="text-[#4FD1C5]">location</span>: Kolkata, India{"\n"}
              <span className="text-[#4FD1C5]">focus</span>: Full-Stack · DevOps · AI{"\n"}
              <span className="text-[#4FD1C5]">interests</span>: Backend · DevOps · Automation{"\n"}
              <span className="text-[#4FD1C5]">databases</span>: RDBMS · Schema Design · Caching{"\n"}
              <span className="text-[#4FD1C5]">looking_for</span>: Collabs on Python, React, & Node.js projects
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                href="/projects"
                className="flex items-center justify-center text-[#4FD1C5] bg-[#4FD1C5]/10 px-4 py-2.5 rounded-lg border border-[#4FD1C5]/20 hover:bg-[#4FD1C5]/20 hover:text-white transition-all duration-200 gap-2 text-xs font-mono font-medium"
              >
                <MdWorkHistory size={18} /> View My Work
              </Link>

              <a
                href="/Resume.pdf"
                download="Abhishek_Kumar_Singh_Resume.pdf"
                className="flex items-center justify-center text-[#4FD1C5] bg-[#4FD1C5]/10 px-4 py-2.5 rounded-lg border border-[#4FD1C5]/20 hover:bg-[#4FD1C5]/20 hover:text-white transition-all duration-200 gap-2 text-xs font-mono font-medium"
              >
                <FaCloudDownloadAlt size={18} /> Resume
              </a>
            </div>
          </div>
        </div>

        {/* Profile Picture card */}
        <div className="shrink-0 flex justify-center">
          <div className="bg-[#121A2E] w-full md:w-80 transition-all duration-300 rounded-xl shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] overflow-hidden relative border border-[#26314f] hover:border-[#4FD1C5]/40 group flex items-center justify-center p-3">
            <div className="relative w-full h-80 md:h-full min-h-[300px]">
              <Image
                src="/images/my-pic.png"
                alt="Abhishek Singh"
                fill
                className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute top-3 right-3 rounded-full bg-[#121A2E]/80 p-1.5 backdrop-blur-xs text-xl text-cyan-400 shadow-md border border-[#26314f]">
                <MdVerified />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
