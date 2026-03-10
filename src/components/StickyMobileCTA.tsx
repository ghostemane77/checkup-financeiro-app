"use client"

import { useState, useEffect } from "react";
import { PRIMARY_CTA_URL } from "@/lib/constants";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={cn(
                "fixed bottom-0 left-0 right-0 z-50 p-4 transition-transform duration-500 ease-in-out md:hidden bg-gradient-to-t from-bg-primary via-bg-primary/95 to-transparent pt-10",
                isVisible ? "translate-y-0" : "translate-y-full"
            )}
        >
            <Link
                href={PRIMARY_CTA_URL}
                className="flex items-center justify-center gap-2 w-full bg-green-primary hover:bg-green-glow text-bg-primary font-bold px-6 py-4 rounded-xl shadow-[0_0_20px_rgba(25,214,107,0.25)] transition-all uppercase tracking-wider text-sm"
            >
                <MessageCircle className="w-5 h-5" />
                Falar agora
            </Link>
        </div>
    );
}
