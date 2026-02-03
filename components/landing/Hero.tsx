"use client";
import { motion, useMotionTemplate, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Sparkles, Users, Youtube, Instagram } from "lucide-react";
import DecryptedText from "@/components/ui/DecryptedText";
import ProfileCard from "@/components/ui/ProfileCard";
import LiquidButton from "@/components/ui/LiquidButton";
import TallyModal from "@/components/ui/TallyModal";
import CountUp from "@/components/ui/CountUp";
import { MouseEvent, useState } from "react";

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
            className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden group py-20"
            onMouseMove={handleMouseMove}
        >
            {/* Background Effect moved to global page.tsx */}

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Column: Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center justify-center md:justify-start gap-2 mb-8"
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
                        className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-8 py-4"
                    >
                        <div className="block">
                            <DecryptedText
                                text="¿Listo para automatizar"
                                animateOn="view"
                                revealDirection="center"
                                speed={100}
                                maxIterations={20}
                                characters="ABCD1234!?"
                                className="inline-block"
                                parentClassName="inline-block"
                                encryptedClassName="opacity-30"
                            />
                        </div>
                        <div className="block mt-2">
                            <DecryptedText
                                text="el 80% de tu trabajo"
                                animateOn="view"
                                revealDirection="center"
                                speed={100}
                                maxIterations={20}
                                characters="ABCD1234!?"
                                className="inline-block"
                                parentClassName="inline-block"
                                encryptedClassName="opacity-30"
                            />
                        </div>
                        <span className="text-2xl md:text-4xl block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#b16eea] via-[#c084fc] to-[#e879f9] glow-text-gradient pb-2">
                            y facturar servicios de IA sin saber programar?
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-secondary max-w-2xl mb-12"
                    >
                        Accede a las clases exclusivas de Ángel Aparicio. Aprende a construir sistemas inteligentes y automatizaciones reales que ponen tu negocio en piloto automático.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative group mb-16"
                    >
                        {/* Replace StarBorder with LiquidButton */}
                        <LiquidButton
                            onClick={() => setIsModalOpen(true)}
                            className="py-6 px-12 rounded-full text-xl"
                            size="lg"
                        >
                            <span className="flex items-center gap-3">
                                Empezar Ahora
                                <ArrowRight className="w-6 h-6" />
                            </span>
                        </LiquidButton>
                    </motion.div>

                    {/* Social Proof Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="relative group w-full max-w-md"
                    >
                        <div className="relative z-10 flex flex-wrap items-center justify-center md:justify-start gap-6 px-8 py-4 bg-surface/10 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(138,0,255,0.15)] overflow-hidden">
                            <div className="flex items-center gap-3">
                                <Users className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                                <span className="text-sm md:text-base font-medium text-white/90 flex items-center">
                                    +
                                    <CountUp
                                        to={5000}
                                        duration={2.5}
                                        className="mx-0.5"
                                        separator=","
                                        from={0}
                                    />
                                    Alumnos
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Youtube className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                                <span className="text-sm md:text-base font-medium text-white/90 flex items-center">
                                    <CountUp
                                        to={18000}
                                        duration={2.5}
                                        className="mr-1"
                                        separator=","
                                        from={0}
                                    />
                                    Subs
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Profile Card */}
                <div className="flex items-center justify-center w-full h-[600px] relative">
                    <ProfileCard
                        name="Ángel Aparicio"
                        title="Experto en Automatizaciones e IA"
                        handle="angel_aparicio"
                        status="Online"
                        contactText="Contact Me"
                        avatarUrl="/angel-profile.png"
                        showUserInfo={true}
                        enableTilt={true}
                        enableMobileTilt={false}
                        showIcon={true}
                        showBehindGlow={true}
                        behindGlowColor="rgba(138, 0, 255, 0.5)"
                        customInnerGradient="linear-gradient(145deg, #0f0518 0%, #1a0b2e 100%)"
                    />
                </div>
            </div>

            <TallyModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                formId="rjPYq2"
            />
        </section>
    );
}
