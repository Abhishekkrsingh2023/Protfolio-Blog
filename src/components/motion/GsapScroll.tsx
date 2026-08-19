"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GsapRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  stagger?: number;
}

export default function GsapReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  yOffset = 30,
  stagger = 0,
}: GsapRevealProps) {
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const targets =
        stagger > 0 && el.children.length > 0 ? el.children : el;

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          y: yOffset,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger: stagger > 0 ? stagger : 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, duration, yOffset, stagger]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
}
