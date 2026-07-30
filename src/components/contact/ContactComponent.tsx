"use client";

import { useState } from "react";
import Reveal from "../Reveal";
import SectionLabel from "../SectionLabel";
import toast from "react-hot-toast";


type Status = "idle" | "loading" | "success" | "error";

const ContactComponent = () => {
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
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "That email doesn't look right.";
        if (!formData.message.trim()) return "Please enter a message.";
        return null;
    }

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
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
                // server didn't return JSON (e.g. crashed before responding properly)
            }

            if (!res.ok) {
                throw new Error(data?.error || `Request failed (${res.status})`);
            }

            setStatus("success");
            toast.success("Message sent!");
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            setStatus("error");
            toast.error(err instanceof Error ? err.message : "Unknown error");
        }
    }
    return (
        <div className="text-[#E8ECF4] font-mono leading-relaxed min-h-[78vh]">
            {/* topbar */}
            {/* <TopBar to="/contact" /> */}

            <div className="max-page-width mx-auto px-6 py-6">
                {/* header */}
                <SectionLabel method="POST"> /contact</SectionLabel>
                <Reveal>
                    <section className="w-full flex flex-col md:flex-row items-center justify-between geist-regular gap-4 md:pt-18">
                        {/* Left Side */}
                        <div className="flex flex-col">
                            <p className="text-sm md:text-md max-md:text-center font-medium text-green-600 uppercase mb-2">Get In Touch</p>
                            <h1 className="text-3xl/8 md:text-5xl/12 max-md:text-center font-bold text-gray-200 max-w-3xs mb-4">Let's build something real.</h1>
                            <p className="text-sm/4 md:text-base/5.5 text-gray-400 max-md:text-center max-w-2xs">Let's turn your ideas into meaningful products that solve real problems and create real impact.</p>
                        </div>

                        {/* Right Side - Form */}
                        <div className="w-full max-w-sm rounded-xl p-6 md:p-8 bg-color backdrop-blur-sm add-border">
                            <h2 className="text-base font-medium text-white mb-5.5">Send Message</h2>
                            {/* name  */}
                            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-2.5">
                                    <label className="text-xs md:text-sm text-zinc-400">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="bg-slate-200/40 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white/90 placeholder-zinc-700 outline-none focus:border-neutral-600 transition-colors"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                {/* email */}
                                <div className="flex flex-col gap-2.5">
                                    <label className="text-xs md:text-sm text-zinc-400">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="bg-slate-200/40 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white/90 placeholder-zinc-700 outline-none focus:border-neutral-600 transition-colors"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                {/* message */}
                                <div className="flex flex-col gap-2.5">
                                    <label className="text-xs md:text-sm text-zinc-400">Message</label>
                                    <textarea
                                        placeholder="Your message.."
                                        rows={4}
                                        className="bg-slate-200/40 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white/90 placeholder-zinc-700 outline-none focus:border-neutral-600 transition-colors resize-none"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <button
                                    disabled={status === "loading"}
                                    type="submit"
                                    className={`bg-green-600 hover:bg-green-700 text-white text-sm md:text-base py-3 rounded-xl
                       transition-colors cursor-pointer mt-1 ${status === "loading" ? "opacity-50 cursor-not-allowed" : ""}`}
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </section>
                </Reveal>
            </div >
        </div >
    )
}

export default ContactComponent