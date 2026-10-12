"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const ScrollIndicator = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="hidden ms:block absolute bottom-6 right-0 lg:right-1/4 -translate-x-1/2 lg:translate-x-0 z-20"
    >
        <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="cursor-pointer"
            onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
        >
            <Icon
                icon="line-md:arrow-down"
                className="w-10 h-10 dark:text-pearl lg:text-gray-900 text-pearl"
            />
        </motion.div>
    </motion.div>
);

export default ScrollIndicator;
