"use client"

import { useState, useEffect } from "react";
import { PRIMARY_CTA_URL } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-bg-primary/95 backdrop-blur-md border-b border-gray-text/20 py-4 shadow-lg"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-green-primary flex items-center justify-center font-bold text-bg-primary">
                        CF
                    </div>
                    <span className="font-bold text-xl tracking-tight text-white">
                        Check-up <span className="text-green-primary">Financeiro</span>
                    </span>
                </div>

                <Link
                    href={PRIMARY_CTA_URL}
                    className="hidden sm:flex items-center justify-center bg-green-primary hover:bg-green-glow text-bg-primary font-bold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(25,214,107,0.4)] text-sm uppercase tracking-wider"
                >
                    Fazer análise
                </Link>
            </div>
        </header>
    );
}
