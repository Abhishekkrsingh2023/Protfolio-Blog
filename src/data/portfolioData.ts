import { Project, UnderBuildProject, ExperienceItem, Certification } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio | Blog Website",
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
Features dark theme, responsive design, and smooth page transitions. 
Fully static with optimized content for fast performance and accessibility.`,
    features: [
      "Request-Response navigation with status codes and endpoints",
      "Dynamic project and experience cards with hover effects",
      "Markdown-based blog structure with syntax highlighting support",
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
Redis is used for caching and managing execution queues. Docker ensures that each code execution is isolated and secure. 
Supports Python, Java, C++ and C with resource limits to prevent abuse.`,
    features: [
      "Supports multiple programming languages (Python, Java, C++, C)",
      "Isolated execution environments using Docker containers",
      "Resource limits and timeouts to prevent abuse",
      "REST API for submitting code and retrieving results",
      "Real-time execution feedback with queue management",
    ],
  },
  {
    id: "markdown-converter",
    title: "Markdown Converter",
    summary: "A simple yet powerful markdown to pdf/doc converter. Containerized and can run locally.",
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
Supports custom templates and styling options for output documents. Dockerized for easy self-deployment.`,
    features: [
      "Convert Markdown to PDF or DOC formats",
      "Supports custom math and styling with LaTeX templates",
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
    techStack: ["FastAPI", "React", "MongoDB", "beanie", "cloudinary", "razorpay"],
    codeUrl: "https://github.com/Abhishekkrsingh2023/",
    liveUrl: "https://ecom-dash.example.com",
    live: false,
    role: "Full-Stack Developer",
    status: "Completed",
    description: `A full-stack e-commerce application with product listings, shopping cart, and checkout functionality. 
Built with React for the frontend and FastAPI/MongoDB for the backend. 
Features user authentication, payment processing, and inventory management with JWT tokens.`,
    features: [
      "Product listings with filtering and sorting",
      "Shopping cart with quantity adjustment",
      "Secure checkout process with payment integration",
      "User account management and order history",
      "Admin panel for product and order management",
      "Responsive design for mobile and desktop",
    ],
  },
];

export const UNDER_BUILD: UnderBuildProject[] = [
  {
    id: "ai-code-reviewer",
    title: "AI Code Reviewer",
    description: "Automated code review bot using LLMs with GitHub integration.",
    techStack: ["Python", "FastAPI", "OpenAI"],
    startDate: "2026 Q2",
    status: "In Progress",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    title: "Python Intern",
    company: "Infosys Springboard",
    duration: "Jul 2026 – Present",
    summary: "Working on projects involving Python, FastAPI, React, and Docker to build scalable web applications, REST APIs, and developer-centric tools.",
    techStack: ["Python", "FastAPI", "React", "Node.js", "PostgreSQL", "SQLAlchemy", "Docker"],
    details: [
      "Developed RESTful APIs using FastAPI, ensuring high performance and scalability.",
      "Implemented frontend components with React, enhancing user experience and interactivity.",
      "Collaborated with cross-functional teams to design and implement new features.",
    ],
  },
  {
    title: "Coder's Club Secretary & Technical Lead",
    company: "Coder's Club, BBIT Kolkata",
    duration: "Dec 2025 – Present",
    summary: "Leading the Coder's Club at BBIT Kolkata, organizing coding events, workshops, and hackathons to foster a culture of learning and innovation among students.",
    techStack: ["Python", "FastAPI", "React", "Node.js", "PostgreSQL", "SQLAlchemy", "Docker", "Redis", "MongoDB", "OpenAI", "Claude", "Next.js"],
    details: [
      "Managed a team of developers and designers to create engaging coding challenges and workshops.",
      "Organized hackathons and coding competitions, attracting participants from various colleges and universities.",
      "Guide students in their projects, providing mentorship and technical support to help them succeed.",
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
    credentialId: "self-learned",
    verifyUrl: "https://fastapi.tiangolo.com/learn/",
  },
  {
    name: "Object Oriented Programming using Python",
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
    name: "Nginx - Website Development",
    issuer: "Infosys Springboard",
    date: "Mar 2026",
    credentialId: "8423ce5a-e8e2-4a97-bd03-239dda4b87e4",
    verifyUrl: "https://verify.onwingspan.com/",
  },
  {
    name: "NextJS - Website Development",
    issuer: "NextJS by Vercel",
    date: "July 2026",
    credentialId: "self-learned",
    verifyUrl: "https://nextjs.org/docs",
  },
];

export const HOW_I_WORK = [
  {
    step: "01",
    title: "Build",
    description: "I learn new technologies by building real projects, not just following tutorials.",
  },
  {
    step: "02",
    title: "Understand",
    description: "I like understanding how things work internally instead of relying on quick fixes.",
  },
  {
    step: "03",
    title: "Improve",
    description: "I enjoy building scalable backends, developer tools, and systems that solve real problems.",
  },
];
