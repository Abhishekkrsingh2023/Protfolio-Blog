import { SiDocker, SiFastapi, SiGit, SiJavascript, SiMongodb, SiNextdotjs, SiPostgresql, SiPython, SiReact, SiRedis, SiUbuntu } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPydantic } from "react-icons/si";
import { TbAdjustmentsBolt, TbDatabaseCog } from "react-icons/tb";
import { BsOpenai } from "react-icons/bs";
import { BsClaude } from "react-icons/bs";


const TECH_STACK = [
  { name: "Python", icon: <SiPython /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Pydantic", icon: <SiPydantic /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "SQLAlchemy", icon: <TbDatabaseCog /> },
  { name: "Alembic", icon: <TbAdjustmentsBolt /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Ubuntu", icon: <SiUbuntu /> },
  { name: "OpenAI", icon: <BsOpenai /> },
  { name: "Claude", icon: <BsClaude /> },
];


const TechStack = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
      {TECH_STACK.map((tech) => (
        <div
          key={tech.name}
          className="
                  group
                  relative
                  flex flex-col
                  items-center justify-center
                  gap-3 p-6 rounded-xl
                  border border-white/10 bg-[#0E1628]/70
                  backdrop-blur-sm transition-all duration-300
                  hover:-translate-y-2 hover:border-[#4FD1C5]
                  hover:shadow-[0_0_30px_rgba(79,209,197,0.15)]"
        >
          <div
            className="
                      md:text-5xl text-4xl
                      text-[#4FD1C5]
                      transition-transform
                      duration-500
                      group-hover:rotate-360
                    "
          >
            {tech.icon}
          </div>

          <span className="font-mono text-xs text-[#A5B4D6] tracking-wide">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  )
}

export default TechStack