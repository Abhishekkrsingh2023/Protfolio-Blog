"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";

const SOCIAL_LINKS = [
  {
    name: "Github",
    icon: <FaGithubAlt size={18} />,
    link: "https://github.com/Abhishekkrsingh2023",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={18} />,
    link: "https://www.linkedin.com/in/abhishek-kumar-singh-a12590231/",
  },
  {
    name: "Email",
    icon: <MdAttachEmail size={18} />,
    link: "mailto:abhikrsingh.dev@gmail.com",
  },
];

function UptimeBadge() {
  const [uptime, setUptime] = useState("");

  useEffect(() => {
    const update = () => setUptime(new Date().toLocaleTimeString());
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return <span className="text-[#4FD1C5] font-semibold">{uptime || "200 OK"}</span>;
}

export default function Footer() {
  return (
    <footer className="max-page-width mx-auto px-4 sm:px-6 mt-16 pb-8">
      <div className="border-t border-[#26314f]/80 pt-8 pb-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-[#7C8AA8]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>© {new Date().getFullYear()} Abhishek Kumar Singh</span>
          <span className="text-[#3b4866]">•</span>
          <span className="text-[#5C6884]">Engineered for scale</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            {SOCIAL_LINKS.map((link) => (
              <a
                href={link.link}
                key={link.name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="p-2 rounded-lg bg-white/5 border border-[#26314f] text-[#7C8AA8] hover:text-[#4FD1C5] hover:border-[#4FD1C5]/50 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121A2E] border border-[#26314f] text-[11px]">
            <span className="text-[#7C8AA8]">IST:</span>
            <UptimeBadge />
          </div>
        </div>
      </div>
    </footer>
  );
}