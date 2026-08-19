"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { IoHomeOutline } from "react-icons/io5";
import { BsTerminal, BsCodeSquare } from "react-icons/bs";
import { RiArticleLine, RiSendPlaneLine } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import NavLink from "./NavLink";

const NAV_LINKS = [
  { name: "Home", icon: <IoHomeOutline />, link: "/", endpoint: "GET /" },
  { name: "About", icon: <BsTerminal />, link: "/about", endpoint: "GET" },
  { name: "Projects", icon: <BsCodeSquare />, link: "/projects", endpoint: "GET" },
  { name: "Blog", icon: <RiArticleLine />, link: "/blog", endpoint: "GET" },
  { name: "Contact", icon: <RiSendPlaneLine />, link: "/contact", endpoint: "POST" },
];

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: <FaGithub size={17} />,
    link: "https://github.com/Abhishekkrsingh2023",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={17} />,
    link: "https://www.linkedin.com/in/abhishek-kumar-singh-a12590231/",
  },
  {
    name: "Email",
    icon: <MdOutlineEmail size={17} />,
    link: "mailto:abhikrsingh.dev@gmail.com",
  },
];

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-transparent">
      {/* Desktop Sidebar Navbar */}
      <aside className="hidden md:flex flex-col w-64 h-screen sticky top-0 bg-[#0e1628]/90 backdrop-blur-2xl border-r border-[#26314f]/80 z-40 shrink-0 shadow-2xl">
        {/* Brand / Profile Card Header */}
        <Link
          href="/"
          className="p-5 border-b border-[#26314f]/80 group block transition-all hover:bg-white/[0.02]"
        >
          <div className="flex items-center gap-3.5">
            <div className="relative">
              <Image
                src="/images/abhi-logo.jpg"
                alt="Abhishek Singh"
                width={46}
                height={46}
                className="object-cover rounded-xl ring-1 ring-[#26314f] group-hover:ring-[#4FD1C5]/60 transition-all duration-300 shadow-md"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-[#0e1628] animate-pulse" />
            </div>

            <div className="flex flex-col min-w-0">
              <h1 className="text-sm font-bold text-white tracking-tight group-hover:text-[#4FD1C5] transition-colors truncate">
                Abhishek Singh
              </h1>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4FD1C5]" />
                <span className="font-mono text-[11px] text-[#7C8AA8] truncate">
                  Backend Engineer
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Navigation items */}
        <nav className="flex-1 px-3 py-6 overflow-y-auto">
          <div className="flex items-center justify-between px-3 mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#5C6884]">
            <span>Navigation</span>
            <span>API Routes</span>
          </div>
          <ul className="flex flex-col gap-1.5">
            {NAV_LINKS.map((item) => (
              <li key={item.link}>
                <NavLink
                  href={item.link}
                  icon={item.icon}
                  name={item.name}
                  endpoint={item.endpoint}
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* System telemetry & Socials */}
        <div className="p-4 border-t border-[#26314f]/80 bg-[#0a1020]/60 space-y-3.5">
          <div className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-[#121A2E]/80 border border-[#26314f]/60 font-mono text-[11px] text-[#7C8AA8]">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              IN-CCU Node
            </span>
            <span className="text-[#4FD1C5]">v2.4.0</span>
          </div>

          <div className="flex items-center justify-between px-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#5C6884]">
              Connect
            </span>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((item) => (
                <a
                  href={item.link}
                  key={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="p-2 rounded-lg bg-white/5 border border-[#26314f] text-[#7C8AA8] hover:text-[#4FD1C5] hover:border-[#4FD1C5]/50 hover:bg-[#4FD1C5]/10 transition-all duration-200"
                  title={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Floating Island Dock */}
      <nav className="md:hidden fixed bottom-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <ul className="pointer-events-auto flex justify-around items-center w-full max-w-sm bg-[#0e1628]/90 backdrop-blur-2xl border border-[#26314f] rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.85)] ring-1 ring-white/5">
          {NAV_LINKS.map((item) => (
            <li key={item.link}>
              <NavLink
                href={item.link}
                icon={item.icon}
                name={item.name}
                isMobile
              />
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 overflow-y-auto text-[#E8ECF4] pb-24 md:pb-4">
        {children}
      </div>
    </div>
  );
}