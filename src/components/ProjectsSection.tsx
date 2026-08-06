"use client"

import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/Card"
import { Badge } from "@/components/Badge"
import { ClipText } from "@/components/ClipText"
import { projects } from "@/data/projects"

const ProjectsSection = () => (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <ClipText>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-pearl">
                        Featured Projects
                    </h3>
                    <p className="sm:text-lg xs:text-md text-sm max-w-2xl font-bold mx-auto text-gray-600 dark:text-gray-400">
                        A selection of full-stack products, mobile apps, games, and interactive experiences built from idea to working product.
                    </p>
                </ClipText>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {projects.map((project, index) => (
                    <motion.section
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`group ${projects.length % 2 === 1 && index === projects.length - 1 ? "md:col-span-2 md:max-w-[50%] md:mx-auto" : ""}`}
                    >
                        <Card className="relative overflow-hidden border-0 shadow-md lg:hover:-translate-y-2 hover:shadow-xl transition-all duration-500 bg-pearl dark:bg-gray-700 flex flex-col h-full">
                            <div className="relative w-full">
                                <div className="relative w-full group">
                                    <Link
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                        aria-label={`${project.title} Live Demo Site`}
                                    >
                                        <div className="relative w-full aspect-[16/10] overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-contain object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                                            />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <CardContent className="px-6 pb-6 flex-1 flex flex-col md:-mt-12 -mt-5">
                                <ClipText>
                                    <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-pearl">{project.title}</h4>
                                    <p className="sm:text-base xs:text-md text-sm mb-6 text-gray-600 font-semibold dark:text-pearl flex-1">
                                        {project.description}
                                    </p>
                                </ClipText>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, ti) => (
                                        <Badge
                                            key={ti}
                                            title={tech}
                                            variant="secondary"
                                            className="bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-pearl text-xs"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="absolute bottom-4 right-4 flex gap-3">
                                    {project.frontend && (
                                        <Link
                                            href={project.frontend}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-pearl/90 p-2 hover:bg-pearl dark:bg-transparent dark:hover:bg-transparent rounded"
                                            aria-label={`${project.title} Frontend Repository`}
                                        >
                                            <Icon
                                                icon="octicon:mark-github-24"
                                                className="w-5 h-5 md:w-[1.6rem] md:h-[1.6rem] text-gray-900 hover:text-[#0d74e7] dark:text-pearl hover:scale-150 ease-in-out duration-300"
                                            />
                                        </Link>
                                    )}
                                    {project.backend && (
                                        <Link
                                            href={project.backend}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-pearl/90 p-2 hover:bg-pearl dark:bg-transparent dark:hover:bg-transparent rounded"
                                            aria-label={`${project.title} Backend Repository`}
                                        >
                                            <Icon
                                                icon="octicon:mark-github-24"
                                                className="w-5 h-5 md:w-[1.6rem] md:h-[1.6rem] text-gray-900 hover:text-[#0d74e7] dark:text-pearl hover:scale-150 ease-in-out duration-300"
                                            />
                                        </Link>
                                    )}
                                    {project.live && (
                                        <Link
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-pearl/90 p-2 hover:bg-pearl dark:bg-transparent dark:hover:bg-transparent rounded"
                                            aria-label={`${project.title} Live Demo`}
                                        >
                                            <Icon
                                                icon="tabler:external-link"
                                                className="w-5 h-5 md:w-[1.7rem] md:h-[1.7rem] text-gray-900 hover:text-[#228B22] dark:text-pearl hover:scale-150 ease-in-out duration-300"
                                            />
                                        </Link>
                                    )}
                                    {project.youtube && project.youtube.trim() !== "" && (
                                        <Link
                                            href={project.youtube}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-pearl/90 p-2 hover:bg-pearl dark:bg-transparent dark:hover:bg-transparent rounded"
                                            aria-label={`${project.title} YouTube Video`}
                                        >
                                            <Icon
                                                icon="mingcute:youtube-fill"
                                                className="w-6 h-6 md:w-7 md:h-7 text-gray-900 hover:text-[#CD201F] dark:text-pearl hover:scale-150 ease-in-out duration-300"
                                            />
                                        </Link>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.section>
                ))}
            </div>
        </div>
    </section>
)

export default ProjectsSection
