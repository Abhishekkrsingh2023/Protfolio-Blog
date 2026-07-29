import { FaExternalLinkAlt } from "react-icons/fa"
import Reveal from "./Reveal";
import Link from "next/link";

const CERTIFICATIONS = [
  {
    name: "SQL and Relational Databases 101",
    issuer: "IBM SkillsBuild",
    date: "Jun 2026",
    credentialId: "b440759b2d854790a22774bf3b876fd2",
    verifyUrl: "https://skillsbuild.org/",
  },
  {
    name: "FastAPI: The Complete Guide",
    issuer: "FastAPI by Tiangolo",
    date: "Jun 2026",
    credentialId: "self-learned",
    verifyUrl: "https://fastapi.tiangolo.com/learn/",
  },
  {
    name: "Object Oriented Programming using Python",
    issuer: "Infosys Springboard",
    date: "Apr 2026",
    credentialId: "6065a951-e4cc-4c6f-b4ed-540567ad7dc4",
    verifyUrl: "https://verify.onwingspan.com/",
  },
  {
    name: "Introduction to Programming Using Python",
    issuer: "Infosys Springboard",
    date: "May 2024",
    credentialId: "1-b5a32942-85ff-4c4e-8c77-a57a2735f577",
    verifyUrl: "https://verify.onwingspan.com/",
  },
  {
    name: "Nginx - Website Development",
    issuer: "Infosys Springboard",
    date: "Mar 2026",
    credentialId: "8423ce5a-e8e2-4a97-bd03-239dda4b87e4",
    verifyUrl: "https://verify.onwingspan.com/",
  },
  {
    name: "NextJS - Website Development",
    issuer: "NextJS by Vercel",
    date: "July 2026",
    credentialId: "self-learned",
    verifyUrl: "https://nextjs.org/docs",
  },
];

function Card({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-full flex flex-col border border-[#26314f] rounded-lg bg-[#121A2E] p-4 md:p-6 hover:scale-[1.02] transition-transform duration-200 hover:shadow-[0_30px_60px_-40px_rgba(34,211,238,0.2)]">
      {children}
    </div>
  );
}

const CertificateCard = ({ cert }: { cert: any }) => {
    return (
        <>
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

            <div className="font-mono text-[13px] text-gray-200 font-semibold mb-1 leading-snug">
                {cert.name}
            </div>
            <div className="flex-1">
                <p className="text-slate-400 text-sm mb-3">{cert.issuer}</p>
                <span>{cert?.icon}</span>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="text-[11px] font-mono text-[#5C6884] truncate">
                    {cert.credentialId}
                </span>

                <Link
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] font-mono text-[#E8ECF4] hover:text-emerald-400 transition-colors shrink-0"
                >
                    Verify
                    <FaExternalLinkAlt size={12} strokeWidth={2} />
                </Link>
            </div></>
    )
}

const Certificate = () => {
    return (
        <div className="grid gap-3 md:grid-cols-3">
            {CERTIFICATIONS.map((cert) => (
              <Reveal key={cert.name}>
                <Card>
                  <CertificateCard cert={cert} />
                </Card>
              </Reveal>
            ))}
          </div>
    )
}


export default Certificate