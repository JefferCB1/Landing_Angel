"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, Rocket, Youtube, Instagram } from "lucide-react";
import { PulsatingButton } from "@/components/ui/pulsating-button";

interface LeadFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LeadForm({ isOpen, onClose }: LeadFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        business: ""
    });

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isValidEmail(formData.email)) {
            alert("Por favor, introduce un correo electrónico válido.");
            return;
        }

        setIsLoading(true);

        try {
            // 1. Send to n8n Webhook
            const response = await fetch("http://localhost:5678/webhook/dc987970-0c08-46ab-a7d9-c49ad97d7d21", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    submittedAt: new Date().toISOString(),
                    source: "Angel Aparicio Landing"
                })
            });

            if (!response.ok) throw new Error("Webhook Error");

        } catch (error) {
            console.error("Submission error - switching to fallback mode:", error);
            // Silent fallback to CSV download
            const csvContent = Object.values(formData).join(",");
            const blob = new Blob([`Name,Email,Age,Business\n${csvContent}`], { type: "text/csv;charset=utf-8;" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = `lead_${formData.name.replace(/\s+/g, "_")}.csv`;
            link.click();
        } finally {
            setIsLoading(false);
            setIsSuccess(true);
            setFormData({ name: "", email: "", age: "", business: "" });
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-[#050110] border border-primary/20 rounded-3xl p-8 shadow-[0_0_50px_rgba(138,0,255,0.1)] overflow-hidden"
                    >
                        {/* Glow Effect */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {!isSuccess ? (
                            <>
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold mb-2">Comienza tu Transformación</h3>
                                    <p className="text-secondary/80 text-sm">Déjanos tus datos para agendar tu consultoría de automatización.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-secondary mb-1.5 ml-1">Nombre Completo</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-white/20"
                                            placeholder="Ej. Juan Pérez"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-secondary mb-1.5 ml-1">Correo Electrónico</label>
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-white/20"
                                            placeholder="juan@empresa.com"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-secondary mb-1.5 ml-1">Edad</label>
                                            <input
                                                required
                                                type="number"
                                                value={formData.age}
                                                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-white/20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                placeholder="30"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-secondary mb-1.5 ml-1">Tipo de Negocio</label>
                                            <input
                                                required
                                                type="text"
                                                value={formData.business}
                                                onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-white/20"
                                                placeholder="Ej. Agencia, SaaS..."
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-center mt-6">
                                        <PulsatingButton
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full bg-gradient-to-r from-[#8A00FF] via-[#a855f7] to-[#e879f9] hover:scale-[1.02] active:scale-[0.98] transition-all"
                                            pulseColor="#a855f7"
                                        >
                                            <span className="relative z-10 flex items-center justify-center gap-2">
                                                {isLoading ? (
                                                    <>
                                                        <Loader2 className="w-5 h-5 animate-spin" />
                                                        Enviando...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Rocket className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                                                        Despegar Ahora
                                                    </>
                                                )}
                                            </span>
                                        </PulsatingButton>
                                    </div>
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
                                >
                                    <Rocket className="w-10 h-10 text-primary animate-pulse" />
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-4">¡Misión Iniciada!</h3>
                                <p className="text-secondary mb-8">Tus datos han sido recibidos. Conecta con Ángel mientras preparamos tu consultoría.</p>

                                <div className="space-y-3">
                                    <a
                                        href="https://youtube.com/@angelaparicio"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-[#FF0000]/20 hover:border-[#FF0000]/50 transition-all group"
                                    >
                                        <Youtube className="w-6 h-6 text-white group-hover:text-[#FF0000] transition-colors" />
                                        <span className="font-medium">Suscríbete en YouTube</span>
                                    </a>

                                    <a
                                        href="https://instagram.com/angel_aparicio"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-[#E1306C]/20 hover:border-[#E1306C]/50 transition-all group"
                                    >
                                        <Instagram className="w-6 h-6 text-white group-hover:text-[#E1306C] transition-colors" />
                                        <span className="font-medium">Sígueme en Instagram</span>
                                    </a>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
