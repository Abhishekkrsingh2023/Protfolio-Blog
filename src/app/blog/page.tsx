"use client";

import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import Connect from "@/components/Connect";

export default function UnderConstructionPage() {
  return (
    <div className="min-h-[60%] bg-[#0B1120] text-[#E8ECF4] font-sans leading-relaxed">
      {/* topbar */}
      {/* <TopBar to="/blog" /> */}

      <div className="max-page-width mx-auto px-6 py-6">
        <SectionLabel method="GET">STATUS / under‑construction</SectionLabel>
        <section className="flex flex-col items-center justify-center text-center pt-10 md:pt-22">
          <Reveal>
            <div className="text-6xl md:text-8xl mb-6 flex justify-center gap-4">
              <span>⚙️</span>
            </div>
            <h1 className="font-mono text-2xl md:text-4xl font-semibold tracking-tight text-[#E8ECF4] mb-4">
              This page is being built
            </h1>
            <p className="text-[#7C8AA8] text-sm md:text-lg max-w-prose mx-auto">
              I’m currently working on something interesting here. <br />
              Check back soon — or follow my progress on{" "}
              <a
                href="#"
                className="text-[#4FD1C5] hover:underline underline-offset-2"
              >
                GitHub
              </a>
              .
            </p>
            <div className="mt-8 inline-block border border-[#F2B84B]/40 rounded-lg px-6 py-3 bg-[#F2B84B]/5">
              <span className="font-mono text-sm text-[#F2B84B]">
                ⏳ estimated completion: soon
              </span>
            </div>
          </Reveal>
        </section>

        {/* looking for */}
        <section id="looking-for" className="py-6 mt-16">
          <SectionLabel method="POST"> /collab</SectionLabel>
          <Reveal>
            <Connect />
          </Reveal>
        </section>

      </div>
    </div>
  );
}