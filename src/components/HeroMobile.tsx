"use client";

import Image from "next/image";
import { ClipText } from "@/components/ClipText";
import { Button } from "@/components/Button";

const HeroMobile = () => (
    <div className="lg:hidden relative h-[100dvh]">
        <Image
            src="/pw-mobile.avif"
            alt="Peter Weiser"
            fill
            priority
            className="object-cover w-full h-full grayscale"
        />
        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-pearl space-y-4">
            <ClipText>
                <h2 className="xs:text-6xl text-4xl font-bold leading-tight xs:pb-4">
                    <span>Peter{" "}</span>
                    <br className="hidden sm:inline-block" />
                    <span className="sm:block text-gray-400">Weiser</span>
                </h2>
            </ClipText>
            <ClipText>
                <p className="md:text-3xl xs:text-lg text-[0.9rem] pb-2 font-bold">
                    Creative Full-Stack Product Developer
                </p>
                <p className="md:text-2xl xs:text-base font-semibold text-sm text-gray-300 md:max-w-[80%]">
                    I build complete digital products from idea to pixel.
                </p>
            </ClipText>
            <div className="flex flex-row xs:gap-x-4 gap-x-2 justify-between xs:justify-start pt-4">
                <Button
                    className="border bg-gray-900 text-pearl hover:bg-gray-800 xs:px-8 px-4 py-4 rounded-none text-lg font-medium"
                    onClick={() =>
                        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                    }
                >
                    View My Work
                </Button>
                <Button
                    variant="outline"
                    className="border bg-gray-900 text-pearl hover:bg-gray-800 xs:px-8 px-4 py-4 rounded-none text-lg font-medium"
                    onClick={() =>
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }
                >
                    Get In Touch
                </Button>
            </div>
        </div>
    </div>
);

export default HeroMobile;
