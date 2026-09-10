import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { EconaseLogo } from '../brand/EconaseLogo';

export type OlfactoryMoodId = 'madera' | 'floral' | 'cuero' | 'all';

interface OlfactoryMood {
  id: OlfactoryMoodId;
  title: string;
  subtitle: string;
  familyCategory: 'AMADERADO & ESPECIADO' | 'CÍTRICO & FLORAL BLANCO' | 'CUERO & RESINAS NOBLES' | 'TODAS';
  tagline: string;
  quote: string;
  accentColor: string;
  glowColor: string;
  notes: {
    top: string;
    heart: string;
    base: string;
  };
  maceration: string;
}

const OLFACTORY_MOODS: OlfactoryMood[] = [
  {
    id: 'madera',
    title: 'Silencio & Madera',
    subtitle: 'Acorde Amaderado & Especiado',
    familyCategory: 'AMADERADO & ESPECIADO',
    tagline: 'Serenidad mineral, humo ceremonial y calidez ambarina',
    quote: '«Un templo silencioso tallado en cedro atlas y sándalo australiano macerado al ocaso.»',
    accentColor: '#D1AF77',
    glowColor: 'rgba(209, 175, 119, 0.18)',
    notes: {
      top: 'Cardamomo de Ceilán, Pimienta de Madagascar',
      heart: 'Iris Florentino, Madera de Gaiac ahumada',
      base: 'Sándalo Australiano, Incienso Sagrado, Ámbar Gris',
    },
    maceration: 'Macerado 90 días en barrica de cristal',
  },
  {
    id: 'floral',
    title: 'Luz & Rocío',
    subtitle: 'Acorde Cítrico & Floral Blanco',
    familyCategory: 'CÍTRICO & FLORAL BLANCO',
    tagline: 'Destellos solares, pétalos frescos y brisa del Mediterráneo',
    quote: '«La claridad de una mañana de primavera en Grasse sobre flores de azahar recién recolectadas.»',
    accentColor: '#E6D5B8',
    glowColor: 'rgba(230, 213, 184, 0.22)',
    notes: {
      top: 'Neroli de Túnez, Bergamota de Calabria, Mandarina Verde',
      heart: 'Jazmín Sambac Real, Pera de Agua, Azahar',
      base: 'Almizcle Blanco Cristalino, Cedro Claro, Muguet',
    },
    maceration: 'Destilación por arrastre de vapor en frío',
  },
  {
    id: 'cuero',
    title: 'Noche & Resinas',
    subtitle: 'Acorde Cuero & Resinas Nobles',
    familyCategory: 'CUERO & RESINAS NOBLES',
    tagline: 'Opulencia nocturna, bálsamos sagrados y cuero ancestral',
    quote: '«El rumor hipnótico de las sombras en un salón señorial impregnado de benjuí y cuero curtido.»',
    accentColor: '#BFA382',
    glowColor: 'rgba(191, 163, 130, 0.20)',
    notes: {
      top: 'Azafrán de Persia, Frambuesa Negra Silvestre',
      heart: 'Cuero Andalusí Envejecido, Resina de Opoponax',
      base: 'Benjuí de Laos, Oud Botánico de Assam, Vainilla Ahumada',
    },
    maceration: 'Extracción botánica en cubas de roble neutro',
  },
];

interface WelcomeScreenProps {
  isOpen: boolean;
  onClose: (selectedFamily?: 'AMADERADO & ESPECIADO' | 'CÍTRICO & FLORAL BLANCO' | 'CUERO & RESINAS NOBLES' | 'TODAS') => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ isOpen, onClose }) => {
  const [selectedMoodId, setSelectedMoodId] = useState<OlfactoryMoodId>('madera');
  const soundEnabled = true;
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const selectedMood = OLFACTORY_MOODS.find((m) => m.id === selectedMoodId) || OLFACTORY_MOODS[0];

  // Friendly, soothing harmonic chime with gentle attack and warm acoustic timbre
  const playFriendlyChime = (type: OlfactoryMoodId | 'tab' | 'enter' = 'floral') => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const now = ctx.currentTime;

      // Gentle, friendly harmonic chord structures (soothing, warm, zen)
      const notesMap: Record<string, Array<{ freq: number; delay: number; gain: number; duration?: number }>> = {
        madera: [
          { freq: 293.66, delay: 0, gain: 0.028 },      // D4 warm fundamental
          { freq: 369.99, delay: 0.04, gain: 0.02 },   // F#4 warm third
          { freq: 440.00, delay: 0.08, gain: 0.018 },  // A4 calming fifth
        ],
        floral: [
          { freq: 329.63, delay: 0, gain: 0.028 },      // E4 bright warm root
          { freq: 415.30, delay: 0.04, gain: 0.02 },   // G#4
          { freq: 493.88, delay: 0.08, gain: 0.018 },  // B4 sparkling fifth
        ],
        cuero: [
          { freq: 261.63, delay: 0, gain: 0.03 },      // C4 deep resonant root
          { freq: 392.00, delay: 0.04, gain: 0.02 },   // G4 fifth
          { freq: 523.25, delay: 0.08, gain: 0.016 },  // C5 octave
        ],
        all: [
          { freq: 349.23, delay: 0, gain: 0.025 },
          { freq: 440.00, delay: 0.04, gain: 0.02 },
          { freq: 523.25, delay: 0.08, gain: 0.018 },
        ],
        tab: [
          { freq: 440.00, delay: 0, gain: 0.018, duration: 0.8 },     // A4 soft tick
          { freq: 554.37, delay: 0.03, gain: 0.014, duration: 0.8 }, // C#5 soft overtone
        ],
        enter: [
          { freq: 329.63, delay: 0, gain: 0.028 },      // E4
          { freq: 440.00, delay: 0.06, gain: 0.025 },  // A4
          { freq: 554.37, delay: 0.12, gain: 0.022 },  // C#5
          { freq: 659.25, delay: 0.18, gain: 0.018 },  // E5
        ],
      };

      const notes = notesMap[type] || notesMap.floral;

      // Soft lowpass filter to remove harsh digital high frequencies and give a warm, organic feel
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1600, now);
      filter.Q.setValueAtTime(0.7, now);
      filter.connect(ctx.destination);

      notes.forEach(({ freq, delay, gain, duration = 1.4 }) => {
        const noteTime = now + delay;
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        // Warm pure sine tone
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, noteTime);

        // Soft, gentle attack (35ms) to eliminate clicks, followed by smooth exponential decay
        gainNode.gain.setValueAtTime(0.0001, noteTime);
        gainNode.gain.exponentialRampToValueAtTime(gain, noteTime + 0.035);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, noteTime + duration);

        osc.connect(gainNode);
        gainNode.connect(filter);

        osc.start(noteTime);
        osc.stop(noteTime + duration + 0.05);
      });
    } catch {
      // Audio safety fallback
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const handleSelectMood = (mood: OlfactoryMood) => {
    setSelectedMoodId(mood.id);
    playFriendlyChime(mood.id);
  };

  const handleEnterWithMood = () => {
    playFriendlyChime('enter');
    onClose(selectedMood.familyCategory);
  };

  // Lock body scroll when welcome screen is open
  useEffect(() => {
    sessionStorage.removeItem('econase_welcome_dismissed');
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="econase-welcome-screen"
          ref={containerRef}
          onPointerMove={handlePointerMove}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 overflow-y-auto bg-[#11100F] text-[#F3EFE6] select-none flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
          aria-label="Bienvenida a ECONASE Haute Parfumerie"
        >
          {/* Dynamic interactive ambient spotlight */}
          <div
            className="pointer-events-none fixed inset-0 transition-all duration-700 ease-out"
            style={{
              background: `radial-gradient(850px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, ${selectedMood.glowColor}, transparent 65%)`,
            }}
          />

          {/* Luxury architectural framing ambient glow */}
          <div className="pointer-events-none fixed inset-0 opacity-[0.035] bg-[radial-gradient(#D1AF77_1px,transparent_1px)] [background-size:36px_36px]" />

          {/* Core Interactive Section with expansive luxury layout */}
          <main className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 sm:py-16 flex flex-col items-center justify-center text-center my-auto">
            {/* Clean brand presence with generous breathing room and luminous aura */}
            <motion.div
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-8 sm:mb-12 flex flex-col items-center"
            >
              <div className="relative flex items-center justify-center px-8 py-3">
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-25 pointer-events-none transition-all duration-700"
                  style={{ backgroundColor: selectedMood.accentColor }}
                />
                <EconaseLogo size="lg" variant="dark" className="relative z-10 filter drop-shadow-[0_4px_24px_rgba(209,175,119,0.22)]" />
              </div>
            </motion.div>

            {/* Main Luxury Title */}
            <motion.h1
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal tracking-tight text-[#FAF8F5] mb-5 max-w-5xl leading-[1.1]"
            >
              El arte de habitar tu propia memoria
            </motion.h1>

            {/* Poetic Subtitle */}
            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.22 }}
              className="text-base sm:text-lg md:text-xl text-[#BDB4A5] font-light max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-14 font-serif italic"
            >
              «Extracciones botánicas puras maceradas pacientemente en cristal. Selecciona la atmósfera olfativa con la que deseas iniciar tu recorrido.»
            </motion.p>

            {/* Expansive Olfactory Mood Grid (Three Pillars) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.32 }}
              className="w-full max-w-6xl mx-auto mb-10 sm:mb-14"
            >
              <div
                id="olfactory-mood-grid"
                role="radiogroup"
                aria-label="Selección de atmósfera olfativa"
                className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left"
              >
                {OLFACTORY_MOODS.map((mood) => {
                  const isSelected = selectedMoodId === mood.id;
                  return (
                    <button
                      key={mood.id}
                      id={`mood-card-${mood.id}`}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => handleSelectMood(mood)}
                      className={`relative p-6 sm:p-7 lg:p-8 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between group overflow-hidden border text-left ${
                        isSelected
                          ? 'bg-[#1C1A17] border-[#D1AF77] shadow-[0_0_36px_rgba(209,175,119,0.18)] scale-[1.02]'
                          : 'bg-[#151412]/90 border-[#2D2A25] hover:border-[#524B40] hover:bg-[#1A1816]'
                      }`}
                    >
                      {/* Top category row & status indicator */}
                      <div>
                        <div className="flex items-center justify-between w-full mb-3">
                          <span
                            className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-serif-luxury font-medium"
                            style={{ color: mood.accentColor }}
                          >
                            {mood.familyCategory}
                          </span>
                          <div
                            className={`w-2.5 h-2.5 rounded-full transition-all ${
                              isSelected ? 'scale-125 shadow-[0_0_10px_currentColor]' : 'opacity-25'
                            }`}
                            style={{ backgroundColor: mood.accentColor }}
                          />
                        </div>

                        <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#FAF8F5] mb-2 group-hover:text-white transition-colors">
                          {mood.title}
                        </h2>

                        <p className="text-xs sm:text-sm text-[#A89F91] leading-relaxed mb-6 font-light">
                          {mood.tagline}
                        </p>

                        {/* Pyramid notes preview for olfactory depth */}
                        <div className="space-y-2 py-3.5 border-y border-[#282521] text-xs">
                          <div className="flex items-start gap-2">
                            <span className="text-[10px] uppercase tracking-wider text-[#736B5E] w-14 shrink-0 pt-0.5">
                              Salida
                            </span>
                            <span className="text-[#D6CEC2] font-serif truncate">
                              {mood.notes.top}
                            </span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-[10px] uppercase tracking-wider text-[#736B5E] w-14 shrink-0 pt-0.5">
                              Fondo
                            </span>
                            <span className="text-[#D6CEC2] font-serif truncate">
                              {mood.notes.base}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom row: Maceration method & selection state */}
                      <div className="pt-4 mt-4 flex items-center justify-between text-xs text-[#82786B]">
                        <span className="text-[11px] font-serif italic truncate pr-2 text-[#9E9484]">
                          {mood.maceration}
                        </span>
                        <div
                          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-medium transition-all ${
                            isSelected
                              ? 'bg-[#D1AF77]/20 text-[#EBD9BA] border border-[#D1AF77]/50'
                              : 'text-[#82786B] group-hover:text-[#B5AB9B]'
                          }`}
                        >
                          {isSelected ? (
                            <>
                              <Check className="w-3 h-3 text-[#D1AF77]" />
                              <span>Elegido</span>
                            </>
                          ) : (
                            <span>Elegir</span>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Action Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.42 }}
              className="flex items-center justify-center w-full sm:w-auto"
            >
              <button
                id="enter-with-mood-btn"
                type="button"
                onClick={handleEnterWithMood}
                className="w-full sm:w-auto px-12 py-4.5 rounded-full bg-[#FAF8F5] text-[#141312] hover:bg-[#EBE5DA] transition-all duration-300 font-medium text-xs sm:text-sm tracking-[0.25em] uppercase cursor-pointer flex items-center justify-center gap-3 shadow-[0_10px_35px_rgba(0,0,0,0.5)] group hover:scale-[1.02]"
              >
                <span>Ingresar</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </motion.div>
          </main>

          {/* Minimalist Luxury Footer */}
          <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-6 sm:pb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#756E63] border-t border-[#23201C] pt-6">
            <span className="text-[11px] text-[#A69C8E] tracking-wider uppercase">
              Alta Perfumería de Autor · Maceración en Frío
            </span>

            <div className="flex items-center gap-4 text-[11px] tracking-wider uppercase text-[#8C8375]">
              <span>Frascos Recargables de 100 ML</span>
              <span>·</span>
              <span>Edición Limitada</span>
              <span>·</span>
              <span>100% Extracto Botánico</span>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
