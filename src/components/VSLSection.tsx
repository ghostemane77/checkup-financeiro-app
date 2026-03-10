import VSLPlayer from "@/components/VSLPlayer";

export default function VSLSection() {
    return (
        <section className="py-24 bg-[#050505] relative border-y border-white/5 overflow-hidden">
            {/* Elementos decorativos de fundo */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-[#19D66B]/5 blur-[150px] rounded-[100%] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 w-full">
                <VSLPlayer />
            </div>
        </section>
    );
}
