import { useEffect, useRef, useState } from "react";

function Reveal({ children, className = "" }: Readonly<{ children: React.ReactNode; className?: string }>) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
            { threshold: 0.15 }
        );
        io.observe(node);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-600 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"
                } ${className}`}
        >
            {children}
        </div>
    );
}

export default Reveal;