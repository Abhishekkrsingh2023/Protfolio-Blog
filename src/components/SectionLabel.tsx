

const SectionLabel = ({ method, children }: { method?: string; children: React.ReactNode }) => {
    return (
        <div className="font-mono text-xs text-[#7C8AA8] tracking-[0.06em] uppercase mb-4.5 flex items-center gap-2.5">
            {method === "GET" && <span className="text-[#4FD1C5]">{method} </span>}
            {method === "POST" && <span className="text-[#36c766]">{method} </span>}
            {children}
            <span className="flex-1 h-px bg-[#26314f]" />
            {method === "GET" && <span>200 <span className="text-[#4FD1C5]">Ok</span></span>}
            {method === "POST" && <span>201 <span className="text-[#36c766]">Created</span></span>}
        </div>
    );
}

export default SectionLabel