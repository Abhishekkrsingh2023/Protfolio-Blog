import {
  SiDocker,
  SiFastapi,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiUbuntu,
  SiExpress,
  SiPydantic,
} from "react-icons/si";
import { TbAdjustmentsBolt, TbDatabaseCog } from "react-icons/tb";
import { BsOpenai, BsClaude } from "react-icons/bs";

interface StackCategory {
  category: string;
  items: {
    name: string;
    icon: React.ReactNode;
    color: string;
  }[];
}

const CATEGORIZED_STACK: StackCategory[] = [
  {
    category: "Backend & APIs",
    items: [
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
      { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
      { name: "Node.js", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "Express", icon: <SiExpress />, color: "#83CD29" },
      { name: "Pydantic", icon: <SiPydantic />, color: "#E92063" },
    ],
  },
  {
    category: "Databases & ORM",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
      { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "SQLAlchemy", icon: <TbDatabaseCog />, color: "#D71F00" },
      { name: "Alembic", icon: <TbAdjustmentsBolt />, color: "#6BA81E" },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "Ubuntu Linux", icon: <SiUbuntu />, color: "#E95420" },
    ],
  },
  {
    category: "Frontend & AI",
    items: [
      { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "OpenAI API", icon: <BsOpenai />, color: "#10A37F" },
      { name: "Claude API", icon: <BsClaude />, color: "#D97757" },
    ],
  },
];

export default function TechStack() {
  return (
    <div className="space-y-6">
      {CATEGORIZED_STACK.map((group) => (
        <div key={group.category} className="space-y-3">
          <h4 className="font-mono text-xs text-[#7C8AA8] uppercase tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5]" />
            {group.category}
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {group.items.map((tech) => (
              <div
                key={tech.name}
                className="group relative flex items-center gap-3 p-3 rounded-xl border border-[#26314f]/80 bg-[#121A2E]/70 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-[#4FD1C5]/50 hover:shadow-[0_4px_20px_-4px_rgba(79,209,197,0.2)]"
              >
                <div
                  className="text-2xl transition-transform duration-200 group-hover:scale-110"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </div>

                <span className="font-mono text-xs text-[#E8ECF4] font-medium tracking-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}