import { PRIMARY_CTA_URL, CHECKOUT_URL } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="py-24 bg-bg-secondary relative overflow-hidden border-t border-white/5">
            {/* Background glow for emphasis */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    Descubra o que está por trás da sua negativa <span className="text-green-primary">antes de tentar de novo.</span>
                </h2>

                <p className="text-xl text-gray-neutral mb-12 max-w-2xl mx-auto font-medium">
                    Quanto antes você entende o problema, mais rápido consegue agir com estratégia.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    <Link
                        href={PRIMARY_CTA_URL}
                        className="w-full sm:w-auto bg-green-primary hover:bg-green-glow text-bg-primary font-bold text-lg px-8 py-5 rounded-xl transition-all duration-300 hover:scale-[1.03] shadow-[0_0_40px_rgba(25,214,107,0.2)] uppercase tracking-wide flex items-center justify-center gap-2 group"
                    >
                        Fazer meu check-up agora
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                        href={CHECKOUT_URL}
                        className="w-full sm:w-auto bg-transparent border-2 border-white/20 hover:border-white/50 text-white font-bold text-lg px-8 py-5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wide"
                    >
                        <Lock className="w-5 h-5 opacity-70" />
                        Ir direto para o checkout
                    </Link>
                </div>
            </div>
        </section>
    );
}
