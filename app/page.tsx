"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useState, MouseEvent } from "react";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import VideoSection from "@/components/landing/VideoSection";
import Testimonials from "@/components/landing/Testimonials";
import Features from "@/components/landing/Features";
import Authority from "@/components/landing/Authority";
import { CTAFinal, Footer } from "@/components/landing/CTA";
import LeadForm from "@/components/landing/LeadForm";

export default function Home() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleMouseMove({ clientX, clientY }: MouseEvent) {
        mouseX.set(clientX);
        mouseY.set(clientY);
    }

    return (
        <main
            className="min-h-screen flex flex-col relative group overflow-hidden bg-background"
            onMouseMove={handleMouseMove}
        >
            <LeadForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Global Fixed Backgrounds */}
            <div className="fixed inset-0 z-0">
                {/* ... (rest of background code) ... */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
                {/* Global Grid */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
            </div>

            {/* Global Interactive Cursor Spotlight */}
            <motion.div
                className="pointer-events-none fixed inset-0 z-[1] opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            1000px circle at ${mouseX}px ${mouseY}px,
                            rgba(138, 0, 255, 0.25),
                            transparent 80%
                        )
                    `,
                }}
            />

            {/* Content with z-index to sit above spotlight but let light through if needed */}
            <div className="relative z-10">
                <Hero />
                <Problem />
                <VideoSection />
                <Testimonials />
                <Features />
                <Authority />
                <CTAFinal onOpenModal={() => setIsModalOpen(true)} />
                <Footer />
            </div>
        </main>
    );
}
