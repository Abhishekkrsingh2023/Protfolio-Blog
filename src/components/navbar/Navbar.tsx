"use client";

import React from "react"
import Image from "next/image"
import Link from "next/link"

import logo from "@/app/abhi-logo.jpg"

import { IoHome } from "react-icons/io5";
import { BsInfoSquare } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { FaDiagramProject } from "react-icons/fa6";
import { LiaNewspaperSolid } from "react-icons/lia";

import NavLink from "./NavLink";

import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const getLinks = () => {
    return [
        {
            name: "Home",
            icon: <IoHome />,
            link: "/"
        },
        {
            name: "About",
            icon: <BsInfoSquare />,
            link: "/about"
        },
        {
            name: "Projects",
            icon: <FaDiagramProject />,
            link: "/projects"
        },
        {
            name: "Blog",
            icon: <LiaNewspaperSolid />,
            link: "/blog"
        },

        {
            name: "Contact",
            icon: <RiContactsLine />,
            link: "/contact"
        },
    ]
}


const getSocialLinks = () => {
    return [
        {
            name: "Github",
            icon: <FaGithubAlt size={18} />,
            link: "https://github.com/Abhishekkrsingh2023"
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin size={18} />,
            link: "https://www.linkedin.com/in/abhishek-kumar-singh-a12590231/"
        },
        {
            name: "Email",
            icon: <MdAttachEmail size={18} />,
            link: "mailto:abhikrsingh.dev@gmail.com"
        }
    ]
}

const Navbar = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen bg-[#0B1120]">
            {/* larger screen navbar */}
            <nav className="hidden md:flex flex-col w-64 h-screen sticky top-0 bg-[#121A2E] border-r border-[#26314f]">
                <Link href="/" className="border-b border-[#26314f]">
                    <div className="flex items-center gap-3 px-6 py-5">
                        <div className="relative">
                            <Image
                                src="/images/abhi-logo.jpg"
                                alt="logo"
                                width={48}
                                height={48}
                                className="object-cover rounded-xl ring-1 ring-[#26314f]"
                            />
                            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#4FD1C5] ring-2 ring-[#121A2E]" />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-[15px] font-semibold text-[#E8ECF4] tracking-tight">
                                Abhishek Singh
                            </h1>
                            <span className="font-mono text-[11px] text-[#7C8AA8]">
                                ~/python-developer
                            </span>
                        </div>
                    </div>
                </Link>

                <div className="flex-1 px-4 py-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7C8AA8] pl-3">
                        Navigate
                    </span>
                    <ul className="flex flex-col gap-1 mt-3">
                        {getLinks().map((link, index) => (
                            <NavLink href={link.link} key={index}>
                                <li className="group flex items-center gap-3 pl-3 pr-4 py-2.5 rounded-lg cursor-pointer hover:text-orange-500 transition-colors duration-150">
                                    <span className="text-[17px]">
                                        {link.icon}
                                    </span>
                                    <span className="text-sm font-medium">{link.name}</span>
                                </li>
                            </NavLink>
                        ))}
                    </ul>
                </div>
                <div>
                    {/* <TerminalDemo /> */}
                </div>
                {/* socials */}
                <div className="flex flex-col items-center gap-3 border-t border-[#26314f] pt-4 pb-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7C8AA8]">
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
            </nav>

            {/* small screen navbar */}
            <nav className="md:hidden fixed bottom-3 inset-x-0 z-50 flex justify-center px-4">
                <ul className="flex justify-evenly items-center w-full max-w-sm bg-[#121A2E]/90 backdrop-blur-md border border-[#26314f] rounded-2xl p-1 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]">
                    {getLinks().map((link, index) => (
                        <NavLink href={link.link} key={index}>
                            <li className="py-2 rounded-xl text-[#7C8AA8] transition-colors duration-150 text-xl">
                                {link.icon}
                            </li>
                        </NavLink>
                    ))}
                </ul>
            </nav>

            {/* main content */}
            <div className="flex-1 overflow-y-auto text-[#E8ECF4] pb-20 md:pb-4">
                {children}
            </div>
        </div>
    )
}

export default Navbar