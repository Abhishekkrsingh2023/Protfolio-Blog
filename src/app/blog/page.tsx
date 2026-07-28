"use client";
import React from "react";


function Reveal({ children }: { children: React.ReactNode }) {
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-xs text-[#7C8AA8] tracking-[0.06em] uppercase mb-[18px] flex items-center gap-2.5">
      {children}
      <span className="flex-1 h-px bg-[#26314f]" />
    </div>
  );
}

export default function UnderConstructionPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-[#E8ECF4] font-sans flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <SectionLabel>STATUS / under‑construction</SectionLabel>

        <Reveal>
          <div className="text-7xl md:text-8xl mb-6 flex justify-center gap-4">
            <span>⚙️</span>
          </div>
          <h1 className="font-mono text-3xl md:text-4xl font-semibold tracking-tight text-[#E8ECF4] mb-4">
            This page is being built
          </h1>
          <p className="text-[#7C8AA8] text-base md:text-lg max-w-prose mx-auto">
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
      </div>
    </div>
  );
}