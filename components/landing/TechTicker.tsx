"use client";
import LogoLoop from "@/components/ui/LogoLoop";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiOpenai,
    SiPython,
    // SiN8n, // Not available in installed version
    SiGoogle,
    SiZapier,
    SiMake,
    SiAirtable
} from 'react-icons/si';
import { Box, Workflow } from 'lucide-react';

const techLogos = [
    { node: <Workflow className="text-[#EA4B71]" />, title: "n8n" },
    { node: <SiOpenai className="text-white" />, title: "OpenAI" },
    { node: <SiGoogle className="text-white" />, title: "Gemini" },
    { node: <SiMake className="text-[#6C47FF]" />, title: "Make" },
    { node: <SiZapier className="text-[#FF4F00]" />, title: "Zapier" },
    { node: <Box className="text-[#8A00FF]" />, title: "Antigravity" }, // Placeholder for Antigravity if not available
    { node: <SiPython className="text-[#3776AB]" />, title: "Python" },
    { node: <SiAirtable className="text-[#F82B60]" />, title: "Airtable" },
    { node: <SiReact className="text-[#61DAFB]" />, title: "React" },
    { node: <SiNextdotjs className="text-white" />, title: "Next.js" },
    { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind" },
    { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript" },
];

export default function TechTicker() {
    return (
        <section className="py-12 relative z-20 overflow-hidden">
            {/* Removed internal background to blend with page */}
            {/* <div className="absolute inset-0 bg-cosmic-gradient opacity-20 pointer-events-none" /> */}

            <p className="text-center text-sm font-medium text-secondary/60 mb-6 uppercase tracking-widest">
                Potenciado por tecnología de punta
            </p>

            <LogoLoop
                logos={techLogos}
                speed={50} // Slower speed for better visibility
                direction="left"
                logoHeight={40} // Slightly larger
                gap={60}
                hoverSpeed={10}
                scaleOnHover
                fadeOut
                fadeOutColor="#000000" // Matches standard dark bg
            />
        </section>
    );
}
