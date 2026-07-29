// app/projects/[id]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

import SectionLabel from "@/components/SectionLabel";
import Image from "next/image";
import { FaCircleDot, FaCode } from "react-icons/fa6";
import { FaRegDotCircle } from "react-icons/fa";

const projects = [
    {
        id: "portfolio-website",
        title: "Portfolio Website",
        summary: "Personal portfolio with terminal aesthetic, built using Next.js and Tailwind CSS.",
        date: "2026",
        image: "/project-images/portfolio.png",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
        codeUrl: "https://github.com/Abhishekkrsingh2023/",
        liveUrl: "https://developerabhishek.me",
        live: true,
        role: "Full-Stack Developer",
        status: "Completed",
        description: `A developer portfolio with a unique Backend Request-Response theme. 
Built from scratch to showcase projects, experience, and skills in a way that reflects a backend engineer's aesthetic. 
Features dark theme, responsive design, and smooth page transitions using Framer Motion. 
Fully static with markdown-driven content for easy updates.`,
        features: [
            "Request-Response navigation with status codes and endpoints",
            "Dynamic project and experience cards with hover effects",
            "Markdown-based blog with code syntax highlighting",
            "Responsive layout optimized for all devices",
            "SEO friendly with Open Graph meta tags",
        ],
    },
    {
        id: "code0",
        title: "Code0 | Code Execution Sandbox",
        summary: "A backend interface code execution sandbox supporting multiple programming languages.",
        date: "2026",
        image: "/project-images/Code0.png",
        techStack: ["Python", "FastAPI", "Redis", "Docker", "subprocess"],
        codeUrl: "https://github.com/Abhishekkrsingh2023/",
        liveUrl: "",
        live: false,
        role: "Backend Developer",
        status: "Completed",
        description: `A secure code execution sandbox that allows users to run code snippets in multiple programming languages.
The backend is built with FastAPI and uses Docker containers to isolate execution environments. 
Redis is used for caching and managing execution queues. Uses Docker to ensure that each code execution is isolated and secure. 
Supports Python, Java, C++ and C with resource limits to prevent abuse.`,
        features: [
            "Supports multiple programming languages (Python, Java, C++, C)",
            "Isolated execution environments using Docker containers",
            "Resource limits and timeouts to prevent abuse",
            "REST API for submitting code and retrieving results",
            "Real-time execution feedback with WebSocket support",
        ],
    },
    {
        id: "markdown-converter",
        title: "Markdown Converter",
        summary: "A simple yet powerful markdown to pdf/doc converter.",
        date: "2026",
        image: "/project-images/markdown-converter.jpg",
        techStack: ["Python", "FastAPI", "Docker", "pypandoc", "latex"],
        codeUrl: "https://github.com/Abhishekkrsingh2023/md-converter",
        liveUrl: "https://markdown.abhishek.dev",
        live: false,
        role: "Backend Developer",
        status: "Completed",
        description: `A backend service that converts Markdown files to PDF or DOC formats.
Built with FastAPI and Dockerized for easy deployment. 
Uses pypandoc and LaTeX for high-quality document generation. 
Supports custom templates and styling options for the output documents. Dockerized for easy self deployment.`,
        features: [
            "Convert Markdown to PDF or DOC formats",
            "Supports custom maths and styling with LaTeX templates",
            "Public API for submitting Markdown and retrieving converted files",
            "Dockerized for easy deployment and scalability",
            "Interactive web interface for uploading and converting Markdown files",
        ],
    },
    {
        id: "ecommerce-app",
        title: "BuyNow | E-commerce App",
        summary: "A full-stack e-commerce application with product listings, cart, and checkout.",
        date: "2025",
        image: "/project-images/buynow.png",
        techStack: ["FastAPI", "React", "MongoDB", "beanie","cloudinary", "razorpay"],
        codeUrl: "https://github.com/abhishek/ecom-dashboard",
        liveUrl: "https://ecom-dash.example.com",
        live: false,
        role: "Full-Stack Developer",
        status: "Completed",
        description: `A full-stack e-commerce application with product listings, cart, and checkout functionality. 
Built with React and Redux for the frontend, and Node.js with Express for the backend. 
Features include user authentication, payment processing, and inventory management.Full authentication and authorization with JWT tokens using cookies.`,
        features: [
            "Product listings with filtering and sorting",
            "Shopping cart with quantity adjustment",
            "Secure checkout process with payment integration",
            "User account management and order history",
            "Admin panel for product and order management",
            "Responsive design for mobile and desktop",
        ],
    }
];

// ---------- Helper: Status Badge ----------
const StatusBadge = ({ status }: { status: string }) => {
    const color = status === "Completed" ? "text-[#36c766]" : "text-[#F2B84B]";
    return (
        <span className={`${color} text-xs font-mono px-2 py-0.5 border border-current rounded-full`}>
            {status}
        </span>
    );
};

// ---------- Main Page Component ----------
export default async function ProjectDetailsPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const project = projects.find((p) => p.id === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#0B1120] text-[#7C8AA8]">

            <main className="max-page-width mx-auto px-6 py-12">
                {/* ===== GET /projects/{id} ===== */}
                <SectionLabel method="GET">/projects/{project.id}</SectionLabel>

                {/* Main Project Card – mimics Endpoint style */}
                <div className="border border-[#26314f] rounded-lg bg-[#121A2E] mb-12 overflow-hidden">
                    {/* Content */}
                    <div className="px-6 py-6">
                        {/* Project Image */}
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={800}
                            height={400}
                            className="w-full max-h-[500px] object-cover rounded-md border border-[#26314f] mb-6"
                        />

                        {/* Title, Date, Role, Status */}
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                            <div>
                                <h1 className="text-white font-mono text-2xl font-semibold mb-1">
                                    {project.title}
                                </h1>
                                <div className="flex items-center gap-3 text-sm font-mono">
                                    <span className="text-[#4FD1C5]">{project.role}</span>
                                    <span className="text-[#7C8AA8]">•</span>
                                    <span className="text-[#7C8AA8]">{project.date}</span>
                                </div>
                            </div>
                            <StatusBadge status={project.status} />
                        </div>

                        {/* Description */}
                        <p className="text-[#7C8AA8] text-sm leading-relaxed whitespace-pre-line mb-8">
                            {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="mb-8">
                            <h3 className="text-white font-mono text-sm font-semibold mb-3">
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2.5 py-1 text-[11px] font-mono bg-[#1A2340] text-[#4FD1C5] border border-[#26314f] rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div className="mb-8">
                            <h3 className="text-white font-mono text-sm font-semibold mb-3">
                                Key Features
                            </h3>
                            <ul className="space-y-2">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-[#7C8AA8] text-sm">
                                        <span className="text-[#4FD1C5] mt-1"><FaRegDotCircle size={12} /></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-2 border-t border-[#26314f]">
                            <Link
                                href={project.codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-mono text-[#7C8AA8] border border-[#26314f] rounded hover:border-[#4FD1C5] hover:text-[#4FD1C5] transition-colors"
                            >
                                <span className="text-[#4FD1C5] pr-1 mb-1"><FaCode size={14}/></span>  View Source Code
                            </Link>
                            {project.live && (
                                <Link   
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-mono text-[#7C8AA8] border border-[#26314f] rounded hover:border-[#36c766] hover:text-[#36c766] transition-colors"
                                >
                                    <span className="text-[#36c766] pb-[2px]"><FaCircleDot size={10} /></span> live
                                </Link>
                            )}
                        </div>
                    </div>
                </div>

                {/* Back to Projects link */}
                <div className="text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-1.5 text-sm font-mono text-[#7C8AA8] hover:text-[#4FD1C5] transition-colors"
                    >
                        <span className="text-[#4FD1C5]">cd ..</span> back to projects
                    </Link>
                </div>
            </main>
        </div>
    );
}