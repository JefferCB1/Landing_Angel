"use client";
import { motion } from "framer-motion";

export default function VideoSection() {
    return (
        <section className="py-12 px-4 relative">
            <div className="max-w-5xl mx-auto">
                <div
                    className="relative rounded-2xl overflow-hidden border border-primary/20 bg-black shadow-[0_0_40px_rgba(0,229,255,0.1)] group w-full"
                    style={{ aspectRatio: '16/9' }}
                >
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative aspect-video w-full">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/3CT-tIqAL-Y?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=3CT-tIqAL-Y"
                            title="Ángel Aparicio Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay to ensure it feels integrated (optional dark tint) */}
                        <div className="absolute inset-0 pointer-events-none ring-1 ring-white/10 rounded-2xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
