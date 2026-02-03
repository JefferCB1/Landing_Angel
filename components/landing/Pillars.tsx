"use client";
import { motion } from "framer-motion";
import { Copy, RefreshCw, DollarSign } from "lucide-react";
import ElectricBorder from "@/components/ui/ElectricBorder";

const pillars = [
    {
        icon: <Copy className="w-8 h-8 text-primary" />,
        title: "Sistemas Copiar y Pegar",
        description: "Plantillas listas para usar. No pierdas tiempo reinventando la rueda."
    },
    {
        icon: <RefreshCw className="w-8 h-8 text-primary" />,
        title: "Actualizaciones Semanales",
        description: "Mantente siempre a la vanguardia con nuevas automatizaciones cada semana."
    },
    {
        icon: <DollarSign className="w-8 h-8 text-primary" />,
        title: "Monetización",
        description: "Aprende a transformar estos sistemas en servicios de alto valor para tus clientes."
    }
];

export default function Pillars() {
    return (
        <section className="py-24 px-4 bg-transparent relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">La Hoja de Ruta</h2>
                    <p className="text-secondary max-w-2xl mx-auto">Tres pilares fundamentales para tu éxito con IA</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="h-full"
                        >
                            <ElectricBorder
                                color="#8A00FF"
                                className="h-full p-8 rounded-2xl bg-surface/5 border border-white/5 transition-all duration-300 relative overflow-hidden"
                                chaos={0.08}
                                speed={1.5}
                            >
                                {/* Adjusted bottom line position */}
                                <div className="absolute inset-x-0 -bottom-2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-[2px]" />

                                <div className="bg-surface p-3 rounded-lg w-fit mb-6 shadow-[0_0_15px_rgba(138,0,255,0.1)] transition-shadow">
                                    {pillar.icon}
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-white transition-colors">{pillar.title}</h3>
                                <p className="text-secondary leading-relaxed">{pillar.description}</p>
                            </ElectricBorder>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
