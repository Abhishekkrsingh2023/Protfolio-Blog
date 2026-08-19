"use client";

import { useState } from "react";
import Reveal from "../Reveal";
import SectionLabel from "../SectionLabel";
import TopBar from "../TopBar";
import toast from "react-hot-toast";
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

type Status = "idle" | "loading" | "success" | "error";

const CONTACT_METHODS = [
  {
    icon: <FaEnvelope className="text-[#4FD1C5]" size={16} />,
    title: "Email",
    value: "abhikrsingh.dev@gmail.com",
    href: "mailto:abhikrsingh.dev@gmail.com",
  },
  {
    icon: <FaGithub className="text-[#60abe9]" size={16} />,
    title: "GitHub",
    value: "github.com/Abhishekkrsingh2023",
    href: "https://github.com/Abhishekkrsingh2023",
  },
  {
    icon: <FaLinkedin className="text-[#F2B84B]" size={16} />,
    title: "LinkedIn",
    value: "linkedin.com/in/abhishek-kumar-singh-a12590231",
    href: "https://www.linkedin.com/in/abhishek-kumar-singh-a12590231/",
  },
  {
    icon: <FaMapMarkerAlt className="text-[#E5657A]" size={16} />,
    title: "Location",
    value: "Kolkata, India (IST / UTC+5:30)",
  },
];

export default function ContactComponent() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function validate(): string | null {
    if (!formData.name.trim()) return "Please enter your name.";
    if (!formData.email.trim()) return "Please enter your email.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return "Please enter a valid email address.";
    if (!formData.message.trim()) return "Please enter a message.";
    if (formData.message.trim().length < 10)
      return "Message must be at least 10 characters long.";
    return null;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      toast.error(validationError);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let data: { error?: string } = {};
      try {
        data = await res.json();
      } catch {
        // Fallback if not json
      }

      if (!res.ok) {
        throw new Error(data?.error || `Request failed (${res.status})`);
      }

      setStatus("success");
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      toast.error(err instanceof Error ? err.message : "Failed to send message.");
    } finally {
      setStatus("idle");
    }
  }

  return (
    <div className="text-[#E8ECF4] font-sans leading-relaxed min-h-[85vh]">
      <TopBar to="/contact" />

      <div className="max-page-width mx-auto px-4 sm:px-6 py-8">
        {/* <SectionLabel method="POST">/contact</SectionLabel> */}

        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
            {/* Left Side: Info & Channels */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4FD1C5]/10 border border-[#4FD1C5]/30 text-xs font-mono text-[#4FD1C5] font-semibold mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5] animate-ping" />
                  Direct Dispatch
                </span>
                <h1 className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight mb-3">
                  Let&apos;s talk systems & code.
                </h1>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  Looking to build scalable backend architectures, collaborate on open-source projects, or hire for developer roles? Send a payload below.
                </p>
              </div>

              {/* Contact Direct Cards */}
              <div className="space-y-3 pt-2">
                {CONTACT_METHODS.map((method) => {
                  const content = (
                    <div className="flex items-center gap-3 p-3.5 rounded-xl glass-panel border border-[#26314f]/80 hover:border-[#4FD1C5]/40 transition-all duration-200 group">
                      <div className="p-2.5 rounded-lg bg-[#162038] border border-[#26314f] group-hover:scale-110 transition-transform">
                        {method.icon}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-mono text-[11px] text-[#7C8AA8] uppercase tracking-wider">
                          {method.title}
                        </span>
                        <span className="text-xs sm:text-sm text-[#E8ECF4] truncate font-medium group-hover:text-[#4FD1C5] transition-colors">
                          {method.value}
                        </span>
                      </div>
                    </div>
                  );

                  return method.href ? (
                    <a
                      key={method.title}
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={method.title}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-7 rounded-2xl p-6 sm:p-8 glass-panel border border-[#26314f]/80 shadow-2xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#26314f]/70">
                <h2 className="font-mono text-base font-bold text-white flex items-center gap-2">
                  <span>✉️</span> Payload Submission
                </h2>
                <span className="font-mono text-[11px] text-[#5C6884]">
                  Content-Type: JSON
                </span>
              </div>

              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-[#7C8AA8]">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name / Organization"
                    className="bg-[#0B1120]/90 border border-[#26314f] rounded-xl px-4 py-3 text-sm text-white placeholder-[#5C6884] outline-none focus:border-[#4FD1C5] focus:ring-1 focus:ring-[#4FD1C5]/30 transition-all font-mono"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-[#7C8AA8]">Email</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-[#0B1120]/90 border border-[#26314f] rounded-xl px-4 py-3 text-sm text-white placeholder-[#5C6884] outline-none focus:border-[#4FD1C5] focus:ring-1 focus:ring-[#4FD1C5]/30 transition-all font-mono"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-[#7C8AA8]">Message</label>
                  <textarea
                    placeholder="Describe your project, question, or proposal..."
                    rows={4}
                    className="bg-[#0B1120]/90 border border-[#26314f] rounded-xl px-4 py-3 text-sm text-white placeholder-[#5C6884] outline-none focus:border-[#4FD1C5] focus:ring-1 focus:ring-[#4FD1C5]/30 transition-all resize-none font-mono"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  disabled={status === "loading"}
                  type="submit"
                  className={`flex items-center justify-center gap-2 bg-[#4FD1C5] hover:bg-[#38b2ac] text-[#0B1120] font-mono font-bold text-sm py-3.5 rounded-xl transition-all cursor-pointer mt-2 shadow-[0_0_20px_rgba(79,209,197,0.3)] ${
                    status === "loading" ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  <FaPaperPlane size={13} />
                  <span>{status === "loading" ? "Transmitting..." : "Send Request"}</span>
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}