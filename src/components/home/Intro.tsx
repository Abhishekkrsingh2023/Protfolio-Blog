import { MdWorkHistory } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Link from "next/link";


const Intro = ({ typed, showYaml }: { typed: string; showYaml: boolean }) => {
    return (
        <div className="bg-[#121A2E] border border-[#26314f] rounded-[10px] overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-2 px-3.5 py-2.5 bg-[#172140] border-b border-[#26314f]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5657A]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F2B84B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#4FD1C5]" />
                <span className="ml-2 font-mono text-xs text-[#7C8AA8]">abhishek@backend — zsh</span>
            </div>
            <div className="px-6 pt-[22px] pb-4 font-mono text-sm">
                <span className="text-[#7C8AA8]">$ </span>
                <span>{typed}</span>
                <span className="inline-block w-2 h-4 bg-[#F2B84B] align-middle ml-0.5 animate-[blink_1s_step-end_infinite] motion-reduce:animate-none" />
                <div
                    className={`mt-3.5 whitespace-pre-wrap transition-all duration-500 ease-out ${showYaml ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1.5"
                        }`}
                >
                    <span className="text-[#4FD1C5]">name</span>: <span className="text-[#ae2fce] uppercase">Abhishek Kumar Singh</span>{"\n"}
                    <span className="text-[#4FD1C5]">role</span>: Python & Nodejs / DevOps Enthusiast{"\n"}
                    <span className="text-[#4FD1C5]">location</span>: Kolkata, India{"\n"}
                    <span className="text-[#4FD1C5]">focus</span>: Full-Stack · DevOps · AI{"\n"}
                    <span className="text-[#4FD1C5]">interests</span>: Backend · DevOps · Automation{"\n"}
                    <span className="text-[#4FD1C5]">databases</span>: RDBMS · ORM design · Schema migrations{"\n"}
                    <span className="text-[#4FD1C5]">looking_for</span>: Collabs on Python, React, & Node.js projects
                    <br />


                </div>
                <div className="flex gap-4 mt-6">
                    <Link href="/projects"
                        className="flex items-center justify-center text-[#4FD1C5] bg-cyan-500/8 group p-2 rounded-lg border border-cyan-600/10 hover:bg-cyan-500/15 hover:text-orange-400 min-w-36 hover:cursor-pointer
                            hover:scale-[1.02] duration-200 gap-1.5
                            ">
                        <MdWorkHistory size={18} /> view my work
                    </Link>

                    <Link
                        href="/Resume.pdf"
                        download="Abhishek_Kumar_Singh_Resume.pdf"
                        className="flex items-center justify-center text-[#4FD1C5] bg-cyan-500/8 group p-2 rounded-lg border border-cyan-600/10 hover:bg-cyan-500/15 hover:text-orange-400 min-w-36 hover:cursor-pointer
                            hover:scale-[1.02] duration-200 gap-1.5">
                        <FaCloudDownloadAlt size={18} /> Resume
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Intro