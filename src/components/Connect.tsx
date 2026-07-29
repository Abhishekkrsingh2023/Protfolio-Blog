import Link from "next/link";

const Connect = () => {
    return (
        <div className="border border-[#F2B84B]/20 rounded-lg px-6 py-5 
            bg-linear-to-b from-[#F2B84B]/6 to-transparent">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1">
                    <h1 className="font-mono text-xs text-[#F2B84B] mb-2">
                        status: Open for Intership & Collaboration
                    </h1>
                    <p className="text-[#E8ECF4] text-[15px] max-w-150">
                        Python, FastAPI, Node.js, React, Next.js and Dockerized services — if you're
                        building in that space, reach out.
                    </p>
                </div>
                <Link
                    href="/contact"
                    className="font-mono text-[13px] border border-[#F2B84B]/20 rounded-md px-3.5 py-2.5 text-[#F2B84B] no-underline hover:no-underline hover:bg-[#F2B84B]/70 hover:text-[#121A2E] duration-200"
                >
                    Connect with me
                </Link>
            </div>
        </div>
    )
}

export default Connect