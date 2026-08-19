import { FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "./Reveal";
import { CERTIFICATIONS } from "@/data/portfolioData";
import { Certification } from "@/types";

const CertificateCard = ({ cert }: { cert: Certification }) => {
  return (
    <div className="h-full flex flex-col justify-between border border-[#26314f]/80 rounded-2xl glass-panel p-5 sm:p-6 hover:-translate-y-1 transition-all duration-300 hover:border-[#4FD1C5]/40 hover:shadow-[0_15px_30px_-10px_rgba(79,209,197,0.15)]">
      <div>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.5)]" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#4FD1C5] font-semibold">
              Verified
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#7C8AA8]">
            {cert.date}
          </span>
        </div>

        <div className="font-mono text-sm text-white font-bold mb-1.5 leading-snug">
          {cert.name}
        </div>
        <p className="text-[#7C8AA8] text-xs mb-4">{cert.issuer}</p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-[#26314f]/70">
        <span className="text-[11px] font-mono text-[#5C6884] truncate max-w-[140px]">
          {cert.credentialId}
        </span>

        <a
          href={cert.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[11px] font-mono text-[#E8ECF4] bg-white/5 px-2.5 py-1 rounded-md border border-[#26314f] hover:border-emerald-400 hover:text-emerald-400 transition-colors shrink-0 font-medium"
        >
          <span>Verify</span>
          <FaExternalLinkAlt size={9} />
        </a>
      </div>
    </div>
  );
};

export default function Certificate() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {CERTIFICATIONS.map((cert) => (
        <Reveal key={cert.name}>
          <CertificateCard cert={cert} />
        </Reveal>
      ))}
    </div>
  );
}