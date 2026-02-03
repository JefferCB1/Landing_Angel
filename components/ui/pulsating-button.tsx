"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PulsatingButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    pulseColor?: string;
    duration?: string;
}

export function PulsatingButton({
    className,
    children,
    pulseColor = "#8A00FF", // Default primary purple
    duration = "1.5s",
    ...props
}: PulsatingButtonProps) {
    return (
        <button
            className={cn(
                "relative flex cursor-pointer items-center justify-center overflow-visible rounded-xl bg-primary px-8 py-4 text-center font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.95]",
                className,
            )}
            style={
                {
                    "--pulse-color": pulseColor,
                    "--duration": duration,
                } as React.CSSProperties
            }
            {...props}
        >
            <div className="relative z-10">{children}</div>
            <div className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 animate-pulse-gradient rounded-xl bg-inherit opacity-50" />
        </button>
    );
}
