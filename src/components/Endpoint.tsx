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
      className={`glass-panel rounded-2xl mb-5 overflow-hidden transition-all duration-300 hover:border-[#4FD1C5]/40 hover:shadow-[0_15px_35px_-15px_rgba(79,209,197,0.15)] ${className}`}
    >
      <div className="p-6 md:p-7 text-[#94A3B8] text-[14.5px] leading-relaxed">
        {children}
      </div>
    </div>
  );

  if (disableReveal) {
    return content;
  }

  return <Reveal>{content}</Reveal>;
}