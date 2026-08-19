import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import Connect from "@/components/Connect";
import TopBar from "@/components/TopBar";
import { FaTerminal } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Blog | Abhishek Singh",
  description:
    "Articles and architectural write-ups on backend engineering, FastAPI, distributed caching, and DevOps automation.",
};

const UPCOMING_TOPICS = [
  {
    topic: "Building Multi-Tenant Code Sandbox with Docker & FastAPI",
    category: "System Design",
  },
  {
    topic: "PostgreSQL Index Optimization & Query Profiling in Production",
    category: "Databases",
  },
  {
    topic: "Zero-Downtime Microservice Deployments with Docker & Nginx",
    category: "DevOps",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-[75vh] bg-transparent text-[#E8ECF4] font-sans leading-relaxed">
      <TopBar to="/blog" />

      <div className="max-page-width mx-auto px-4 sm:px-6 py-8">
        {/* <SectionLabel method="GET" statusCode={503} statusText="Under Maintenance">
          /blog
        </SectionLabel> */}

        <section className="flex flex-col items-center justify-center text-center pt-8 sm:pt-12">
          <Reveal>
            <div className="inline-flex p-4 rounded-2xl bg-[#162038] border border-[#26314f] mb-6 shadow-xl text-[#4FD1C5]">
              <FaTerminal size={36} />
            </div>

            <h1 className="font-mono text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Engineering Notes In Progress
            </h1>

            <p className="text-[#94A3B8] text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
              I&apos;m drafting deep dives on backend architecture, asynchronous Python workers, distributed caching with Redis, and container orchestration.
            </p>

            <div className="w-full max-w-lg mx-auto text-left space-y-3 mb-8">
              <span className="font-mono text-xs text-[#7C8AA8] uppercase tracking-wider block pl-1">
                Upcoming Publications:
              </span>
              {UPCOMING_TOPICS.map((item) => (
                <div
                  key={item.topic}
                  className="flex items-center justify-between p-3.5 rounded-xl glass-panel border border-[#26314f]/80"
                >
                  <span className="text-xs sm:text-sm text-[#E8ECF4] font-mono">
                    {item.topic}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#162038] text-[#4FD1C5] border border-[#26314f] shrink-0 ml-3">
                    {item.category}
                  </span>
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 border border-[#F2B84B]/40 rounded-xl px-5 py-2.5 bg-[#F2B84B]/5 text-xs font-mono text-[#F2B84B]">
              <span className="w-2 h-2 rounded-full bg-[#F2B84B] animate-pulse" />
              <span>Target Launch: Q3 2026</span>
            </div>
          </Reveal>
        </section>

        {/* Collab section */}
        <section id="looking-for" className="py-6 mt-14 mb-8">
          <SectionLabel method="POST">/collab</SectionLabel>
          <Reveal>
            <Connect />
          </Reveal>
        </section>
      </div>
    </div>
  );
}