"use client";
import { motion } from "framer-motion";
import { Cpu, Zap, LineChart } from "lucide-react";

const features = [
    {
        icon: <Cpu className="w-8 h-8 text-primary" />,
        title: "Agentes Autónomos",
        description: "IA que trabaja sin supervisión. Crea equipos de trabajadores digitales incansables."
    },
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "Automatización de Procesos",
        description: "Conexiones avanzadas con Make y APIs. Olvida las tareas repetitivas para siempre."
    },
    {
        icon: <LineChart className="w-8 h-8 text-primary" />,
        title: "Implementación Real",
        description: "Casos prácticos de IA aplicada a negocios actuales. Retorno de inversión desde el día 1."
    }
];

export default function Features() {
    return (
        <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Lo que aprenderás</h2>
                    <p className="text-secondary max-w-2xl mx-auto">Sistemas de vanguardia para escalar tu negocio</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group p-8 rounded-2xl bg-surface/5 border border-white/5 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="bg-surface p-3 rounded-lg w-fit mb-6 group-hover:shadow-[0_0_15px_rgba(138,0,255,0.3)] transition-shadow">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-secondary leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
