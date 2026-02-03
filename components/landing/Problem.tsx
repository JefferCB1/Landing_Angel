"use client";
import { motion } from "framer-motion";

export default function Problem() {
    return (
        <section className="py-24 px-4 relative">
            <div className="max-w-4xl mx-auto text-center py-16 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-3xl md:text-4xl font-medium leading-relaxed">
                        "La IA avanza rápido, tú te estás quedando atrás. <br />
                        <span className="text-secondary">Deja de usar prompts básicos y empieza a construir ingeniería real."</span>
                    </h2>
                </motion.div>
            </div>
        </section>
    );
}
