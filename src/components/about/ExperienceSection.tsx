import Endpoint from "@/components/Endpoint";
import { FaRegDotCircle } from "react-icons/fa";
import { EXPERIENCES } from "@/data/portfolioData";
import { ExperienceItem } from "@/types";

const ExperienceCard = ({ card }: { card: ExperienceItem }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
        <div>
          <h3 className="text-white font-mono text-base sm:text-lg font-bold">
            {card.title}
          </h3>
          <span className="text-[#4FD1C5] font-mono text-sm font-semibold">{card.company}</span>
        </div>
        <span className="text-[#7C8AA8] text-xs font-mono px-2.5 py-1 rounded-full bg-[#162038] border border-[#26314f]">
          {card.duration}
        </span>
      </div>

      <p className="text-[#94A3B8] text-xs sm:text-sm mb-4 leading-relaxed">
        {card.summary}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {card.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-0.5 text-[11px] font-mono bg-[#162038] text-[#4FD1C5] border border-[#26314f] rounded-md font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="space-y-2 text-[#7C8AA8] text-xs sm:text-sm">
        {card.details.map((detail, index) => (
          <li key={index} className="flex items-start gap-2.5">
            <span className="text-[#4FD1C5] mt-1 shrink-0">
              <FaRegDotCircle size={11} />
            </span>
            <span className="text-[#A5B4D6] leading-relaxed">{detail}</span>
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