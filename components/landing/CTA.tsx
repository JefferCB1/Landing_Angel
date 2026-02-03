"use client";
import { motion } from "framer-motion";

export function CTAFinal({ onOpenModal }: { onOpenModal: () => void }) {
    return (
        <section className="py-32 px-4 text-center relative overflow-hidden">
            {/* Light Beam Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 shadow-[0_0_50px_#8A00FF]" />

            <div className="max-w-3xl mx-auto space-y-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold"
                >
                    El futuro no se espera,<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A00FF] via-[#a855f7] to-[#e879f9] glow-text-gradient">se automatiza.</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <button
                        onClick={onOpenModal}
                        className="relative px-12 py-5 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105"
                    >
                        <span className="relative z-10">Empezar ahora</span>
                        <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-colors" />
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-white shadow-[0_0_20px_white]" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="py-8 border-t border-border/30 text-center text-sm text-secondary/60">
            <p>© {new Date().getFullYear()} Ángel Aparicio. Todos los derechos reservados.</p>
        </footer>
    );
}
