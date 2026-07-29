"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { MdVerified, MdOutlineReadMore } from "react-icons/md";

import TechStack from "@/components/TechStack";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import Intro from "@/components/home/Intro";
import TopBar from "@/components/TopBar";
import TechStackFloat from "@/components/TechStackFloating";


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
      <TopBar to="" />

      <div className="max-w-[920px] mx-auto px-6">
        {/* hero terminal */}
        <div className="py-10 pb-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* intro section  */}
            <Intro typed={typed} showYaml={showYaml} />
            {/* image section */}
            <div className="bg-[#121A2E] w-88 md:w-86 transition-all duration-300 ease-in-out rounded-xl shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] overflow-hidden relative border border-[#26314f]">
              <Image src="/images/my-pic.png" alt="Abhishek Singh" width={330} height={330} />
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
            <div className="flex mt-4">
              <Link href="/about"
                className="flex items-center justify-center text-[#4FD1C5] bg-cyan-500/8 group p-2 rounded-lg border border-cyan-600/10 hover:bg-cyan-500/15 hover:text-orange-400 min-w-36 hover:cursor-pointer
                            hover:scale-[1.02] duration-200 gap-1.5
                            ">
                <MdOutlineReadMore size={18} /> know more
              </Link>
            </div>
          </Endpoint>
        </section>

        {/* stack */}
        <section id="stack" className="py-9">
          <SectionLabel method="GET"> <span>/stack?<span className="text-orange-400 space-x-0">learning=endless</span></span></SectionLabel>
          {/* <Endpoint>
            <TechStack />
          </Endpoint> */}
          <TechStackFloat />
        </section>

        {/* focus */}
        <section id="focus" className="py-9">
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
              frameworks, and tools beyond my current stack. Whether it's improving existing systems,
              experimenting with emerging ideas, or diving into areas like Agentic AI, I enjoy the
              process of learning, building, and staying close to the future of technology.
            </p>
          </Endpoint>
        </section>

        {/* looking for */}
        <section id="looking-for" className="py-9">
          <SectionLabel method="POST"> /collab</SectionLabel>
          <Reveal>
            <div className="border border-[#F2B84B] rounded-lg px-[22px] py-5 bg-linear-to-b from-[#F2B84B]/6 to-transparent">
              <div className="font-mono text-xs text-[#F2B84B] mb-2">status: open</div>
              <p className="text-[#E8ECF4] text-[15px]">
                Looking for collaborators on FastAPI, React, Dockerized, and Node.js projects. If that
                overlaps with what you&apos;re building, send a request.
              </p>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}