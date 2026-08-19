import React from "react";

interface SectionLabelProps {
  method?: "GET" | "POST" | "PUT" | "DELETE" | string;
  children: React.ReactNode;
  statusText?: string;
  statusCode?: number | string;
}

export default function SectionLabel({
  method = "GET",
  children,
  statusText,
  statusCode,
}: SectionLabelProps) {
  const isPost = method === "POST";
  const isGet = method === "GET";

  const defaultCode = isPost ? 201 : 200;
  const defaultStatus = isPost ? "Created" : "OK";

  const displayCode = statusCode ?? defaultCode;
  const displayStatus = statusText ?? defaultStatus;

  return (
    <div className="font-mono text-xs text-[#7C8AA8] tracking-wider mb-5 flex items-center gap-2.5 select-none">
      {/* HTTP Method Badge */}
      <span
        className={`px-2 py-0.5 rounded-md font-semibold text-[11px] uppercase tracking-wider ${
          isGet
            ? "bg-[#4FD1C5]/10 text-[#4FD1C5] border border-[#4FD1C5]/30 shadow-[0_0_10px_rgba(79,209,197,0.15)]"
            : isPost
            ? "bg-[#36c766]/10 text-[#36c766] border border-[#36c766]/30 shadow-[0_0_10px_rgba(54,199,102,0.15)]"
            : "bg-[#F2B84B]/10 text-[#F2B84B] border border-[#F2B84B]/30"
        }`}
      >
        {method}
      </span>

      {/* Endpoint Path Title */}
      <span className="text-[#E8ECF4] font-medium tracking-normal text-sm">
        {children}
      </span>

      {/* Modern dashed / glowing line divider */}
      <span className="flex-1 h-px bg-gradient-to-r from-[#26314f] via-[#26314f]/80 to-transparent" />

      {/* HTTP Status Code Pill */}
      <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#121A2E] border border-[#26314f] text-[11px]">
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            isGet ? "bg-[#4FD1C5]" : "bg-[#36c766]"
          } animate-pulse`}
        />
        <span className="text-[#7C8AA8]">{displayCode}</span>
        <span className={isGet ? "text-[#4FD1C5]" : "text-[#36c766]"}>
          {displayStatus}
        </span>
      </div>
    </div>
  );
}