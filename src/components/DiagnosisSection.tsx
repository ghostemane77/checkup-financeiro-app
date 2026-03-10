import { Info, Target, Search, FileX, BarChart, Eye, AlertOctagon } from "lucide-react";

export default function DiagnosisSection() {
    const discoveries = [
        { icon: <FileX className="w-5 h-5" />, text: "Se existem dívidas internas" },
        { icon: <Search className="w-5 h-5" />, text: "Se há restrições em SPC, Serasa ou Boa Vista" },
        { icon: <Target className="w-5 h-5" />, text: "Se o CPF tem marcações que pesam na análise" },
        { icon: <AlertOctagon className="w-5 h-5" />, text: "Qual a leitura de risco do perfil" },
        { icon: <Eye className="w-5 h-5" />, text: "Como o sistema pode estar enxergando sua capacidade financeira" },
        { icon: <BarChart className="w-5 h-5" />, text: "Qual faixa de limite parece compatível com o cenário atual" },
        { icon: <Info className="w-5 h-5" />, text: "Quais pontos precisam de correção antes de nova tentativa" },
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-bg-primary mb-6 tracking-tight">
                        Raio-X do crédito: <br className="hidden md:block" />
                        <span className="text-green-dark">diagnóstico completo e objetivo</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-text max-w-3xl mx-auto font-medium">
                        O Check-up Financeiro ajuda você a entender, de forma clara, o que pode estar afetando sua aprovação.
                    </p>
                </div>

                <div className="bg-gray-light p-8 md:p-12 rounded-2xl border border-gray-neutral/40 mb-12 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                        {discoveries.map((item, index) => (
                            <div key={index} className="flex items-start gap-4 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="bg-white p-2.5 rounded-lg shadow-sm text-green-dark shrink-0 border border-gray-neutral/20">
                                    {item.icon}
                                </div>
                                <p className="text-bg-secondary font-semibold text-lg pt-1">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Info Box */}
                <div className="bg-[#eff6ff] border-l-4 border-blue-info rounded-r-xl p-6 md:p-8 flex gap-5 items-start max-w-4xl mx-auto shadow-sm animate-fade-up" style={{ animationDelay: "0.5s" }}>
                    <div className="bg-white rounded-full p-2 text-blue-info shrink-0 shadow-sm">
                        <Info className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-blue-900 font-bold text-lg leading-relaxed">
                            Isso não é promessa de aprovação. É diagnóstico, clareza e estratégia para agir com mais precisão.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
