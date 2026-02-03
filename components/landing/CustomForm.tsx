import React, { useState } from 'react';
import LiquidButton from '@/components/ui/LiquidButton';
import { ArrowRight, User, Mail, Briefcase, Calendar } from 'lucide-react';

export default function CustomForm() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        age: '',
        businessType: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5678/webhook/dc987970-0c08-46ab-a7d9-c49ad97d7d21', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            });

            if (response.ok) {
                alert("¡Gracias! Hemos recibido tus datos correctamente.");
                setFormState({ name: '', email: '', age: '', businessType: '' });
            } else {
                console.error("Error sending data to webhook");
                alert("Hubo un error al enviar el formulario. Por favor intenta de nuevo.");
            }
        } catch (error) {
            console.error("Connection error:", error);
            alert("Error de conexión. Asegúrate de que el webhook esté activo.");
        }
    };

    const inputBaseClass = "w-full bg-surface/30 border border-white/10 rounded-xl px-4 py-3 pl-11 text-white placeholder:text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 backdrop-blur-sm";
    const labelBaseClass = "block text-sm font-medium text-secondary mb-2 ml-1";
    const iconBaseClass = "absolute left-4 top-[38px] w-5 h-5 text-secondary/70";

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-6 relative z-10 p-8 rounded-3xl bg-surface/5 border border-white/5 backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                    <label htmlFor="name" className={labelBaseClass}>Nombre Completo</label>
                    <User className={iconBaseClass} />
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="Tu nombre"
                        value={formState.name}
                        onChange={handleChange}
                        className={inputBaseClass}
                    />
                </div>

                <div className="relative group">
                    <label htmlFor="email" className={labelBaseClass}>Correo Electrónico</label>
                    <Mail className={iconBaseClass} />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="tu@email.com"
                        value={formState.email}
                        onChange={handleChange}
                        className={inputBaseClass}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                    <label htmlFor="age" className={labelBaseClass}>Edad</label>
                    <Calendar className={iconBaseClass} />
                    <input
                        type="number"
                        name="age"
                        id="age"
                        placeholder="Ej. 25"
                        value={formState.age}
                        onChange={handleChange}
                        className={inputBaseClass}
                    />
                </div>

                <div className="relative group">
                    <label htmlFor="businessType" className={labelBaseClass}>Tipo de Negocio</label>
                    <Briefcase className={iconBaseClass} />
                    <input
                        type="text"
                        name="businessType"
                        id="businessType"
                        placeholder="Ej. E-commerce, Agencia..."
                        value={formState.businessType}
                        onChange={handleChange}
                        className={inputBaseClass}
                    />
                </div>
            </div>

            <div className="pt-4 flex justify-center">
                <LiquidButton
                    type="submit"
                    className="group"
                    size="lg"
                >
                    <span className="flex items-center gap-2">
                        Automatizar Mi Negocio
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </LiquidButton>
            </div>

            <p className="text-xs text-center text-secondary/40 mt-4">
                Tus datos están protegidos. Únete a +5,000 profesionales.
            </p>
        </form>
    );
}
