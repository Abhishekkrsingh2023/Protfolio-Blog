import Endpoint from "@/components/Endpoint";
import { FaRegDotCircle } from "react-icons/fa";

const experienceCards = [
    {
        title: "Python Intern",
        company: "Infosys Springboard",
        duration: "Jul 2026 – Present",
        summary: "Working on projects involving Python, FastAPI, React, and Docker to build scalable web applications, REST APIs, and developer-centric tools.",
        techStack: ["Python", "FastAPI", "React", "Node.js", "PostgreSQL", "SQLAlchemy", "Docker"],
        details: [
            "Developed RESTful APIs using FastAPI, ensuring high performance and scalability.",
            "Implemented frontend components with React, enhancing user experience and interactivity.",
            "Collaborated with cross-functional teams to design and implement new features."
        ]
    },
    {
        title: "Coder's Club Secretary & Tecchnical Lead",
        company: "Coder's Club, BBIT Kolkata",
        duration: "Dec 2025 – Present",
        summary: "Leading the Coder's Club at BBIT Kolkata, organizing coding events, workshops, and hackathons to foster a culture of learning and innovation among students.",
        techStack: ["Python", "FastAPI", "React", "Node.js", "PostgreSQL", "SQLAlchemy", "Docker", "Redis", "MongoDB", "OpenAI", "Claude", "Next.js"],
        details: [
            "Implemented caching strategies using Redis, improving response times by 30%.",
            "Refactored legacy codebase, enhancing maintainability and reducing technical debt.",
            "Integrated third-party services and APIs to extend application functionality."
        ]
    },
    // Add more experience cards as needed
];

const ExperienceCard = ({ card }: { card: any }) => {
    return (
        <div className="px-4.5 pb-4.5">
            {/* Title + Duration */}
            <div className="flex items-start justify-between mb-3">
                <div>
                    <h3 className="text-gray-200 font-mono text-base font-semibold">
                        {card.title}
                    </h3>
                    <span className="text-[#4FD1C5] font-mono text-sm"> {card.company} </span>
                </div>
                <span className="text-[#7C8AA8] text-xs font-mono mt-1">
                    {card.duration}
                </span>
            </div>
            {/* Summary */}
            <p className="text-[#7C8AA8] text-sm mb-4 leading-relaxed">
                {card.summary}
            </p>
            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4 max-w-200">
                {card.techStack.map((tech: string) => (
                    <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono bg-[#1A2340] text-[#4FD1C5] border border-[#26314f] rounded"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            {/* Bullet points (details) */}
            <ul className="space-y-2 text-[#7C8AA8] text-sm">
                {card.details.map((detail: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                        <span className="text-[#4FD1C5] mt-1"><FaRegDotCircle size={12} /></span>
                        {detail}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const ExperienceSection = () => {
    return (
        <>
            {experienceCards.map((card, index) => (
                <Endpoint key={index}>
                    <ExperienceCard card={card} />
                </Endpoint>
            ))}
        </>
    );
}

export default ExperienceSection;