"use client";

import Image from "next/image";
import { ClipText } from "@/components/ClipText";
import { Button } from "@/components/Button";

const HeroMobile = () => (
    <div className="relative isolate h-[100dvh] overflow-hidden lg:hidden">
        {/* Keep the portrait full-bleed on vertically oriented screens. */}
        <div className="hero-mobile-portrait pointer-events-none absolute inset-0">
            <Image
                src="/pw-mobile.avif"
                alt="Peter Weiser"
                width={607}
                height={1080}
                priority
                sizes="(max-width: 1023px) 100vw, 1px"
                className="h-full w-full object-cover object-top grayscale"
            />
        </div>

        {/* Use the full-width transparent cutout on tablets and landscape phones. */}
        <div className="hero-mobile-landscape-image pointer-events-none absolute inset-0 hidden">
            <Image
                src="/pw.avif"
                alt="Peter Weiser"
                width={1316}
                height={1195}
                priority
                sizes="(max-width: 1023px) 100vw, 1px"
                className="absolute bottom-0 h-full w-auto max-w-none grayscale"
            />
        </div>

        {/* Preserve contrast behind the text without fading the photo edges. */}
        <div className="hero-mobile-shade pointer-events-none absolute inset-x-0 bottom-0 h-[64%] bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

        <div className="hero-mobile-copy absolute inset-x-0 bottom-0 z-10 px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-pearl">
            <div className="hero-mobile-copy-body flex w-full flex-col gap-3">
                <ClipText>
                    <h2 className="hero-mobile-heading font-bold leading-[1.04] tracking-widest">
                        <span className="block">Peter</span>
                        <span className="block text-gray-400">Weiser</span>
                    </h2>
                </ClipText>

                <ClipText>
                    <div className="flex flex-col gap-2">
                        <p className="hero-mobile-role font-bold leading-snug">
                            Creative Full-Stack Product Developer
                        </p>
                        <p className="hero-mobile-description text-sm font-semibold leading-relaxed text-gray-300">
                            I build complete digital products from idea to pixel.
                        </p>
                    </div>
                </ClipText>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                    <Button
                        className="min-h-10 rounded-none border border-gray-700 bg-gray-900 px-3 py-2.5 text-sm font-medium text-pearl hover:bg-gray-800 sm:px-5 sm:text-base"
                        onClick={() =>
                            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        View My Work
                    </Button>
                    <Button
                        variant="outline"
                        className="min-h-10 rounded-none border border-gray-700 bg-gray-900 px-3 py-2.5 text-sm font-medium text-pearl hover:bg-gray-800 sm:px-5 sm:text-base"
                        onClick={() =>
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        Get In Touch
                    </Button>
                </div>
            </div>
        </div>

        <style jsx>{`
            .hero-mobile-heading {
                font-size: clamp(2.7rem, 12vw, 5.5rem);
            }

            .hero-mobile-role {
                font-size: clamp(1rem, 3.6vw, 1.5rem);
            }

            /* Portrait tablets use the wider cutout to avoid enlarging the mobile close-up. */
            @media (orientation: portrait) and (min-width: 641px) {
                .hero-mobile-portrait {
                    display: none;
                }

                .hero-mobile-landscape-image {
                    display: block;
                }

                .hero-mobile-landscape-image :global(img) {
                    left: 50%;
                    height: 100dvh;
                    width: auto;
                    max-width: none;
                    transform: translateX(-50%);
                }

                .hero-mobile-copy {
                    padding-right: clamp(1.5rem, 3.5vw, 2.5rem);
                    padding-left: clamp(1.5rem, 3.5vw, 2.5rem);
                }

                .hero-mobile-heading {
                    font-size: clamp(3.5rem, 10.5vw, 4.5rem);
                }

                .hero-mobile-role {
                    font-size: clamp(1.05rem, 2.5vw, 1.375rem);
                }
            }

            /* Shrink the copy for short portrait viewports rather than moving the image. */
            @media (orientation: portrait) and (max-height: 620px) {
                .hero-mobile-heading {
                    font-size: clamp(2rem, 10.5vw, 2.9rem);
                }

                .hero-mobile-role {
                    font-size: 0.9rem;
                }

                .hero-mobile-copy {
                    padding-bottom: max(0.75rem, env(safe-area-inset-bottom));
                }

                .hero-mobile-copy-body {
                    gap: 0.5rem;
                }
            }

            /* Landscape layouts place the cutout on the left and the copy on the right. */
            @media (orientation: landscape) {
                .hero-mobile-portrait,
                .hero-mobile-shade {
                    display: none;
                }

                .hero-mobile-landscape-image {
                    display: block;
                }

                .hero-mobile-landscape-image :global(img) {
                    left: calc(23vw - 55dvh);
                    height: 100dvh;
                    width: auto;
                    max-width: none;
                }

                .hero-mobile-copy {
                    inset: 0 3% 0 52%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 1.25rem 0;
                    color: #111827;
                }

                .hero-mobile-copy-body {
                    gap: clamp(0.65rem, 2vh, 1.5rem);
                }

                .hero-mobile-heading {
                    font-size: clamp(2.4rem, 6.3vw, 5.5rem);
                }

                .hero-mobile-role {
                    font-size: clamp(0.875rem, 2.2vw, 1.375rem);
                }

                .hero-mobile-copy :global(.hero-mobile-description) {
                    color: #4b5563;
                    font-size: clamp(0.8rem, 1.65vw, 1.125rem);
                }

                :global(.dark) .hero-mobile-copy {
                    color: #fdfdff;
                }

                :global(.dark) .hero-mobile-copy :global(.hero-mobile-description) {
                    color: #d1d5db;
                }
            }

            @media (orientation: landscape) and (min-width: 900px) {
                .hero-mobile-copy {
                    left: 56%;
                }
            }

            /* A slightly smaller portrait leaves more room for text on tall landscape screens. */
            @media (orientation: landscape) and (min-height: 650px) {
                .hero-mobile-landscape-image :global(img) {
                    left: calc(21vw - 50.6dvh);
                    height: 92dvh;
                }
            }

            @media (orientation: landscape) and (max-height: 420px) {
                .hero-mobile-heading {
                    font-size: clamp(1.75rem, 5vw, 3rem);
                }

                .hero-mobile-role {
                    font-size: clamp(0.8rem, 2vw, 1rem);
                }

                .hero-mobile-copy-body {
                    gap: 0.5rem;
                }

                .hero-mobile-copy {
                    padding-top: 0.625rem;
                    padding-bottom: 0.625rem;
                }
            }
        `}</style>
    </div>
);

export default HeroMobile;
