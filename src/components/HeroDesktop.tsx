"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { ClipText } from "@/components/ClipText";

const HeroDesktop = () => (
    <>
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden lg:block lg:col-span-5 space-y-8 pl-24 2xl:pl-0"
        >
            <div className="space-y-6">
                <ClipText>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight text-gray-900 dark:text-pearl">
                        <span className="block">Peter</span>
                        <span className="block text-gray-600 dark:text-gray-400">
                            Weiser
                        </span>
                    </h1>
                </ClipText>
                <ClipText>
                    <p className="text-lg sm:text-xl lg:text-base xl:text-2xl lg:min-w-[35rem] pb-4 font-bold leading-relaxed text-gray-700 dark:text-gray-300">
                        Creative Full-Stack Product Developer
                    </p>
                    <p className="text-base sm:text-lg lg:text-[0.75rem] xl:text-lg font-semibold xl:leading-relaxed lg:leading-5 leading-relaxed max-w-lg text-gray-600 dark:text-gray-400">
                        I build complete digital products from idea to pixel.
                    </p>
                </ClipText>
            </div>
            <div className="flex gap-4 pt-4">
                <Button
                    className="border border-gray-800 bg-gray-900 text-pearl hover:bg-gray-800 px-8 py-4 rounded-none text-lg font-medium dark:border-pearl"
                    onClick={() =>
                        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                    }
                >
                    View My Work
                </Button>
                <Button
                    variant="outline"
                    className="border border-gray-900 text-gray-900 px-8 py-4 rounded-none text-lg font-medium hover:bg-gray-900 hover:text-pearl dark:border-pearl dark:text-pearl dark:hover:bg-gray-900 dark:hover:text-pearl"
                    onClick={() =>
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }
                >
                    Get In Touch
                </Button>
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden lg:block lg:col-span-7 h-screen relative"
        >
            <div className="absolute inset-0 translate-x-1/2">
                <div className="relative h-full w-[150%] -ml-[30%]">
                    <Image
                        src="/pw.avif"
                        alt="Peter Weiser"
                        width={400}
                        height={400}
                        priority
                        className="h-full w-auto object-cover hover:grayscale-0 grayscale duration-1000 ease-in-out transition-all mx-auto relative z-10"
                        style={{ minHeight: "100%", objectPosition: "center" }}
                    />
                </div>
            </div>
        </motion.div>
    </>
);

export default HeroDesktop;
