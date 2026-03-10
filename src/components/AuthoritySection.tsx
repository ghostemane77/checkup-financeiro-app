import { CheckCircle2, TrendingUp, ShieldAlert, BarChart3 } from "lucide-react";

const authorityPoints = [
    "Dívidas internas registradas",
    "Apontamentos em bases complementares",
    "Risco atribuído ao CPF",
    "Score interno bancário",
    "Histórico de relacionamento",
    "Faixa de limite sugerida",
    "Alertas de inconsistência",
    "Protestos ou ocorrências, quando aplicável",
];

export default function AuthoritySection() {
    return (
        <section className="py-24 bg-bg-primary relative overflow-hidden">
            {/* Aesthetic Background Elements */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-primary/5 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                            Os bancos <span className="text-green-primary">não analisam apenas</span> SPC e Serasa
                        </h2>
                        <p className="text-lg md:text-xl text-gray-neutral mb-10 leading-relaxed font-medium">
                            Existem bases, sinais internos e classificações complementares que podem influenciar a decisão de crédito muito mais do que a sua pontuação convencional.
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                            {authorityPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-3 animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
                                    <CheckCircle2 className="w-5 h-5 text-green-primary shrink-0 mt-0.5" />
                                    <span className="text-gray-text font-medium text-base select-none">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Visual Card/Dashboard Mockup */}
                    <div className="lg:w-1/2 w-full animate-fade-up" style={{ animationDelay: "0.3s" }}>
                        <div className="relative bg-[#0d0d0d] rounded-2xl border border-white/10 p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            {/* Top Bar simulated */}
                            <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-text font-mono uppercase tracking-wider mb-1">Status Interno</span>
                                    <span className="text-white font-bold">Análise de Risco Algorítmica</span>
                                </div>
                                <div className="bg-yellow-alert/10 text-yellow-alert px-3 py-1 rounded text-xs font-bold border border-yellow-alert/20">
                                    REVISÃO
                                </div>
                            </div>

                            {/* Mockup Data Points */}
                            <div className="space-y-6">
                                <div className="bg-white/5 rounded-xl p-4 flex items-center justify-between border border-transparent hover:border-green-primary/30 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-green-primary/10 p-3 rounded-lg">
                                            <TrendingUp className="w-6 h-6 text-green-primary" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">Score Comportamental</p>
                                            <p className="text-xs text-gray-text">Base SCR e Histórico Bacen</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-white font-bold">Risco Médio</span>
                                    </div>
                                </div>

                                <div className="bg-white/5 rounded-xl p-4 flex items-center justify-between border border-transparent hover:border-green-primary/30 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-red-500/10 p-3 rounded-lg">
                                            <ShieldAlert className="w-6 h-6 text-red-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">Alertas de Perfil</p>
                                            <p className="text-xs text-gray-text">Inconsistências Cadastrais</p>
                                        </div>
                                    </div>
                                    <div className="text-right flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                        <span className="block text-white font-bold">Detectado</span>
                                    </div>
                                </div>

                                <div className="bg-white/5 rounded-xl p-4 flex items-center justify-between border border-transparent hover:border-green-primary/30 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-blue-500/10 p-3 rounded-lg">
                                            <BarChart3 className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">Faixa Sugerida</p>
                                            <p className="text-xs text-gray-text">Limite Parametrizado</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-gray-text font-bold text-sm line-through">R$ 5.000</span>
                                        <span className="block text-white font-bold">R$ 800</span>
                                    </div>
                                </div>
                            </div>

                            {/* Aesthetic Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent pointer-events-none rounded-2xl" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
