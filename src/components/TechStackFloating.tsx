"use client";

import { useEffect, useRef, useState } from "react";
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

interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface BallState {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const TECH_STACK: TechItem[] = [
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
  { name: "Node.js / JS", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "Express", icon: <SiExpress />, color: "#83CD29" },
  { name: "Pydantic", icon: <SiPydantic />, color: "#E92063" },
  { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "SQLAlchemy", icon: <TbDatabaseCog />, color: "#D71F00" },
  { name: "Alembic", icon: <TbAdjustmentsBolt />, color: "#6BA81E" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "Ubuntu", icon: <SiUbuntu />, color: "#E95420" },
  { name: "OpenAI", icon: <BsOpenai />, color: "#10A37F" },
  { name: "Claude", icon: <BsClaude />, color: "#D97757" },
];

export default function TechStackFloat() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const ballRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stateRef = useRef<BallState[]>([]);
  const rafRef = useRef<number | null>(null);
  const [ballSize, setBallSize] = useState(76);

  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    const size = isMobile ? 64 : 76;
    setBallSize(size);

    const container = containerRef.current;
    if (!container) return;

    const { width, height } = container.getBoundingClientRect();

    // 1. Initialize random position inside bounds with smooth velocity
    stateRef.current = TECH_STACK.map(
      (): BallState => ({
        x: Math.random() * Math.max(width - size, 10),
        y: Math.random() * Math.max(height - size, 10),
        vx: (Math.random() - 0.5) * 1.4,
        vy: (Math.random() - 0.5) * 1.4,
      })
    );

    let floatTick = 0;

    function step() {
      if (!container) return;
      floatTick += 0.015;
      const bounds = container.getBoundingClientRect();
      const balls = stateRef.current;
      const curSize = window.innerWidth < 640 ? 64 : 76;

      for (let i = 0; i < balls.length; i++) {
        const b = balls[i];

        // Move
        b.x += b.vx;
        b.y += b.vy;

        // Subtle sinusoidal vertical drift
        const floatOffset = Math.sin(floatTick + i) * 0.12;
        b.y += floatOffset;

        // Wall collision bounce
        if (b.x <= 0) {
          b.x = 0;
          b.vx = Math.abs(b.vx);
        } else if (b.x >= bounds.width - curSize) {
          b.x = bounds.width - curSize;
          b.vx = -Math.abs(b.vx);
        }

        if (b.y <= 0) {
          b.y = 0;
          b.vy = Math.abs(b.vy);
        } else if (b.y >= bounds.height - curSize) {
          b.y = bounds.height - curSize;
          b.vy = -Math.abs(b.vy);
        }

        // Ball collision
        for (let j = i + 1; j < balls.length; j++) {
          const other = balls[j];
          const dx = other.x - b.x;
          const dy = other.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < curSize && dist > 0) {
            const nx = dx / dist;
            const ny = dy / dist;
            const overlap = curSize - dist;
            b.x -= nx * overlap * 0.5;
            b.y -= ny * overlap * 0.5;
            other.x += nx * overlap * 0.5;
            other.y += ny * overlap * 0.5;

            const bDotN = b.vx * nx + b.vy * ny;
            const oDotN = other.vx * nx + other.vy * ny;
            b.vx += (oDotN - bDotN) * nx;
            b.vy += (oDotN - bDotN) * ny;
            other.vx += (bDotN - oDotN) * nx;
            other.vy += (bDotN - oDotN) * ny;
          }
        }

        const el = ballRefs.current[i];
        if (el) {
          el.style.transform = `translate3d(${b.x}px, ${b.y}px, 0)`;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="relative w-full rounded-2xl glass-panel border border-[#26314f]/80 overflow-hidden shadow-2xl">
      {/* Collider Header Bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#26314f]/80 bg-[#151e36]/60 backdrop-blur-md">
        <div className="flex items-center gap-2 font-mono text-xs text-[#7C8AA8]">
          <span className="w-2 h-2 rounded-full bg-[#4FD1C5] animate-ping" />
          <span>runtime::physics_engine</span>
        </div>
        <span className="font-mono text-[11px] text-[#5C6884]">
          17 Active Modules
        </span>
      </div>

      {/* Physics Arena */}
      <div
        ref={containerRef}
        className="relative w-full h-[360px] sm:h-[420px] overflow-hidden bg-gradient-to-b from-[#0e1628]/90 via-[#121A2E]/80 to-[#0e1628]/90"
      >
        {/* Subtle grid in background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

        {TECH_STACK.map((tech, i) => (
          <div
            key={tech.name}
            ref={(el) => {
              ballRefs.current[i] = el;
            }}
            className="absolute flex flex-col items-center justify-center rounded-2xl select-none transition-shadow duration-200 group/ball hover:scale-110 cursor-pointer"
            style={{
              width: ballSize,
              height: ballSize,
              top: 0,
              left: 0,
              background: "rgba(18, 26, 46, 0.85)",
              border: `1.5px solid ${tech.color}66`,
              boxShadow: `0 8px 24px -4px ${tech.color}25`,
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              willChange: "transform",
            }}
            title={tech.name}
          >
            <span
              className="transition-transform duration-200 group-hover/ball:scale-125"
              style={{
                fontSize: ballSize < 70 ? 28 : 36,
                color: tech.color,
                filter: `drop-shadow(0 0 6px ${tech.color}66)`,
              }}
            >
              {tech.icon}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}