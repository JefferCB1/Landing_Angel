"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        quote: "Antes pasaba horas configurando zaps que se rompían. Ahora tengo un enjambre de agentes autónomos que gestionan todo mi negocio mientras duermo.",
        name: "Carlos Mendoza",
        role: "CEO, TechFlow",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100"
    },
    {
        quote: "La claridad con la que Ángel explica conceptos complejos es increíble. Implementé mi primer sistema de IA en una semana y reduje mi carga operativa un 40%.",
        name: "Sofia Herrera",
        role: "Founder, Digital Scale",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100"
    },
    {
        quote: "No es solo un curso, es una transformación completa de mentalidad. Entender cómo orquestar IAs ha sido la mejor inversión para mi agencia este año.",
        name: "Javier Torres",
        role: "Director, Marketing Pro",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100"
    }
];

export default function Testimonials() {
    return (
        <section className="relative py-24 px-4 overflow-hidden">
            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tight"
                    >
                        Resultados reales de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A00FF] via-[#a855f7] to-[#e879f9] glow-text-gradient">Automatización</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-secondary/80"
                    >
                        Lo que dicen quienes ya han transformado sus negocios.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 rounded-3xl bg-surface/10 border border-transparent backdrop-blur-sm hover:border-primary/50 transition-colors duration-300 overflow-hidden"
                        >
                            <Quote className="w-10 h-10 text-primary mb-6 opacity-80 group-hover:scale-110 transition-transform duration-300" />

                            <p className="text-lg text-white/90 mb-8 leading-relaxed">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-primary/50 transition-all">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-bold text-white">{testimonial.name}</div>
                                    <div className="text-sm text-secondary">{testimonial.role}</div>
                                </div>
                            </div>

                            {/* Hover Shine Effect */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
