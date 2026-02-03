import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: 'Ángel Apareció - IA & Automatización',
    description: 'Domina la IA con el mayor experto en Automatización.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" className="dark">
            <body className={`${inter.variable} font-sans bg-[#050505] text-white antialiased`}>
                {children}
            </body>
        </html>
    );
}
