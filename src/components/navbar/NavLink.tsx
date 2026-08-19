"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
  href: string;
  icon?: React.ReactNode;
  name?: string;
  endpoint?: string;
  isMobile?: boolean;
}

export default function NavLink({
  href,
  icon,
  name,
  endpoint,
  isMobile = false,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  if (isMobile) {
    return (
      <Link
        href={href}
        className={`relative p-3 rounded-xl transition-all duration-200 text-lg flex items-center justify-center ${
          isActive
            ? "text-[#4FD1C5] bg-[#4FD1C5]/15 shadow-[0_0_15px_rgba(79,209,197,0.25)] border border-[#4FD1C5]/40"
            : "text-[#7C8AA8] hover:text-[#E8ECF4] hover:bg-white/5"
        }`}
        title={name}
      >
        {icon}
        {isActive && (
          <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-[#4FD1C5] shadow-[0_0_6px_#4FD1C5]" />
        )}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`group relative flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-200 border ${
        isActive
          ? "text-[#4FD1C5] font-semibold bg-[#4FD1C5]/10 border-[#4FD1C5]/30 shadow-[0_0_20px_rgba(79,209,197,0.12)]"
          : "text-[#8A9AB8] border-transparent hover:text-white hover:bg-white/5 hover:border-[#26314f]/80"
      }`}
    >
      {/* Left indicator line for active state */}
      {isActive && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r-full bg-[#4FD1C5] shadow-[0_0_8px_#4FD1C5]" />
      )}

      <div className="flex items-center gap-3">
        {icon && (
          <span
            className={`text-lg transition-transform duration-200 ${
              isActive
                ? "text-[#4FD1C5] scale-105"
                : "text-[#7C8AA8] group-hover:text-[#4FD1C5] group-hover:scale-110"
            }`}
          >
            {icon}
          </span>
        )}
        {name && (
          <span className="text-sm font-medium tracking-tight">
            {name}
          </span>
        )}
      </div>

      {/* Endpoint badge */}
      {endpoint && (
        <span
          className={`font-mono text-[10px] uppercase px-1.5 py-0.5 rounded transition-colors ${
            isActive
              ? "bg-[#4FD1C5]/20 text-[#4FD1C5]"
              : "text-[#5C6884] group-hover:text-[#7C8AA8]"
          }`}
        >
          {endpoint}
        </span>
      )}
    </Link>
  );
}
