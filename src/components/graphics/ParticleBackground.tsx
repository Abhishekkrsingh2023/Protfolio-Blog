"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

const PARTICLE_COLORS = [
  "rgba(79, 209, 197, ",   // Teal / Cyan #4FD1C5
  "rgba(96, 171, 233, ",   // Electric Blue #60abe9
  "rgba(216, 180, 254, ",  // Purple #d8b4fe
  "rgba(242, 184, 75, ",   // Amber #F2B84B
  "rgba(54, 199, 102, ",   // Matrix Green #36c766
];

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Dynamic particle count based on screen size
    const particleCount = Math.min(
      Math.floor((width * height) / (width < 768 ? 22000 : 14000)),
      75
    );

    const particles: Particle[] = [];
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 120,
    };

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const colorBase =
        PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0.2 : 0.6),
        vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0.2 : 0.6),
        radius: Math.random() * 1.8 + 1,
        color: colorBase,
        alpha: Math.random() * 0.5 + 0.25,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const maxDistance = 110;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0) {
          p.x = 0;
          p.vx = -p.vx;
        } else if (p.x > width) {
          p.x = width;
          p.vx = -p.vx;
        }

        if (p.y < 0) {
          p.y = 0;
          p.vy = -p.vy;
        } else if (p.y > height) {
          p.y = height;
          p.vy = -p.vy;
        }

        // Mouse proximity gentle interaction
        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < mouse.radius && distMouse > 0) {
          const force = (mouse.radius - distMouse) / mouse.radius;
          const fx = (dxMouse / distMouse) * force * 1.2;
          const fy = (dyMouse / distMouse) * force * 1.2;
          p.x -= fx;
          p.y -= fy;
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `${p.color}0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow for performance

        // Connect nearby particles with glowing lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(79, 209, 197, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Background ambient radial gradients for depth */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#4FD1C5]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[650px] h-[650px] bg-[#8B5CF6]/4 rounded-full blur-[180px] pointer-events-none" />

      {/* Cyber grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-70" />

      {/* Canvas for dynamic particles */}
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
