"use client";
import { motion, useMotionTemplate, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Sparkles, Users, Youtube, Instagram } from "lucide-react";


import { MouseEvent } from "react";

export default function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const xRange = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-20, 20]);
    const yRange = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 800], [-10, 10]);

    const x = useSpring(xRange, { stiffness: 50, damping: 15, mass: 1 });
    const y = useSpring(yRange, { stiffness: 50, damping: 15, mass: 1 });

    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden group py-20"
            onMouseMove={handleMouseMove}
        >
            {/* Background Effect moved to global page.tsx */}

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center justify-center gap-2 mb-8"
                >
                    <span className="px-3 py-1 rounded-full border border-border bg-surface/50 text-xs font-medium text-secondary uppercase tracking-wider backdrop-blur-sm">
                        Ángel Aparicio
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ x, y }}
                    className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-16"
                >
                    ¿Listo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A00FF] via-[#a855f7] to-[#e879f9] glow-text-gradient">automatizar el 80%</span> de tu trabajo y facturar servicios de IA sin saber programar?
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative group mb-20"
                >
                    <a
                        href="https://tally.so/r/rjPYq2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105"
                    >
                        <span className="relative z-10">Empezar Ahora</span>
                        <ArrowRight className="w-5 h-5 relative z-10" />
                        <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-colors" />
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-white shadow-[0_0_20px_white]" />
                    </a>
                </motion.div>

                {/* Social Proof Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="relative group mt-10 md:mt-16"
                >
                    <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 md:gap-8 px-8 py-4 bg-surface/10 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(138,0,255,0.15)] overflow-hidden">
                        <div className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-sm md:text-base font-medium text-white/90">+5,000 Estudiantes</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Youtube className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-sm md:text-base font-medium text-white/90">18k Suscriptores</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Instagram className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-sm md:text-base font-medium text-white/90">231k Seguidores</span>
                        </div>

                        {/* Interactive Shine Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
                    </div>

                    {/* Gradient Border Glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500" />
                </motion.div>
            </div>
        </section>
    );
}
