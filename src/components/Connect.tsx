import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";

export default function Connect() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#F2B84B]/30 bg-gradient-to-br from-[#F2B84B]/10 via-[#121A2E]/90 to-[#121A2E]/95 p-6 md:p-8 backdrop-blur-md shadow-[0_20px_50px_-20px_rgba(242,184,75,0.15)] group hover:border-[#F2B84B]/50 transition-all duration-300">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F2B84B]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#F2B84B]/15 transition-all" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2B84B]/10 border border-[#F2B84B]/30 text-xs font-mono text-[#F2B84B] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F2B84B] animate-pulse" />
            <span>status: Available for Opportunities & Contracts</span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
            Let&apos;s build robust, scalable backends together.
          </h3>

          <p className="text-[#A5B4D6] text-sm md:text-[15px] max-w-2xl leading-relaxed">
            Specializing in high-performance APIs, asynchronous services with FastAPI & Node.js, and containerized cloud workflows.
          </p>
        </div>

        <Link
          href="/contact"
          className="shrink-0 inline-flex items-center gap-2.5 font-mono text-sm font-semibold bg-[#F2B84B] text-[#0B1120] px-5 py-3 rounded-xl hover:bg-[#ffc95c] hover:shadow-[0_0_25px_rgba(242,184,75,0.4)] transition-all duration-200 cursor-pointer"
        >
          <FaPaperPlane size={13} />
          <span>Start a Conversation</span>
        </Link>
      </div>
    </div>
  );
}