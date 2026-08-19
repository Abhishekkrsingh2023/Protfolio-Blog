import Link from "next/link";
import { FaTerminal, FaCodeBranch } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

interface TopBarProps {
  to?: string;
}

export default function TopBar({ to = "" }: TopBarProps) {
  const currentPath = to || "/home";

  return (
    <header className="sticky top-0 z-30 bg-[#0B1120]/75 backdrop-blur-2xl border-b border-[#26314f]/60 transition-all">
      <div className="max-page-width mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between font-mono text-xs">
        {/* Terminal path prompt */}
        <div className="flex items-center gap-2 text-[#7C8AA8] select-none min-w-0">
          <div className="flex items-center justify-center w-6 h-6 rounded-md bg-[#162038] border border-[#26314f] text-[#4FD1C5] shrink-0">
            <FaTerminal size={10} />
          </div>
          <span className="text-[#4FD1C5] font-semibold hidden sm:inline">abhishek@srv:</span>
          <div className="flex items-center gap-1 truncate">
            <span className="text-[#F2B84B]">~</span>
            <span className="text-[#E8ECF4] font-medium">{currentPath}</span>
          </div>
        </div>

        {/* Telemetry metrics & Quick Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
          {/* Branch / Engine info */}
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#121A2E] border border-[#26314f] text-[11px] text-[#7C8AA8]">
            <FaCodeBranch size={10} className="text-[#4FD1C5]" />
            <span className="text-[#E8ECF4] font-medium">main</span>
          </div>

          {/* Live System Status Pill */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">System:</span>
            <span>200 OK</span>
          </div>

          {/* Quick Contact Link */}
          <Link
            href="/contact"
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-[#4FD1C5]/10 border border-[#4FD1C5]/30 text-[#4FD1C5] hover:bg-[#4FD1C5] hover:text-[#0B1120] font-semibold text-[11px] transition-all duration-200"
          >
            <span>/contact</span>
            <HiOutlineExternalLink size={12} />
          </Link>
        </div>
      </div>
    </header>
  );
}