"use client";

import { useEffect, useRef } from "react";
import { SiDocker, SiFastapi, SiGit, SiJavascript, SiMongodb, SiNextdotjs, SiPostgresql, SiPython, SiReact, SiRedis, SiUbuntu } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPydantic } from "react-icons/si";
import { TbAdjustmentsBolt, TbDatabaseCog } from "react-icons/tb";
import { BsOpenai } from "react-icons/bs";
import { BsClaude } from "react-icons/bs";

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
// Each entry is one "ball". Swap `icon` for a real <img> or <svg> in your
// project — kept as emoji here so the component runs with zero extra assets.
const TECH_STACK: TechItem[] = [
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
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

const BALL_SIZE = 84; // px, diameter of each floating ball

export default function TechStackFloat() {
    // HTMLDivElement | null — a ref starts life as null (before the DOM
    // paints), so the type has to admit that possibility honestly.
    const containerRef = useRef<HTMLDivElement | null>(null);

    // An array of possibly-null div refs, one per ball. Declared as a plain
    // mutable array (not React state) because we assign into it imperatively
    // via the callback ref below — arrays of refs aren't a built-in React
    // pattern, just a plain array we manage ourselves.
    const ballRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Physics state lives in a ref, NOT useState — we mutate it every frame
    // and never want React to re-render for that. useState re-renders are for
    // when the UI's *structure* changes, not for per-frame position updates.
    const stateRef = useRef<BallState[]>([]);

    // requestAnimationFrame returns a number (its handle), used to cancel it.
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return; // TS forces this check — container is nullable

        const { width, height } = container.getBoundingClientRect();

        // 1. Initialize: random position inside bounds, random small velocity.
        stateRef.current = TECH_STACK.map(
            (): BallState => ({
                x: Math.random() * (width - BALL_SIZE),
                y: Math.random() * (height - BALL_SIZE),
                vx: (Math.random() - 0.5) * 1.6, // px per frame
                vy: (Math.random() - 0.5) * 1.6,
            })
        );

        let floatTick = 0;

        function step() {
            if (!container) return;
            floatTick += 0.02;
            const bounds = container.getBoundingClientRect();
            const balls = stateRef.current;

            // 2. Move every ball, one pair-check at a time.
            for (let i = 0; i < balls.length; i++) {
                const b = balls[i];

                // Core motion: position = position + velocity
                b.x += b.vx;
                b.y += b.vy;

                // Gentle upward/downward drift layered on top, so it reads as
                // "floating" and not just "bouncing off walls like a pool ball".
                const floatOffset = Math.sin(floatTick + i) * 0.15;
                b.y += floatOffset;

                // 3. Wall collision: if we've gone past an edge, snap back inside
                // and REVERSE the velocity component pointing into that wall.
                // This is the entire "bounce" — nothing more than a sign flip.
                if (b.x <= 0) {
                    b.x = 0;
                    b.vx = Math.abs(b.vx);
                } else if (b.x >= bounds.width - BALL_SIZE) {
                    b.x = bounds.width - BALL_SIZE;
                    b.vx = -Math.abs(b.vx);
                }

                if (b.y <= 0) {
                    b.y = 0;
                    b.vy = Math.abs(b.vy);
                } else if (b.y >= bounds.height - BALL_SIZE) {
                    b.y = bounds.height - BALL_SIZE;
                    b.vy = -Math.abs(b.vy);
                }

                // 4. Ball-vs-ball collision: simple elastic bounce.
                // O(n^2) — fine at this ball count (n < 30).
                for (let j = i + 1; j < balls.length; j++) {
                    const other = balls[j];
                    const dx = other.x - b.x;
                    const dy = other.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < BALL_SIZE && dist > 0) {
                        // Push apart along the collision axis, swap velocity components
                        // along that axis (elastic collision, equal masses).
                        const nx = dx / dist;
                        const ny = dy / dist;
                        const overlap = BALL_SIZE - dist;
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

                // 5. Apply position directly to the DOM node via ref, bypassing
                // React's render cycle entirely — this is what keeps 60fps cheap.
                const el = ballRefs.current[i];
                if (el) {
                    el.style.transform = `translate(${b.x}px, ${b.y}px)`;
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
        <div
            ref={containerRef}
            className="relative w-full h-140 overflow-hidden rounded-lg add-border"
            style={{ background: "#121A2E" }}
        >
            {TECH_STACK.map((tech, i) => (
                <div
                    key={tech.name}
                    ref={(el) => {
                        ballRefs.current[i] = el;
                    }}
                    className="absolute flex flex-col items-center justify-center rounded-full shadow-lg select-none"
                    style={{
                        width: BALL_SIZE,
                        height: BALL_SIZE,
                        top: 0,
                        left: 0,
                        background: "rgba(255,255,255,0.04)",
                        border: `1px solid ${tech.color}55`,
                        willChange: "transform",
                    }}
                    title={tech.name}
                >
                    <span style={{ fontSize: 44, color: tech.color }}
                    >{tech.icon}</span>
                    {/* <span className="text-[10px] text-slate-300 mt-1">{tech.name}</span> */}
                </div>
            ))}
        </div>
    );
}