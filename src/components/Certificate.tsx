import { FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "./Reveal";
import { CERTIFICATIONS } from "@/data/portfolioData";
import { Certification } from "@/types";

const CertificateCard = ({ cert }: { cert: Certification }) => {
  return (
    <div className="h-full flex flex-col justify-between border border-[#26314f] rounded-xl bg-[#121A2E] p-5 hover:scale-[1.02] transition-transform duration-200 hover:border-[#4FD1C5]/30 hover:shadow-[0_20px_40px_-30px_rgba(79,209,197,0.15)]">
      <div>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.5)]" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#7C8AA8]">
              Verified
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#7C8AA8]">
            {cert.date}
          </span>
        </div>

        <div className="font-mono text-sm text-gray-200 font-semibold mb-1 leading-snug">
          {cert.name}
        </div>
        <p className="text-slate-400 text-xs mb-4">{cert.issuer}</p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-[#26314f]">
        <span className="text-[11px] font-mono text-[#5C6884] truncate max-w-[150px]">
          {cert.credentialId}
        </span>

        <a
          href={cert.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[11px] font-mono text-[#E8ECF4] hover:text-emerald-400 transition-colors shrink-0"
        >
          Verify
          <FaExternalLinkAlt size={10} />
        </a>
      </div>
    </div>
  );
};

export default function Certificate() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {CERTIFICATIONS.map((cert) => (
        <Reveal key={cert.name}>
          <CertificateCard cert={cert} />
        </Reveal>
      ))}
    </div>
  );
}