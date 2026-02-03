"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Authority() {
    return (
        <section className="py-32 px-4 overflow-hidden relative">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

                {/* Profile Image Placeholder - In a real scenario, use actual image */}
                <div className="w-full md:w-1/2 relative flex justify-center py-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative z-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
                    >
                        <Image
                            src="/angel-profile.png"
                            alt="Ángel Apareció"
                            fill
                            className="object-contain drop-shadow-[0_0_30px_rgba(138,0,255,0.3)]"
                        />
                    </motion.div>

                    {/* Subtle Glow Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-[80px] -z-10" />
                </div>

                <div className="w-full md:w-1/2 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ángel Apareció <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 text-3xl md:text-4xl">
                                Estratega Técnico
                            </span>
                        </h2>

                        <p className="text-secondary text-lg leading-relaxed mb-6">
                            No soy solo un divulgador. Soy experto en IA y automatización aplicada.
                            Mi trayectoria se basa en construir sistemas que funcionan, no en teoría vacía.
                        </p>

                        <ul className="space-y-4">
                            {['Experto en IA Generativa', 'Arquitecto de Automatizaciones', 'Consultor de Negocios Digitales'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white">
                                    <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#8A00FF]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
