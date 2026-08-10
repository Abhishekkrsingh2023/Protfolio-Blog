import React from "react";
import Reveal from "./Reveal";

interface EndpointProps {
  children: React.ReactNode;
  className?: string;
  disableReveal?: boolean;
}

export default function Endpoint({
  children,
  className = "",
  disableReveal = false,
}: EndpointProps) {
  const content = (
    <div
      className={`border border-[#26314f] rounded-xl bg-[#121A2E] mb-4 overflow-hidden transition-all duration-200 hover:scale-[1.01] hover:border-[#4FD1C5]/30 hover:shadow-[0_20px_50px_-30px_rgba(79,209,197,0.15)] ${className}`}
    >
      <div className="p-5 md:p-6 text-[#7C8AA8] text-[14.5px] leading-relaxed">
        {children}
      </div>
    </div>
  );

  if (disableReveal) {
    return content;
  }

  return <Reveal>{content}</Reveal>;
}