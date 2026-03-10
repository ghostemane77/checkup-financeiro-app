import VSLPlayer from "@/components/VSLPlayer";

export default function VSLSection() {
    return (
        <section className="py-24 bg-[#050505] relative border-y border-white/5 overflow-hidden">
            {/* Elementos decorativos de fundo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[#19D66B]/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 w-full flex justify-center">
                <VSLPlayer />
            </div>
        </section>
    );
}
