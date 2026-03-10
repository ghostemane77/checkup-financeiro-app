import { CHECKOUT_URL, PRIMARY_CTA_URL } from "@/lib/constants";
import { Check, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function OfferSection() {
    return (
        <section className="py-24 bg-green-primary relative overflow-hidden">
            {/* Background Graphic elements for premium look */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-black via-transparent to-transparent" />
            <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="bg-white rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden">
                    {/* Top highlight bar */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-dark via-green-primary to-green-glow" />

                    <div className="text-center mb-10">
                        <span className="inline-flex items-center gap-1.5 bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                            <ShieldCheck className="w-4 h-4" />
                            Oferta especial por tempo limitado
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-bg-primary mb-4 tracking-tight">
                            Seu diagnóstico financeiro completo
                        </h2>
                        <p className="text-lg md:text-xl text-gray-text font-medium max-w-2xl mx-auto">
                            Análise individual, personalizada e baseada em sinais reais do seu perfil.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-gray-light rounded-2xl p-8 md:p-10 mb-10 border border-gray-neutral/30">
                        {/* Price Area */}
                        <div className="text-center md:text-left">
                            <p className="text-gray-text font-semibold text-lg line-through decoration-red-500/50 decoration-2 mb-1">
                                De R$ 169,00
                            </p>
                            <div className="flex items-start justify-center md:justify-start gap-1 text-green-dark">
                                <span className="text-2xl font-bold mt-1">R$</span>
                                <span className="text-6xl md:text-7xl font-extrabold leading-none tracking-tighter">99<span className="text-4xl">,00</span></span>
                            </div>
                            <p className="text-sm font-medium text-gray-text mt-2 uppercase tracking-wide">
                                Pagamento único e Seguro
                            </p>
                        </div>

                        {/* Inclusions List */}
                        <div className="w-full md:w-auto">
                            <ul className="space-y-4">
                                {["Análise de score e riscos", "Verificação em bases de crédito", "Consultoria de 30min", "Plano de ação imediato"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Check className="w-6 h-6 text-green-primary shrink-0" />
                                        <span className="text-bg-secondary font-medium text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Action Area */}
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href={CHECKOUT_URL}
                            className="w-full bg-green-primary hover:bg-green-dark text-bg-primary font-bold text-xl px-8 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-[0_15px_30px_rgba(25,214,107,0.3)] uppercase tracking-wide flex items-center justify-center gap-2 group"
                        >
                            Eu quero garantir agora
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href={PRIMARY_CTA_URL}
                            className="text-gray-text hover:text-green-dark font-semibold mt-2 underline underline-offset-4 transition-colors p-2 text-sm md:text-base uppercase tracking-wider"
                        >
                            Prefiro tirar dúvidas antes
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
