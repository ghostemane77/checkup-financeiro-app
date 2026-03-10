import { PRIMARY_CTA_URL } from "@/lib/constants";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-bg-primary py-12 border-t border-white/10">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-green-primary/80 flex items-center justify-center font-bold text-bg-primary text-xs">
                            CF
                        </div>
                        <span className="font-bold text-lg tracking-tight text-white/90">
                            Check-up Financeiro
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-text font-medium">
                        <Link href={PRIMARY_CTA_URL} className="hover:text-green-primary transition-colors">Termos de Uso</Link>
                        <Link href={PRIMARY_CTA_URL} className="hover:text-green-primary transition-colors">Política de Privacidade</Link>
                        <Link href={PRIMARY_CTA_URL} className="hover:text-green-primary transition-colors">Contato</Link>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center">
                    <p className="text-gray-text/70 text-xs md:text-sm max-w-3xl mx-auto leading-relaxed">
                        <strong>Aviso de isenção de responsabilidade:</strong> Este site apresenta um serviço de análise informativa de perfil financeiro.
                        Não há promessa de aprovação de crédito, aumento de score ou limpeza de nome.
                        Fornecemos um diagnóstico baseado na interpretação de dados consultáveis para que o usuário decida qual a melhor estratégia tomar.
                    </p>
                    <p className="text-white/30 text-xs mt-6">
                        &copy; {new Date().getFullYear()} Check-up Financeiro. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
