"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";

const getSocialLinks = () => {
    return [
        {
            name: "Github",
            icon: <FaGithubAlt size={20} />,
            link: "https://github.com/Abhishekkrsingh2023"
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin size={20} />,
            link: "https://www.linkedin.com/in/abhishek-kumar-singh-a12590231/"
        },
        {
            name: "Email",
            icon: <MdAttachEmail size={20} />,
            link: "mailto:abhikrsingh.dev@gmail.com"
        }
    ]
}

const Footer = () => {
    const [uptime, setUptime] = useState("");

    useEffect(() => {
        const update = () => {
            setUptime(new Date().toLocaleString());
        };

        update();

        const id = setInterval(update, 1000);

        return () => clearInterval(id);
    }, []);
    return (
        <div className="max-page-width mx-auto px-6 mt-10">
            {/* socials */}
            <div className="flex flex-col items-center gap-3 border-t border-[#26314f] pt-4 pb-6">
                <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-[#7C8AA8]">
                    Connect
                </span>
                <div className="flex gap-2">
                    {getSocialLinks().map((link, index) => (
                        <Link href={link.link} key={index} target="_blank" rel="noopener noreferrer">
                            <div className="p-2.5 rounded-lg bg-white/4 border border-[#26314f] text-[#7C8AA8] hover:text-[#4FD1C5] hover:border-[#4FD1C5]/40 transition-colors duration-150">
                                {link.icon}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <footer className="py-[10px] text-[#7C8AA8] font-mono text-xs flex justify-between flex-wrap gap-2">
                <span>© {new Date().getFullYear()} Abhishek Kumar Singh</span>
                <span>status: <span className="text-[#4FD1C5]">200 OK</span> · uptime: <span className="text-[#E8ECF4]">{uptime}</span></span>
            </footer>
        </div>
    )
}

export default Footer