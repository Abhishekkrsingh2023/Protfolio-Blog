import Link from 'next/link'

const TopBar = ({ to }: { to: string }) => {
    return (
        <div className=" bg-[#0B1120]/85 backdrop-blur-md">
            <div className="max-w-[920px] mx-auto px-6 py-3.5 flex items-center justify-between font-mono text-[13px]">
                <div className="text-[#7C8AA8]">
                    ~/<span className="text-[#F2B84B]">abhishek</span>/portfolio{to}
                </div>
                <nav className="flex gap-5">
                    <Link href={`/contact`} className="text-[#7C8AA8] text-[13px] no-underline hover:no-underline hover:text-[#4FD1C5]">
                        contact
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default TopBar