import { PRIMARY_CTA_URL, CHECKOUT_URL } from "@/lib/constants";
import Link from "next/link";
import { AlertCircle, ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-bg-primary">
            {/* Background aesthetics */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-green-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-primary/30 bg-green-primary/10 text-green-primary text-sm font-medium mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                        <ShieldCheck size={16} />
                        <span>Diagnóstico financeiro individual</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight md:leading-tight mb-6 tracking-tight animate-fade-up" style={{ animationDelay: "0.2s" }}>
                        Existe um <span className="text-green-primary">motivo</span> — e ele aparece nos <span className="text-green-primary">sistemas bancários</span>.
                    </h1>

                    {/* Subheadline Highlight */}
                    <p className="text-xl md:text-2xl text-gray-neutral font-medium mb-6 max-w-3xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
                        Descubra o que realmente está <span className="text-white border-b-2 border-green-primary/50 pb-0.5">travando seu crédito</span>, mesmo que seu nome pareça limpo.
                    </p>

                    <p className="text-base md:text-lg text-gray-text mb-10 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.4s" }}>
                        Seu crédito não é negado por acaso. O problema quase sempre deixa sinais no perfil — e eles podem ser identificados antes que você perca novas oportunidades.
                    </p>

                    {/* Alert Badge */}
                    <div className="flex items-start md:items-center gap-3 bg-[#423D10]/40 border border-[#F2E85C]/30 text-[#F2E85C] px-5 py-3 rounded-lg mb-12 max-w-xl text-left md:text-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
                        <AlertCircle className="w-6 h-6 shrink-0 mt-0.5 md:mt-0" />
                        <p className="text-sm md:text-base font-medium">
                            Alerta: negativas recorrentes podem indicar bloqueios invisíveis no seu perfil.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-fade-up" style={{ animationDelay: "0.6s" }}>
                        <Link
                            href={PRIMARY_CTA_URL}
                            className="w-full sm:w-auto bg-green-primary hover:bg-green-glow text-bg-primary font-bold text-base md:text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(25,214,107,0.3)] uppercase tracking-wide flex items-center justify-center gap-2 group"
                        >
                            Quero fazer meu check-up financeiro
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href={CHECKOUT_URL}
                            className="w-full sm:w-auto bg-transparent border border-gray-text/40 hover:border-white text-gray-neutral hover:text-white font-medium text-sm md:text-base px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center uppercase tracking-wide"
                        >
                            Ir direto para o checkout
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
