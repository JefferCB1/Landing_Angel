"use client";
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import CustomForm from "@/components/landing/CustomForm";

interface TallyModalProps {
    isOpen: boolean;
    onClose: () => void;
    formId: string; // Kept for prop compatibility, but unused now
}

export default function TallyModal({ isOpen, onClose }: TallyModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
            <div
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-surface border border-white/10 rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="sticky top-0 right-0 z-50 flex justify-end p-4">
                    <button
                        onClick={onClose}
                        className="p-2 text-white/50 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors backdrop-blur-md"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-2 md:p-6 pt-0">
                    <h2 className="text-2xl font-bold text-center mb-6">Reserva tu Consultoría</h2>
                    <CustomForm />
                </div>
            </div>
        </div>,
        document.body
    );
}
