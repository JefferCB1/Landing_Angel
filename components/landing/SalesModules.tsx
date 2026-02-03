"use client";
import { motion } from "framer-motion";
import { Clock, Bot, Rocket } from "lucide-react";
import Image from "next/image";

export default function SalesModules() {
    return (
        <section className="py-24 px-4 bg-background relative z-10 space-y-32">

            {/* Module 1: Pain Point - Time */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative order-2 md:order-1"
                >
                    <div className="relative p-8 rounded-2xl bg-surface/10 border border-white/10 backdrop-blur-sm overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-50" />
                        <div className="relative z-10 flex items-center justify-center h-64 md:h-80">
                            <Clock className="w-32 h-32 text-red-400 opacity-80" />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6 order-1 md:order-2"
                >
                    <h3 className="text-3xl md:text-4xl font-bold">
                        Deja de perder <span className="text-red-400">cientos de horas</span> en tareas repetitivas
                    </h3>
                    <p className="text-lg text-secondary leading-relaxed">
                        Hacer lo mismo una y otra vez no es trabajar, es desgastarse. Si tus días se consumen en "copy-paste", responder los mismos emails y organizar excels manuales, estás desperdiciando tu potencial creativo y de facturación.
                    </p>
                    <ul className="space-y-3 text-secondary/90">
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                            Elimina el error humano.
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                            Recupera tu libertad de horario.
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                            Deja que los robots hagan el trabajo sucio.
                        </li>
                    </ul>
                </motion.div>
            </div>

            {/* Module 2: Solution - The AI Team */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h3 className="text-3xl md:text-4xl font-bold">
                        Tu nuevo empleado del mes: <span className="text-primary">La Inteligencia Artificial</span>
                    </h3>
                    <p className="text-lg text-secondary leading-relaxed">
                        Imagina tener un equipo de expertos trabajando 24/7 para ti, sin sueldo, sin vacaciones y sin quejas. Mis sistemas de agentes autónomos no solo responden chats, ejecutan procesos complejos de negocio mientras tú te enfocas en cerrar ventas.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="p-4 rounded-xl bg-surface/20 border border-white/5">
                            <h4 className="font-bold text-white mb-1">Sin Código</h4>
                            <p className="text-sm text-secondary">Herramientas visuales e intuitivas.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-surface/20 border border-white/5">
                            <h4 className="font-bold text-white mb-1">Plug & Play</h4>
                            <p className="text-sm text-secondary">Sistemas listos para instalar.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="relative p-8 rounded-2xl bg-surface/10 border border-white/10 backdrop-blur-sm overflow-hidden group hover:border-primary/50 transition-colors duration-500">
                        <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-transparent opacity-50" />
                        <div className="relative z-10 flex items-center justify-center h-64 md:h-80">
                            <Bot className="w-32 h-32 text-primary opacity-90 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        {/* Shine */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
                    </div>
                </motion.div>
            </div>

            {/* Module 3: Benefit - Scalability */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative order-2 md:order-1"
                >
                    <div className="relative p-8 rounded-2xl bg-surface/10 border border-white/10 backdrop-blur-sm overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-50" />
                        <div className="relative z-10 flex items-center justify-center h-64 md:h-80">
                            <Rocket className="w-32 h-32 text-green-400 opacity-80" />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6 order-1 md:order-2"
                >
                    <h3 className="text-3xl md:text-4xl font-bold">
                        Escalabilidad <span className="text-green-400">Infinita</span>
                    </h3>
                    <p className="text-lg text-secondary leading-relaxed">
                        Cuando tu entrega de servicio depende de tu tiempo, tienes un techo de ingresos. Cuando automatizas, ese techo desaparece. Aprende a crear productos de IA que puedes vender 10, 100 o 1000 veces sin aumentar tu carga de trabajo ni un minuto.
                    </p>
                    <ul className="space-y-3 text-secondary/90">
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                            Ingresos pasivos reales.
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                            Ofertas de alto valor (High Ticket).
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                            Libertad financiera.
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
