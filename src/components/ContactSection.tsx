"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Card, CardContent } from "@/components/Card";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { Button } from "@/components/Button";
import { ClipText } from "@/components/ClipText";
import { sendContactEmail } from "@/lib/email";

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            await sendContactEmail(formData.name, formData.email, formData.message);
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });

            setTimeout(() => setStatus("idle"), 4000);
        } catch (error) {
            console.error("EmailJS error:", error);
            setStatus("error");

            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <section id="contact" className="py-20 px-4 bg-pearl dark:bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <ClipText>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-pearl">
                            Let’s Work Together
                        </h3>
                        <p className="sm:text-lg xs:text-md text-sm font-semibold max-w-xl mx-auto text-gray-600 dark:text-gray-400">
                            Have a product idea, creative concept, or existing application that needs to move forward? Let&apos;s build something great together.
                        </p>
                    </ClipText>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Static contact info – but without exposing raw email addresses */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Card className="shadow-lg md:h-[28rem] h-[30rem] bg-gray-50 dark:bg-gray-800">
                            <CardContent className="p-8">
                                <ClipText>
                                    <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-pearl">Get In Touch</h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Icon icon="mdi:alternate-email" className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                            <span className="text-gray-600 dark:text-pearl">
                                                {["contact", "@", "peterweiser.com"].join("")}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Icon icon="f7:phone-circle" className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                            <span className="text-gray-600 dark:text-pearl">+36 70 206 6450</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Icon icon="lsicon:map-location-outline" className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                            <span className="text-gray-600 dark:text-pearl">Available for remote work</span>
                                        </div>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-600">
                                        <p className="text-gray-600 dark:text-pearl">
                                            I&apos;m open to product-focused full-stack and frontend opportunities, as well as selected freelance and contract projects across Europe.
                                        </p>
                                    </div>
                                </ClipText>
                                {/* Social icons */}
                                <div className="mt-8 flex justify-evenly gap-5">
                                    <Link
                                        href="https://github.com/weiserdev"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Peter Weiser Github Profile"
                                    >
                                        <Icon icon="octicon:mark-github-24" className="md:w-12 w-10 md:h-12 h-10 text-gray-900 hover:text-[#0d74e7] dark:text-pearl cursor-pointer hover:scale-125 transition-transform duration-300" />
                                    </Link>
                                    <Link
                                        href="https://linkedin.com/in/pweiser"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Peter Weiser Linkedin Profile"
                                    >
                                        <Icon icon="mdi:linkedin" className="md:w-14 w-[2.75rem] md:h-14 h-[2.75rem] text-gray-900 hover:text-[#0072b1] dark:text-pearl cursor-pointer hover:scale-125 transition-transform duration-300" />
                                    </Link>
                                    <Link
                                        href="https://youtube.com/@WeiserDev"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Peter Weiser YouTube Channel"
                                    >
                                        <Icon icon="iconoir:youtube-solid" className="md:w-14 w-[2.75rem] md:h-14 h-[2.75rem] text-gray-900 hover:text-[#ff0000] dark:text-pearl cursor-pointer hover:scale-125 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Card className="shadow-lg md:h-[28rem] h-[30rem] bg-gray-50 dark:bg-gray-800">
                            <CardContent className="p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <Input
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            className="rounded-none border-gray-400 focus:border-gray-600 focus:ring-pearl dark:border-gray-600 dark:focus:border-gray-400 dark:focus:ring-gray-700 dark:bg-gray-700 dark:text-pearl"
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            className="rounded-none border-gray-300 focus:border-gray-600 focus:ring-pearl dark:border-gray-600 dark:focus:border-gray-400 dark:focus:ring-gray-700 dark:bg-gray-700 dark:text-pearl"
                                        />
                                    </div>
                                    <div>
                                        <Textarea
                                            placeholder="Your Message"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            required
                                            rows={8}
                                            className="resize-none rounded-none border-gray-300 focus:border-gray-600 focus:ring-pearl dark:border-gray-600 dark:focus:border-gray-400 dark:focus:ring-gray-700 dark:bg-gray-700 dark:text-pearl"
                                        />
                                    </div>

                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="w-full py-3 bg-gray-900 text-pearl hover:bg-gray-800 dark:bg-pearl dark:text-black dark:hover:bg-gray-100 rounded-none shadow-lg transition-shadow duration-300 flex items-center justify-center gap-2"
                                        >
                                            {status === "loading" && (
                                                <Icon icon="svg-spinners:90-ring-with-bg" className="w-5 h-5 animate-spin" />
                                            )}
                                            {status === "success"
                                                ? "Sent!"
                                                : status === "error"
                                                    ? "Error!"
                                                    : "Send Message"}
                                        </Button>
                                    </motion.div>
                                </form>

                                {/* Submission feedback */}
                                <div className="text-center pt-4">
                                    {status === "success" && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-green-600 font-semibold text-[0.8rem] lg:text-base"
                                        >
                                            Your message was sent successfully!
                                        </motion.p>
                                    )}
                                    {status === "error" && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-600 font-semibold text-[0.8rem] lg:text-base"
                                        >
                                            Something went wrong. Please try again.
                                        </motion.p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
