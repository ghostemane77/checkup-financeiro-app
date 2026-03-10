"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Volume2, VolumeX, Lock, Unlock } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/constants";

export default function VSLPlayer() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [maxTimeWatched, setMaxTimeWatched] = useState(0);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [showUnmuteButton, setShowUnmuteButton] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const attemptPlay = async () => {
            try {
                video.muted = false;
                await video.play();
                setIsMuted(false);
                setIsPlaying(true);
            } catch (error) {
                // Autoplay com som falhou, tenta iniciar mutado
                video.muted = true;
                try {
                    await video.play();
                    setIsMuted(true);
                    setIsPlaying(true);
                    setShowUnmuteButton(true);
                } catch (err) {
                    console.error("Autoplay bloqueado pelo navegador:", err);
                    // Mostra botão de unmute/play de fallback
                    setShowUnmuteButton(true);
                }
            }
        };

        attemptPlay();

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
    };

    const handlePause = () => {
        // Impedir pause antes do final
        if (!isUnlocked && videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            setIsPlaying(false);
        }
    };

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
            setShowUnmuteButton(false);

            // Se estava pausado por restrição restrita de autoplay, forçar play agora
            if (videoRef.current.paused) {
                videoRef.current.play();
            }
        }
    };

    const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

    return (
        <div className="w-full flex flex-col items-center mx-auto max-w-5xl">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                    Entenda em poucos minutos o que pode estar travando seu crédito
                </h2>
                <p className="text-lg text-[#D9D9D9] font-medium">
                    Assista à apresentação completa para liberar o próximo passo.
                </p>
            </div>

            <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(25,214,107,0.15)] border border-[#19D66B]/20 bg-[#0B0B0B] group">

                {/* Badge superior informando status */}
                {!isUnlocked && (
                    <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full select-none pointer-events-none">
                        Assista até o final
                    </div>
                )}

                {/* Video Player Nativo ocultando defaults */}
                <div className="aspect-video relative w-full bg-black">
                    <video
                        ref={videoRef}
                        src="/videos/vsl.mp4"
                        className="w-full h-full object-cover pointer-events-none"
                        autoPlay
                        playsInline
                        controls={false}
                        disablePictureInPicture
                        controlsList="nodownload nofullscreen noremoteplayback"
                        onContextMenu={(e) => e.preventDefault()}
                        onTimeUpdate={handleTimeUpdate}
                        onLoadedMetadata={handleLoadedMetadata}
                        onEnded={handleEnded}
                        onPause={handlePause}
                        onPlay={handlePlay}
                        onClick={(e) => e.preventDefault()} // Impede pause por clique no video original
                    />

                    {/* Fallback & Overlay de Áudio */}
                    {showUnmuteButton && (
                        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                            <button
                                onClick={toggleMute}
                                className="flex items-center gap-3 bg-[#19D66B] hover:bg-[#20F58A] text-[#050505] font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(25,214,107,0.4)]"
                            >
                                {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                                Seu vídeo já começou. Clique para ativar o áudio.
                            </button>
                        </div>
                    )}
                </div>

                {/* Barra de Progresso Customizada */}
                <div className="w-full h-2 md:h-2.5 bg-[#1a1a1a] relative overflow-hidden">
                    <div
                        className="absolute top-0 left-0 h-full bg-[#19D66B] shadow-[0_0_10px_#20F58A] transition-all duration-300 ease-linear rounded-r-full"
                        style={{ width: `${progressPercentage}%` }}
                    />
                </div>
            </div>

            <div className="mt-8 w-full max-w-lg">
                {isUnlocked ? (
                    <div className="flex flex-col items-center animate-fade-up">
                        <Link
                            href={CHECKOUT_URL}
                            className="w-full bg-[#19D66B] hover:bg-[#20F58A] text-[#050505] font-bold text-xl px-8 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-[0_15px_30px_rgba(25,214,107,0.3)] uppercase tracking-wide flex items-center justify-center gap-3"
                        >
                            <Unlock className="w-6 h-6" />
                            Liberado: ir para o checkout
                        </Link>
                        <p className="text-[#19D66B] font-medium text-sm mt-4">
                            Vídeo concluído. Agora o botão foi liberado.
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center transition-all duration-500">
                        <button
                            disabled
                            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#6E6E6E] font-bold text-lg px-8 py-5 rounded-2xl uppercase tracking-wide flex items-center justify-center gap-3 cursor-not-allowed"
                        >
                            <Lock className="w-5 h-5 opacity-50" />
                            Assista ao vídeo para liberar
                        </button>
                        <p className="text-[#6E6E6E] font-medium text-sm mt-4 text-center">
                            O botão será liberado após assistir ao vídeo completo.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
