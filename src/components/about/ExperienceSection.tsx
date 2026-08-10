import Endpoint from "@/components/Endpoint";
import { FaRegDotCircle } from "react-icons/fa";
import { EXPERIENCES } from "@/data/portfolioData";
import { ExperienceItem } from "@/types";

const ExperienceCard = ({ card }: { card: ExperienceItem }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
        <div>
          <h3 className="text-gray-200 font-mono text-base font-semibold">
            {card.title}
          </h3>
          <span className="text-[#4FD1C5] font-mono text-sm">{card.company}</span>
        </div>
        <span className="text-[#7C8AA8] text-xs font-mono">
          {card.duration}
        </span>
      </div>

      <p className="text-[#7C8AA8] text-sm mb-4 leading-relaxed">
        {card.summary}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {card.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-[11px] font-mono bg-[#1A2340] text-[#4FD1C5] border border-[#26314f] rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="space-y-2 text-[#7C8AA8] text-sm">
        {card.details.map((detail, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-[#4FD1C5] mt-1 shrink-0">
              <FaRegDotCircle size={12} />
            </span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function ExperienceSection() {
  return (
    <div className="space-y-4">
      {EXPERIENCES.map((card, index) => (
        <Endpoint key={index}>
          <ExperienceCard card={card} />
        </Endpoint>
      ))}
    </div>
  );
}