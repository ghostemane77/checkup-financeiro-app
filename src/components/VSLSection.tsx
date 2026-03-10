import { Play } from "lucide-react";

export default function VSLSection() {
    return (
        <section className="py-20 bg-bg-secondary relative border-y border-white/5">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Entenda em poucos minutos o que pode estar bloqueando seu crédito
                    </h2>
                    <p className="text-lg text-gray-text">
                        Assista à apresentação e veja como funciona a análise.
                    </p>
                </div>

                {/* VSL Container */}
                <div className="relative mx-auto rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(25,214,107,0.1)] border border-green-primary/20 aspect-video group cursor-pointer bg-bg-primary/50">
                    {/* Placeholder for Video */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Center Play Button Effect */}
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-green-primary/90 text-bg-primary rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-green-glow transition-all duration-300 shadow-[0_0_30px_rgba(25,214,107,0.5)] z-10">
                            <Play className="w-8 h-8 md:w-10 md:h-10 ml-1 fill-bg-primary" />
                        </div>

                        {/* Simple gradient background placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c0c] to-[#1a1a1a] opacity-80" />

                        {/* Simulated UI elements for placeholder aesthetics */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-50 border-t border-white/10 pt-3">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-green-primary" />
                                <div className="h-1 w-24 bg-white/20 rounded-full" />
                            </div>
                            <div className="text-xs text-white/50 font-mono">14:52</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
