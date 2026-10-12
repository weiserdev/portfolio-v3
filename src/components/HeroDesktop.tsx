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
            className="relative hidden h-[100dvh] lg:col-span-7 lg:block"
        >
            {/* Keep the portrait viewport-sized and extend its left edge beyond the screen. */}
            <Image
                src="/pw.avif"
                alt="Peter Weiser"
                width={1316}
                height={1195}
                priority
                sizes="(min-width: 1440px) 900px, 56vw"
                className="absolute bottom-0 left-1/2 h-[min(100dvh,56vw)] w-auto max-w-none -translate-x-[52%] object-bottom grayscale transition-all duration-1000 ease-in-out hover:grayscale-0 hover:saturate-[65%] min-[1440px]:-translate-x-[65%]"
            />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 hidden lg:col-span-5 lg:flex lg:flex-col lg:justify-center lg:space-y-8 lg:pl-8 lg:pr-5 xl:pl-16 xl:pr-6"
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
                    <p className="pb-4 text-lg font-bold leading-relaxed text-gray-700 dark:text-gray-300 sm:text-xl lg:text-base xl:text-2xl">
                        Creative Full-Stack Product Developer
                    </p>
                    <p className="max-w-lg text-base font-semibold leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg lg:text-[0.75rem] lg:leading-5 xl:text-lg xl:leading-relaxed">
                        I build complete digital products from idea to pixel.
                    </p>
                </ClipText>
            </div>

            <div className="flex gap-4 pt-4">
                <Button
                    className="border border-gray-800 bg-gray-900 text-pearl hover:bg-gray-800 px-8 py-4 rounded-none text-lg font-medium dark:border-pearl"
                    onClick={() =>
                        document.getElementById("projects")?.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                >
                    View My Work
                </Button>
                <Button
                    variant="outline"
                    className="border border-gray-900 text-gray-900 px-8 py-4 rounded-none text-lg font-medium hover:bg-gray-900 hover:text-pearl dark:border-pearl dark:text-pearl dark:hover:bg-gray-900 dark:hover:text-pearl"
                    onClick={() =>
                        document.getElementById("contact")?.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                >
                    Get In Touch
                </Button>
            </div>
        </motion.div>
    </>
);

export default HeroDesktop;
