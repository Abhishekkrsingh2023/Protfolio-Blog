"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { MdVerified } from "react-icons/md";

import myImage from "@/app/my-pic.png";

import TechStack from "@/components/TechStack";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";


function Endpoint({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Reveal>
      <div className="border border-[#26314f] rounded-lg bg-[#121A2E] mb-3.5 overflow-hidden">
        <div className="flex items-center gap-3 px-[18px] py-3.5 font-mono text-[13.5px]">
        </div>
        <div className="px-[18px] pb-[18px] text-[#7C8AA8] text-[14.5px]">{children}</div>
      </div>
    </Reveal>
  );
}



export default function Portfolio() {
  const [typed, setTyped] = useState("");
  const [showYaml, setShowYaml] = useState(false);
  const command = "whoami --verbose";

  const [uptime, setUptime] = useState("");

  useEffect(() => {
    const update = () => {
      setUptime(new Date().toLocaleString());
    };

    update();

    const id = setInterval(update, 1000);

    return () => clearInterval(id);
  }, []);

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
        setTimeout(() => setShowYaml(true), 300);
      }
    }, 55);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1120] text-[#E8ECF4] font-sans leading-relaxed">
      {/* topbar */}
      <div className="sticky top-0 z-50 bg-[#0B1120]/85 backdrop-blur-md">
        <div className="max-w-[920px] mx-auto px-6 py-3.5 flex items-center justify-between font-mono text-[13px]">
          <div className="text-[#7C8AA8]">
            ~/<span className="text-[#F2B84B]">abhishek</span>/portfolio
          </div>
          <nav className="flex gap-5">
            {["contact"].map((id) => (
              <Link key={id} href={`/contact`} className="text-[#7C8AA8] text-[13px] no-underline hover:no-underline hover:text-[#4FD1C5]">
                {id}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-[920px] mx-auto px-6">
        {/* hero terminal */}
        <div className="py-10 pb-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-[#121A2E] border border-[#26314f] rounded-[10px] overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-2 px-3.5 py-2.5 bg-[#172140] border-b border-[#26314f]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5657A]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F2B84B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#4FD1C5]" />
                <span className="ml-2 font-mono text-xs text-[#7C8AA8]">abhishek@backend — zsh</span>
              </div>
              <div className="px-6 pt-[22px] pb-7 font-mono text-sm">
                <span className="text-[#7C8AA8]">$ </span>
                <span>{typed}</span>
                <span className="inline-block w-2 h-4 bg-[#F2B84B] align-middle ml-0.5 animate-[blink_1s_step-end_infinite] motion-reduce:animate-none" />
                <div
                  className={`mt-3.5 min-h-48 whitespace-pre-wrap transition-all duration-500 ease-out ${showYaml ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1.5"
                    }`}
                >
                  <span className="text-[#4FD1C5]">name</span>: <span className="text-[#8036bd]">Abhishek Kumar Singh</span>{"\n"}
                  <span className="text-[#4FD1C5]">role</span>: Python & Nodejs / DevOps Enthusiast{"\n"}
                  <span className="text-[#4FD1C5]">location</span>: Kolkata, India{"\n"}
                  <span className="text-[#4FD1C5]">focus</span>: Full-Stack · DevOps · AI{"\n"}
                  <span className="text-[#4FD1C5]">interests</span>: Backend · DevOps · Automation{"\n"}
                  <span className="text-[#4FD1C5]">databases</span>: RDBMS · ORM design · Schema migrations{"\n"}
                  <span className="text-[#4FD1C5]">looking_for</span>: Collabs on FastAPI, React, & Node.js projects
                  <br />
                </div>
              </div>
            </div>
            <div className="bg-[#121A2E] w-85 md:w-80 transition-all duration-300 ease-in-out rounded-xl shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] overflow-hidden relative border border-[#26314f]">
              <Image src={myImage} alt="Abhishek Singh" width={314} />
              {/* ✅ Blue Verified Badge */}
              <div className="absolute top-1 right-1 rounded-full flex items-center justify-center shadow-lg text-xl text-cyan-500">
                <MdVerified />
              </div>
            </div>
          </div>
        </div>

        {/* about */}
        <section id="about" className="py-9">
          <SectionLabel method="GET"> /about</SectionLabel>
          <Endpoint >
            <p>
              I'm a DevOps Enthusiast-focused full-stack engineer based in Kolkata, India. I primarily
              build and work on APIs and backend services using
              <span className="text-[#4FD1C5] font-medium"> Python</span>,
              <span className="text-[#4FD1C5] font-medium"> FastAPI</span>,
              <span className="text-[#4FD1C5] font-medium"> Node.js</span>,
              <span className="text-[#4FD1C5] font-medium"> Express</span>,
              <span className="text-[#4FD1C5] font-medium"> PostgreSQL</span>, and
              <span className="text-[#4FD1C5] font-medium"> Redis</span>. I enjoy designing
              clean architectures, predictable data models, and backend systems that are
              maintainable, efficient, and reliable.
            </p>
            <br />
            <p>
              Beyond application development, I'm passionate about backend infrastructure
              and system design. I regularly work with Docker, Git, Linux, and message
              queues while exploring distributed systems and cloud-native technologies
              through hands-on projects.
            </p>
          </Endpoint>
        </section>

        {/* stack */}
        <section id="stack" className="py-9">
          <SectionLabel method="GET"> <span>/stack?<span className="text-orange-300 space-x-0">learning=continuous</span></span></SectionLabel>
          <Endpoint>
            <p></p>
            <br />
            <TechStack />
          </Endpoint>
        </section>

        {/* focus */}
        <section id="focus" className="py-9">
          <SectionLabel method="GET"> /focus</SectionLabel>
          <Endpoint>
            <p>
              Backend engineering, system design, and automation — the layer of a product most people
              never see, and the layer where most of the actual engineering happens.
            </p>
          </Endpoint>
        </section>

        {/* looking for */}
        <section id="looking-for" className="py-9">
          <SectionLabel method="POST"> /collab</SectionLabel>
          <Reveal>
            <div className="border border-[#F2B84B] rounded-lg px-[22px] py-5 bg-gradient-to-b from-[#F2B84B]/[0.06] to-transparent">
              <div className="font-mono text-xs text-[#F2B84B] mb-2">status: open</div>
              <p className="text-[#E8ECF4] text-[15px]">
                Looking for collaborators on FastAPI, React, Dockerized, and Node.js projects. If that
                overlaps with what you&apos;re building, send a request.
              </p>
            </div>
          </Reveal>
        </section>

        {/* contact */}
        <section id="contact" className="py-9">
          <SectionLabel method="GET"> /connect</SectionLabel>
          <Reveal>
            <p className="text-[#7C8AA8] text-[14.5px]">
              Reachable me through the usual channels.
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              {[
                { label: "email", href: "mailto:abhikrsingh.dev@gmail.com" },
                { label: "github", href: "https://github.com/Abhishekkrsingh2023" },
                { label: "linkedin", href: "https://www.linkedin.com/in/abhishek-kumar-singh-a12590231/" },
              ].map((c) => (
                <Link
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[13px] border border-[#26314f] rounded-md px-3.5 py-2.5 text-[#E8ECF4] no-underline hover:no-underline hover:border-[#4FD1C5] hover:text-[#4FD1C5]"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </section>

        <footer className="py-[10px] text-[#7C8AA8] font-mono text-xs flex justify-between flex-wrap gap-2">
          <span>© 2026 Abhishek Kumar Singh</span>
          <span>status: <span className="text-[#4FD1C5]">200 OK</span> · uptime: <span className="text-[#E8ECF4]">{uptime}</span></span>
        </footer>
      </div>
    </div>
  );
}