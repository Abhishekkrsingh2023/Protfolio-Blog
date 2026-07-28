
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
    const pathname = usePathname();
    const active = pathname === href;

    return (
        <Link
            href={href}
            style={{ textDecoration: "none" }}
            className={`px-4 py-2 ${active
                ? "text-cyan-500 font-semibold bg-[#4FD1C5]/10 rounded-lg border border-[#4FD1C5]/20"
                : "text-[#7C8AA8] hover:text-[#F2B84B] hover:bg-[#4FD1C5]/10 rounded-lg"
                }`}
        >
            {children}
        </Link>
    );
}