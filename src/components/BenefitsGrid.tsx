import { Eye, UserCheck, Clock, ArrowUpRight } from "lucide-react";

export default function BenefitsGrid() {
    const benefits = [
        {
            icon: <Eye className="w-8 h-8" />,
            title: "Clareza real",
            description: "Chega de tentar adivinhar qual é o problema. Tenha um retrato exato do que pode estar barrando suas aprovações.",
        },
        {
            icon: <UserCheck className="w-8 h-8" />,
            title: "Análise individual",
            description: "Seu caso é único. Não usamos respostas prontas. O diagnóstico foca nos detalhes e nas marcações do seu CPF.",
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Economia de tempo",
            description: "Evite colecionar dezenas de negativas que só pioram o seu score. Aja com precisão.",
        },
        {
            icon: <ArrowUpRight className="w-8 h-8" />,
            title: "Próximo passo certo",
            description: "Com as informações certas em mãos, você poderá ajustar a sua estratégia e mirar nos bancos com mais chances de sucesso.",
        },
    ];

    return (
        <section className="py-24 bg-bg-secondary relative border-y border-white/5">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-green-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(25,214,107,0.1)] relative overflow-hidden animate-fade-up"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            {/* Subtle background glow effect over icon */}
                            <div className="absolute top-8 left-8 w-12 h-12 bg-green-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="text-green-primary mb-6 relative z-10 transition-transform duration-300 group-hover:scale-110 origin-left">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                                {item.title}
                            </h3>

                            <p className="text-gray-text leading-relaxed relative z-10">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
