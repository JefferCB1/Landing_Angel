"use client";
import { motion } from "framer-motion";

import CustomForm from "@/components/landing/CustomForm";

export function CTAFinal({ onOpenModal }: { onOpenModal: () => void }) {
    return (
        <section className="py-24 px-4 text-center relative overflow-hidden">
            {/* Light Beam Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 shadow-[0_0_50px_#8A00FF]" />

            <div className="max-w-4xl mx-auto space-y-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl md:text-6xl font-bold">
                        Oferta Irresistible:<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A00FF] via-[#a855f7] to-[#e879f9] glow-text-gradient block mt-2">
                            Automatiza Hoy
                        </span>
                    </h2>
                    <p className="text-lg text-secondary max-w-2xl mx-auto">
                        No dejes pasar la oportunidad de transformar tu negocio. Rellena el formulario y da el primer paso hacia la libertad operativa.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-full flex justify-center"
                >
                    <CustomForm />
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
