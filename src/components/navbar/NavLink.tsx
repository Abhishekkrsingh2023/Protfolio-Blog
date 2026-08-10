"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
  href: string;
  icon?: React.ReactNode;
  name?: string;
  isMobile?: boolean;
}

export default function NavLink({ href, icon, name, isMobile = false }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  if (isMobile) {
    return (
      <Link
        href={href}
        className={`p-2.5 rounded-xl transition-all duration-150 text-xl flex items-center justify-center ${
          isActive
            ? "text-[#4FD1C5] bg-[#4FD1C5]/10 border border-[#4FD1C5]/30 shadow-[0_0_12px_rgba(79,209,197,0.2)]"
            : "text-[#7C8AA8] hover:text-[#E8ECF4] hover:bg-white/5"
        }`}
        title={name}
      >
        {icon}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`group flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all duration-150 border ${
        isActive
          ? "text-[#4FD1C5] font-semibold bg-[#4FD1C5]/10 border-[#4FD1C5]/30 shadow-[0_0_15px_rgba(79,209,197,0.1)]"
          : "text-[#7C8AA8] border-transparent hover:text-[#E8ECF4] hover:bg-white/5 hover:border-white/10"
      }`}
    >
      {icon && <span className="text-[17px] group-hover:scale-110 transition-transform duration-150">{icon}</span>}
      {name && <span className="text-sm font-medium">{name}</span>}
    </Link>
  );
}
