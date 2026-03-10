import { PRIMARY_CTA_URL } from "@/lib/constants";
import { AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

const painPoints = [
    "Crédito negado sem explicação",
    "Banco diz que o perfil não foi aprovado",
    "Renda existe, mas o limite não aumenta",
    "Cartão não sobe",
    "Empréstimo ou financiamento sempre recusado",
    "Você sente que algo no CPF te trava, mas não sabe o quê",
];

export default function PainPoints() {
    return (
        <section className="py-24 bg-gray-light">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-bg-primary mb-6 tracking-tight">
                        Você se identifica com alguma dessas situações?
                    </h2>
                    <div className="w-24 h-1 bg-green-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16">
                    {painPoints.map((point, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-neutral/30 hover:shadow-md transition-shadow duration-300 animate-fade-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="mt-1 bg-red-50 text-red-500 rounded-full p-1.5 shrink-0">
                                <AlertTriangle className="w-5 h-5" />
                            </div>
                            <p className="text-lg text-bg-secondary font-medium leading-tight">
                                {point}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto text-center bg-white p-8 md:p-10 rounded-2xl shadow-lg border-b-4 border-green-primary">
                    <p className="text-xl md:text-2xl text-bg-primary font-bold mb-8 leading-snug">
                        Quando isso se repete, o problema pode não estar na renda.{" "}
                        <span className="text-green-dark">Pode estar na leitura que o sistema faz do seu perfil.</span>
                    </p>

                    <Link
                        href={PRIMARY_CTA_URL}
                        className="inline-flex items-center justify-center gap-2 bg-bg-primary hover:bg-[#1a1a1a] text-white font-bold text-lg px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(5,5,5,0.2)] uppercase tracking-wide group w-full sm:w-auto"
                    >
                        Obter acesso imediato
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
