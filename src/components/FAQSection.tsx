"use client"

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PRIMARY_CTA_URL } from "@/lib/constants";

const faqs = [
    {
        target: "q1",
        question: "O que é o Check-up Financeiro?",
        answer: "O Check-up Financeiro é uma análise completa do seu perfil de crédito. Verificamos as métricas, os apontamentos e o comportamento do seu CPF perante o sistema bancário, ajudando você a entender o real motivo por trás das negativas.",
    },
    {
        target: "q2",
        question: "Isso garante aprovação?",
        answer: "Não. Fomos construídos sobre o pilar da transparência. O serviço oferece diagnóstico, clareza e as informações necessárias para que você elabore a melhor estratégia, mas nenhuma empresa séria pode garantir aprovação de crédito.",
    },
    {
        target: "q3",
        question: "Para quem serve?",
        answer: "Serve para qualquer pessoa que sente que seu crédito está injustamente travado, que tem renda e não consegue limites, ou que não entende por que um banco nega uma solicitação independentemente de não haver dívidas abertas no Serasa.",
    },
    {
        target: "q4",
        question: "Como recebo a análise?",
        answer: "Nossa equipe realiza o levantamento e consolida todas as informações. Em seguida, agendamos ou enviamos o material conforme a sua preferência de forma totalmente sigilosa e segura.",
    },
    {
        target: "q5",
        question: "Posso falar com alguém antes de comprar?",
        answer: "Sim, absolutamente. Clique no link abaixo para conversar com a nossa equipe no chat. Tiramos todas as dúvidas de forma gratuita e transparente antes de você fechar negócio.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-bg-primary relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Perguntas Frequentes
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={cn(
                                    "border rounded-xl transition-all duration-300 overflow-hidden bg-[#0d0d0d]",
                                    isOpen ? "border-green-primary/50 shadow-[0_0_20px_rgba(25,214,107,0.05)]" : "border-white/10 hover:border-white/20"
                                )}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <span className={cn("font-bold md:text-lg pr-8 transition-colors duration-300", isOpen ? "text-green-primary" : "text-white")}>
                                        {faq.question}
                                    </span>
                                    <div className={cn("shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300", isOpen ? "bg-green-primary/20 text-green-primary" : "bg-white/5 text-gray-neutral")}>
                                        <ChevronDown
                                            className={cn("w-5 h-5 transition-transform duration-300", isOpen ? "rotate-180" : "rotate-0")}
                                        />
                                    </div>
                                </button>
                                <div
                                    className={cn(
                                        "grid transition-all duration-300 ease-in-out",
                                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                    )}
                                >
                                    <div className="overflow-hidden">
                                        <div className="p-6 pt-0 text-gray-text leading-relaxed font-medium">
                                            {faq.answer}
                                            {faq.target === "q5" && (
                                                <div className="mt-4">
                                                    <Link href={PRIMARY_CTA_URL} className="text-green-primary font-bold hover:underline underline-offset-4">
                                                        Clique aqui para falar conosco &rarr;
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
