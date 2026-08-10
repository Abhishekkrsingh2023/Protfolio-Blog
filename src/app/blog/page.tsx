import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import Connect from "@/components/Connect";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read my latest articles and updates on backend development, DevOps, system design, and technology trends.",
};

export default function BlogPage() {
  return (
    <div className="min-h-[70vh] bg-[#0B1120] text-[#E8ECF4] font-sans leading-relaxed">
      <div className="max-page-width mx-auto px-6 py-8">
        <SectionLabel method="GET">STATUS / under‑construction</SectionLabel>

        <section className="flex flex-col items-center justify-center text-center pt-10 md:pt-16">
          <Reveal>
            <div className="text-6xl md:text-7xl mb-6">
              <span>⚙️</span>
            </div>
            <h1 className="font-mono text-2xl md:text-4xl font-semibold tracking-tight text-[#E8ECF4] mb-4">
              Blog Posts Coming Soon
            </h1>
            <p className="text-[#7C8AA8] text-sm md:text-base max-w-prose mx-auto leading-relaxed">
              I&apos;m currently writing articles on Python, FastAPI, Docker, and DevOps automation. <br className="hidden md:inline" />
              Check back soon or follow my latest updates on{" "}
              <a
                href="https://github.com/Abhishekkrsingh2023"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4FD1C5] hover:underline underline-offset-2"
              >
                GitHub
              </a>
              .
            </p>
            <div className="mt-8 inline-block border border-[#F2B84B]/40 rounded-xl px-6 py-3 bg-[#F2B84B]/5">
              <span className="font-mono text-sm text-[#F2B84B]">
                ⏳ estimated publication: Q3 2026
              </span>
            </div>
          </Reveal>
        </section>

        {/* Collab section */}
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