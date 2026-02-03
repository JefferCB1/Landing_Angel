"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

type LiquidButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: 'solid' | 'outline' | 'ghost'; // Compatibility
    size?: 'default' | 'icon' | 'lg';
};

const LiquidButton = ({ children, className = '', onClick, variant = 'solid', size = 'default' }: LiquidButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className={`relative overflow-hidden rounded-full font-bold text-white transition-all duration-300 group ${className}`}
            style={{
                padding: size === 'lg' ? '1.5rem 3rem' : '1rem 2rem',
                fontSize: size === 'lg' ? '1.25rem' : '1rem',
            }}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Layer (Base) */}
            <div className="absolute inset-0 bg-primary z-0" />

            {/* Liquid Wave Layer */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#8A00FF] via-[#a855f7] to-[#8A00FF] z-0"
                initial={{ y: "100%" }}
                animate={{ y: isHovered ? "0%" : "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            {/* Wave SVG Decoration (Optional, for visual flair at top of liquid) */}
            {/* Simplified: Using just the slide-up gradient for a clean, flashy fill */}

            {/* Shimmer Effect on Hover */}
            <div className="absolute inset-0 z-[1] opacity-0 group-hover:opacity-20 bg-[linear-gradient(45deg,transparent,white,transparent)] -translate-x-full group-hover:animate-shimmer" />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                {children}
            </span>
        </button>
    );
};

export default LiquidButton;
