"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Volume2, VolumeX, Lock, Unlock } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function VSLPlayer() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [maxTimeWatched, setMaxTimeWatched] = useState(0);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [showUnmuteButton, setShowUnmuteButton] = useState(true); // Inicialmente mostra o botão por segurança
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Intersection Observer to play only when in view
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsIntersecting(entry.isIntersecting);
                });
            },
            { threshold: 0.5 } // Play when 50% is visible
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isIntersecting && !isUnlocked) {
            const attemptPlay = async () => {
                try {
                    if (!isPlaying) {
                        video.muted = isMuted; // keep the current state, start muted by default in most cases to ensure play
                        await video.play();
                        setIsPlaying(true);
                        if (!isMuted) setShowUnmuteButton(false);
                    }
                } catch (error) {
                    console.error("Autoplay failed:", error);
                    video.muted = true;
                    setIsMuted(true);
                    setShowUnmuteButton(true);
                    try {
                        await video.play();
                        setIsPlaying(true);
                    } catch (err) {
                        console.error("Muted autoplay failed:", err);
                        setIsPlaying(false);
                        setShowUnmuteButton(true);
                    }
                }
            };
            attemptPlay();
        } else if (!isIntersecting && isPlaying && !isUnlocked) {
            // Option to pause if scrolled away, forcing them to watch
            video.pause();
            setIsPlaying(false);
        }

    }, [isIntersecting, isUnlocked, isMuted, isPlaying]);


    useEffect(() => {
        // Bloquear teclas comuns de controle de mídia
        const handleKeyDown = (e: KeyboardEvent) => {
            const keysToBlock = ["Space", " ", "ArrowLeft", "ArrowRight", "MediaPlayPause"];
            if (keysToBlock.includes(e.code) || keysToBlock.includes(e.key)) {
                e.preventDefault();
                e.stopPropagation();
            }
        };

        window.addEventListener("keydown", handleKeyDown, { capture: true });
        return () => window.removeEventListener("keydown", handleKeyDown, { capture: true });
    }, []);

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (!video) return;

        // Impedir seek avançado manual antes de terminar
        if (!isUnlocked && video.currentTime > maxTimeWatched + 1) {
            video.currentTime = maxTimeWatched;
        } else {
            setMaxTimeWatched(Math.max(maxTimeWatched, video.currentTime));
        }

        setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleEnded = () => {
        setIsUnlocked(true);
        setMaxTimeWatched(duration); // Garante barra cheia
        setIsPlaying(false);
    };

    const handlePause = () => {
        // Impedir pause antes do final if not scrolled out of view and not unlocked
        if (!isUnlocked && videoRef.current && isIntersecting) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            setIsPlaying(false);
        }
    };

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const toggleMute = (e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }

        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
            setShowUnmuteButton(videoRef.current.muted);

            // Se estava pausado por restrição restrita de autoplay, forçar play agora
            if (videoRef.current.paused && !isUnlocked && isIntersecting) {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

    return (
        <div className="w-full flex flex-col items-center mx-auto">
            <div className="text-center mb-8 w-full max-w-4xl px-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                    Entenda em poucos minutos o que pode <span className="text-[#19D66B]">estar travando seu crédito</span>
                </h2>
                <p className="text-lg md:text-xl text-[#D9D9D9] font-medium max-w-2xl mx-auto">
                    Assista à apresentação completa para liberar o próximo passo.
                </p>
            </div>

            {/* Container Principal Vertical - Formato Shorts/Reels/TikTok */}
            <div className="w-full max-w-sm md:max-w-md mx-auto relative group">

                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_40px_rgba(25,214,107,0.15)] border border-white/10 bg-[#0B0B0B] transition-transform duration-500 hover:scale-[1.01]">

                    {/* Badge superior avisando bloqueio */}
                    {!isUnlocked && (
                        <div className="absolute top-4 left-0 right-0 z-20 flex justify-center w-full pointer-events-none fade-in">
                            <div className="bg-black/70 backdrop-blur-md border border-[#19D66B]/30 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#19D66B] animate-pulse" />
                                Assista até o final
                            </div>
                        </div>
                    )}

                    {/* Player de Vídeo Vertical */}
                    <div className="aspect-[9/16] relative w-full bg-black cursor-pointer" onClick={(e) => {
                        // Permitir mute/unmute ao clicar no video apenas
                        if (!isUnlocked) toggleMute(e);
                    }}>
                        <video
                            ref={videoRef}
                            src="/videos/vsl.mp4"
                            className={cn(
                                "w-full h-full object-cover", // Object-cover garante que preencha 9:16. Se preferir object-contain para não cortar NADA das bordas laterais do vídeo original, mude aqui.
                                !isUnlocked && "pointer-events-none" // Desativa interações diretas (pip, etc) quando bloqueado
                            )}
                            loop={false}
                            autoPlay
                            playsInline
                            controls={isUnlocked} // Mostra controles nativos apenas no fim se desejar, ou mantém oculto. Pedido foi sem controles nativos.
                            disablePictureInPicture
                            controlsList="nodownload nofullscreen noremoteplayback"
                            onContextMenu={(e) => e.preventDefault()}
                            onTimeUpdate={handleTimeUpdate}
                            onLoadedMetadata={handleLoadedMetadata}
                            onEnded={handleEnded}
                            onPause={handlePause}
                            onPlay={handlePlay}
                        />

                        {/* Overlays */}

                        {/* Gradiente Inferior para destacar a barra */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />

                        {/* Play Button Overlay Central (Aparece se pausado e bloqueado) */}
                        {!isPlaying && !isUnlocked && isIntersecting && (
                            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 pointer-events-none">
                                <div className="w-16 h-16 bg-[#19D66B] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(25,214,107,0.6)] animate-pulse">
                                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-[#050505] border-b-8 border-b-transparent ml-1" />
                                </div>
                            </div>
                        )}

                        {/* Unmute Overlay Gigante Inicial / Botão Interativo Inferior */}
                        {showUnmuteButton && !isUnlocked && (
                            <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-md">
                                <button
                                    onClick={toggleMute}
                                    className="flex flex-col items-center gap-4 bg-[#0B0B0B]/80 hover:bg-[#111] border border-[#19D66B]/50 text-white font-bold text-lg px-8 py-6 rounded-2xl transition-all duration-300 hover:scale-[1.05] shadow-[0_0_40px_rgba(25,214,107,0.3)] group"
                                >
                                    <div className="bg-[#19D66B] p-4 rounded-full text-[#050505] group-hover:scale-110 transition-transform shadow-[0_0_20px_#19D66B]">
                                        <VolumeX className="w-8 h-8" />
                                    </div>
                                    <span className="text-center">
                                        Seu vídeo já começou.<br />
                                        <span className="text-[#19D66B]">Clique para ativar o som.</span>
                                    </span>
                                </button>
                            </div>
                        )}

                        {/* Botão Mute discreto no canto (caso já tenha ativado o som e queira mutar, ou vice versa) */}
                        {!showUnmuteButton && !isUnlocked && (
                            <button
                                onClick={toggleMute}
                                className="absolute bottom-6 right-4 z-40 bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/10 text-white p-3 rounded-full transition-all duration-300"
                                aria-label="Alternar som"
                            >
                                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                            </button>
                        )}

                        {/* Barra de Progresso Customizada Interna na base do vídeo */}
                        <div className="absolute bottom-0 left-0 right-0 w-full h-1.5 md:h-2 bg-white/20 z-40">
                            <div
                                className="absolute top-0 left-0 h-full bg-[#19D66B] shadow-[0_0_10px_#20F58A] transition-all duration-300 ease-linear"
                                style={{ width: `${progressPercentage}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Área de CTA Inferior */}
                <div className="mt-8 w-full">
                    {isUnlocked ? (
                        <div className="flex flex-col items-center animate-fade-up">
                            <Link
                                href={CHECKOUT_URL}
                                className="w-full bg-[#19D66B] hover:bg-[#20F58A] text-[#050505] font-extrabold text-xl md:text-2xl px-8 py-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] shadow-[0_20px_40px_rgba(25,214,107,0.3)] uppercase tracking-wide flex items-center justify-center gap-3"
                            >
                                <Unlock className="w-6 h-6 md:w-7 md:h-7" />
                                Liberado: ir para o checkout
                            </Link>
                            <p className="text-[#19D66B] font-bold text-sm mt-4 text-center bg-[#19D66B]/10 px-4 py-2 rounded-full">
                                ✅ Vídeo concluído. Oferta liberada abaixo.
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center transition-all duration-500 opacity-90">
                            <button
                                disabled
                                className="w-full bg-[#0a0a0a] border-y border-x border-[#222] text-[#555] font-bold text-lg md:text-xl px-8 py-5 md:py-6 rounded-2xl uppercase tracking-wide flex items-center justify-center gap-3 cursor-not-allowed shadow-inner"
                            >
                                <Lock className="w-5 h-5 md:w-6 md:h-6 opacity-40" />
                                Assista ao vídeo para liberar
                            </button>
                            <p className="text-[#6E6E6E] font-medium text-sm mt-4 text-center border-b border-[#222] pb-1">
                                O botão será liberado automaticamente após a apresentação.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
