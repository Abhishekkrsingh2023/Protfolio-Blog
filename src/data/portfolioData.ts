import { Project, UnderBuildProject, ExperienceItem, Certification } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "jobify-resume-analyser",
    title: "Jobify | AI Resume Analyser",
    summary: "AI-powered resume analysis and job matching platform that evaluates candidate fit, identifies skill gaps, and generates personalized interview preparation roadmaps.",
    date: "2026",
    image: "/project-images/Jobify.png",
    techStack: ["Python", "FastAPI", "React", "Google GenAI", "MongoDB", "Clerk"],
    codeUrl: "https://github.com/Abhishekkrsingh2023/Jobify",
    liveUrl: "https://jobify.developerabhishek.me",
    live: true,
    role: "Full-Stack Developer | GenAI",
    status: "Completed",
    description: `An AI-powered career preparation platform that analyzes a candidate's resume against a target job description to determine job compatibility. Jobify extracts structured resume data from PDFs, evaluates candidates across five weighted categories, identifies critical skill gaps, generates personalized technical and behavioral interview questions, and creates a phased preparation roadmap.`,
    features: [
      "AI-powered resume and job description analysis using Google GenAI",
      "Five-category weighted scoring across skills, experience, responsibilities, projects, and education",
      "Dynamic skill gap detection with prioritized missing skills",
      "Personalized technical and behavioral interview question generation",
      "Phased preparation roadmap with milestones and estimated effort",
      "PDF resume parsing and structured content extraction using pypdf",
      "Secure authentication with Clerk and MongoDB-backed data persistence",
      "FastAPI REST APIs with asynchronous request handling",
      "React-based interactive dashboard for analysis and preparation tracking",
    ],
  },
  {
    id: "portfolio-website",
    title: "Portfolio & Blog Engine",
    summary: "Modern developer portfolio built with Next.js, GSAP scroll animations, and interactive particle constellation graphics.",
    date: "2026",
    image: "/project-images/portfolio.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    codeUrl: "https://github.com/Abhishekkrsingh2023/",
    liveUrl: "https://developerabhishek.me",
    live: true,
    role: "Full-Stack Developer",
    status: "Completed",
    description: `A developer portfolio engineered with a signature REST API request-response aesthetic.
Features interactive terminal interfaces, GSAP scroll-triggered physics, canvas particle background, and responsive glassmorphic cards.`,
    features: [
      "RESTful endpoint routing aesthetic with HTTP status indicators and live latency metrics",
      "GSAP-powered scroll triggers and staggered physics animations",
      "Interactive 60fps canvas particle constellation background",
      "Profile hero with floating tech orbit badges and live status beacons",
      "Fully responsive glassmorphism UI optimized across all devices",
    ],
  },
  {
    id: "code0",
    title: "Code0 | Code Execution Sandbox",
    summary: "Isolated multi-language backend code execution engine with Docker sandboxing and Redis task queues.",
    date: "2026",
    image: "/project-images/Code0.png",
    techStack: ["Python", "FastAPI", "Redis", "Docker", "subprocess"],
    codeUrl: "https://github.com/Abhishekkrsingh2023/",
    liveUrl: "",
    live: false,
    role: "Backend Architect",
    status: "Completed",
    description: `A high-performance remote code execution sandbox.
Built with FastAPI and Docker to execute untrusted code across Python, Java, C++, and C with strict CPU, memory, and timeout constraints. Uses Redis queues for async worker scheduling and low-latency result streaming.`,
    features: [
      "Ephemeral Docker container isolation with restricted system permissions and CPU/RAM quotas",
      "Asynchronous execution queue managed by Redis and worker processes",
      "Multi-language runtime support (Python, Java, C++, C) with stderr/stdout streaming",
      "Clean REST API contracts with automated schema validation and rate limiting",
    ],
  },
  {
    id: "markdown-converter",
    title: "Markdown Document Engine",
    summary: "High-fidelity Markdown to PDF/DOCX conversion microservice containerized with Pandoc and LaTeX.",
    date: "2026",
    image: "/project-images/markdown-converter.jpg",
    techStack: ["Python", "FastAPI", "Docker", "pypandoc", "LaTeX"],
    codeUrl: "https://github.com/Abhishekkrsingh2023/md-converter",
    liveUrl: "https://markdown.abhishek.dev",
    live: false,
    role: "Backend Developer",
    status: "Completed",
    description: `A containerized microservice for converting complex Markdown files into production-grade PDF and DOC documents.
Supports LaTeX mathematical notation, custom stylesheet injection, and batch document processing through a resilient FastAPI backend.`,
    features: [
      "High-fidelity PDF and DOCX compilation using Pandoc and custom LaTeX styling engines",
      "Public REST API for batch document conversion with multipart file processing",
      "Dockerized deployment for frictionless local and cloud container execution",
      "Full mathematical syntax highlighting and custom typography support",
    ],
  },
  {
    id: "ecommerce-app",
    title: "BuyNow | E-commerce Backend & Platform",
    summary: "Full-stack e-commerce platform with FastAPI async backend, MongoDB/Beanie, JWT auth, and Razorpay.",
    date: "2025",
    image: "/project-images/buynow.png",
    techStack: ["FastAPI", "React", "MongoDB", "Beanie", "Cloudinary", "Razorpay"],
    codeUrl: "https://github.com/Abhishekkrsingh2023/",
    liveUrl: "https://ecom-dash.example.com",
    live: false,
    role: "Full-Stack Engineer",
    status: "Completed",
    description: `An end-to-end commerce application with real-time product catalogs, cart state management, and secure payment processing.
The backend leverages FastAPI async endpoints and Beanie ODM for high-throughput database interactions.`,
    features: [
      "FastAPI asynchronous REST API with MongoDB aggregation and Beanie ODM",
      "Secure JWT authentication, role-based access control, and password hashing",
      "End-to-end payment gateway lifecycle integration with Razorpay",
      "Cloudinary CDN integration for automated media optimization",
    ],
  },
];

export const UNDER_BUILD: UnderBuildProject[] = [
  {
    id: "ai-code-reviewer",
    title: "AI Code Reviewer Bot",
    description: "Automated GitHub Pull Request bot analyzing git diffs for security vulnerabilities, race conditions, and performance bottlenecks.",
    techStack: ["Python", "FastAPI", "OpenAI", "GitHub API"],
    startDate: "2026 Q2",
    status: "In Progress",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    title: "Python & Backend Intern",
    company: "Infosys Springboard",
    duration: "Jul 2026 – Present",
    summary: "Architecting high-throughput REST APIs, asynchronous task workers, and containerized microservices using Python, FastAPI, and Docker.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "Redis", "React"],
    details: [
      "Developed high-performance REST APIs with FastAPI, Pydantic, and SQLAlchemy ORM.",
      "Engineered containerized dev/prod workflows with Docker and optimized image footprints.",
      "Collaborated on database schema design, index optimization, and distributed caching strategies.",
    ],
  },
  {
    title: "Coder's Club Secretary & Technical Lead",
    company: "Coder's Club, BBIT Kolkata",
    duration: "Dec 2025 – Present",
    summary: "Leading technical workshops, hackathons, and software engineering initiatives across the student developer ecosystem.",
    techStack: ["Python", "FastAPI", "Node.js", "Docker", "Redis", "PostgreSQL", "Next.js"],
    details: [
      "Mentored 100+ student developers in backend architecture, API design, and modern version control.",
      "Organized university-wide hackathons and algorithmic programming challenges.",
      "Architected backend infrastructure and submission evaluation pipelines for coding contests.",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "SQL and Relational Databases 101",
    issuer: "IBM SkillsBuild",
    date: "Jun 2026",
    credentialId: "b440759b2d854790a22774bf3b876fd2",
    verifyUrl: "https://skillsbuild.org/",
  },
  {
    name: "FastAPI: The Complete Guide",
    issuer: "FastAPI by Tiangolo",
    date: "Jun 2026",
    credentialId: "Verified Mastery",
    verifyUrl: "https://fastapi.tiangolo.com/learn/",
  },
  {
    name: "Object Oriented Programming in Python",
    issuer: "Infosys Springboard",
    date: "Apr 2026",
    credentialId: "6065a951-e4cc-4c6f-b4ed-540567ad7dc4",
    verifyUrl: "https://verify.onwingspan.com/",
  },
  {
    name: "Introduction to Programming Using Python",
    issuer: "Infosys Springboard",
    date: "May 2024",
    credentialId: "1-b5a32942-85ff-4c4e-8c77-a57a2735f577",
    verifyUrl: "https://verify.onwingspan.com/",
  },
  {
    name: "Nginx - Web Server & Reverse Proxy",
    issuer: "Infosys Springboard",
    date: "Mar 2026",
    credentialId: "8423ce5a-e8e2-4a97-bd03-239dda4b87e4",
    verifyUrl: "https://verify.onwingspan.com/",
  },
  {
    name: "Next.js - Full-Stack Web Development",
    issuer: "Next.js by Vercel",
    date: "Jul 2026",
    credentialId: "Verified Mastery",
    verifyUrl: "https://nextjs.org/docs",
  },
];

export const HOW_I_WORK = [
  {
    step: "01",
    title: "Architect",
    description: "Design clean data schemas, API contracts, and boundary abstractions before writing the first line of code.",
  },
  {
    step: "02",
    title: "Build & Profile",
    description: "Implement idiomatic, asynchronous services with strict type safety, predictable error models, and minimal latency.",
  },
  {
    step: "03",
    title: "Containerize & Scale",
    description: "Ship containerized microservices with Docker, Redis caching, and automated testing for rock-solid reliability.",
  },
];
