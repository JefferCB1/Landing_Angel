"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimationType = "fadeIn" | "slideUp" | "slideDown" | "blurIn";
type SplitType = "word" | "character" | "line";

interface TextAnimateProps {
    children: string;
    className?: string;
    animation?: AnimationType;
    by?: SplitType;
    delay?: number;
    duration?: number;
}

export function TextAnimate({
    children,
    className,
    animation = "slideUp",
    by = "word",
    delay = 0,
    duration = 0.5,
}: TextAnimateProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: delay,
            },
        },
    };

    const childVariants = {
        hidden: {
            opacity: 0,
            y: animation === "slideUp" ? 20 : animation === "slideDown" ? -20 : 0,
            filter: animation === "blurIn" ? "blur(10px)" : "none",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: duration,
            },
        },
    };

    const segments = by === "word" ? children.split(" ") : children.split("");

    return (
        <motion.span
            className={cn("inline-block", className)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={containerVariants}
        >
            {segments.map((segment, i) => (
                <motion.span
                    key={i}
                    variants={childVariants}
                    className="inline-block whitespace-pre"
                >
                    {segment}
                    {by === "word" && i < segments.length - 1 && " "}
                </motion.span>
            ))}
        </motion.span>
    );
}
