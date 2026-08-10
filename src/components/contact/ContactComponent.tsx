"use client";

import { useState } from "react";
import Reveal from "../Reveal";
import SectionLabel from "../SectionLabel";
import toast from "react-hot-toast";

type Status = "idle" | "loading" | "success" | "error";

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
        // Server response failed to parse as JSON
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
    }
  }

  return (
    <div className="text-[#E8ECF4] font-mono leading-relaxed min-h-[78vh]">
      <div className="max-page-width mx-auto px-6 py-6">
        <SectionLabel method="POST"> /contact</SectionLabel>
        <Reveal>
          <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:pt-12">
            {/* Left Side */}
            <div className="flex flex-col flex-1 max-w-lg">
              <p className="text-xs md:text-sm font-semibold text-[#4FD1C5] uppercase tracking-wider mb-2">
                Get In Touch
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Let&apos;s build something real.
              </h1>
              <p className="text-sm md:text-base text-[#7C8AA8] font-sans leading-relaxed">
                Have a project in mind, a question about backend engineering or DevOps,
                or want to collaborate? Send a message and I&apos;ll get back to you soon.
              </p>
            </div>

            {/* Right Side - Form */}
            <div className="w-full max-w-md rounded-xl p-6 md:p-8 bg-[#121A2E] border border-[#26314f] shadow-xl">
              <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <span>✉️</span> Send Message
              </h2>

              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-[#7C8AA8]">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-[#0B1120] border border-[#26314f] rounded-lg px-4 py-3 text-sm text-white placeholder-[#5C6884] outline-none focus:border-[#4FD1C5] transition-colors"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-[#7C8AA8]">Email</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-[#0B1120] border border-[#26314f] rounded-lg px-4 py-3 text-sm text-white placeholder-[#5C6884] outline-none focus:border-[#4FD1C5] transition-colors"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-[#7C8AA8]">Message</label>
                  <textarea
                    placeholder="Your message details..."
                    rows={4}
                    className="bg-[#0B1120] border border-[#26314f] rounded-lg px-4 py-3 text-sm text-white placeholder-[#5C6884] outline-none focus:border-[#4FD1C5] transition-colors resize-none"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  disabled={status === "loading"}
                  type="submit"
                  className={`bg-[#4FD1C5] hover:bg-[#38b2ac] text-[#0B1120] font-semibold text-sm py-3 rounded-lg transition-all cursor-pointer mt-2 ${
                    status === "loading" ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}