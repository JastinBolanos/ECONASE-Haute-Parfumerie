import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, X, Volume2, VolumeX, Compass } from 'lucide-react';
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
  const [activeNoteTab, setActiveNoteTab] = useState<'top' | 'heart' | 'base'>('heart');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [rememberChoice, setRememberChoice] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const selectedMood = OLFACTORY_MOODS.find((m) => m.id === selectedMoodId) || OLFACTORY_MOODS[0];

  // Subtle luxury harmonic chime using Web Audio API
  const playHarmonicChime = (freq = 440) => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + 1.2);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } catch {
      // Ignore audio failure if not allowed
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
    playHarmonicChime(mood.id === 'madera' ? 329.63 : mood.id === 'floral' ? 440 : 277.18);
  };

  const handleEnterWithMood = () => {
    playHarmonicChime(523.25);
    if (rememberChoice) {
      sessionStorage.setItem('econase_welcome_dismissed', 'true');
    }
    onClose(selectedMood.familyCategory);
  };

  const handleEnterAll = () => {
    playHarmonicChime(440);
    if (rememberChoice) {
      sessionStorage.setItem('econase_welcome_dismissed', 'true');
    }
    onClose('TODAS');
  };

  const handleDismiss = () => {
    if (rememberChoice) {
      sessionStorage.setItem('econase_welcome_dismissed', 'true');
    }
    onClose();
  };

  // Lock body scroll when welcome screen is open
  useEffect(() => {
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

          {/* Minimalist ornamental grid lines for luxury architectural framing */}
          <div className="pointer-events-none fixed inset-0 opacity-[0.035] bg-[radial-gradient(#D1AF77_1px,transparent_1px)] [background-size:32px_32px]" />

          {/* Top Bar Navigation */}
          <header className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 pt-6 sm:pt-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D1AF77] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#A89F91] font-light">
                Atelier Parfumeur · Grasse & Madrid
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Subtle Audio Ambient Chime Toggle */}
              <button
                id="welcome-audio-toggle"
                type="button"
                onClick={() => {
                  const next = !soundEnabled;
                  setSoundEnabled(next);
                  if (next) playHarmonicChime(440);
                }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2D2A26] bg-[#1A1816]/70 hover:border-[#D1AF77]/60 text-[#A69E92] hover:text-[#E8DFC8] transition-all text-[11px] tracking-wider uppercase cursor-pointer"
                title={soundEnabled ? 'Silenciar atmósfera sonora' : 'Activar acordes sonoros'}
                aria-label={soundEnabled ? 'Silenciar acordes' : 'Activar acordes'}
              >
                {soundEnabled ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-[#D1AF77]" />
                    <span className="hidden sm:inline text-[10px]">Acordes Sonoros</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline text-[10px]">Silencio</span>
                  </>
                )}
              </button>

              {/* Direct Skip Button */}
              <button
                id="welcome-skip-btn"
                type="button"
                onClick={handleDismiss}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[#A69E92] hover:text-[#FAF8F5] hover:bg-white/5 transition-colors text-xs tracking-wider uppercase cursor-pointer"
                aria-label="Saltar bienvenida y explorar"
              >
                <span className="text-[11px]">Saltar</span>
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </header>

          {/* Core Interactive Section */}
          <main className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 py-8 sm:py-12 flex flex-col items-center justify-center text-center my-auto">
            {/* Monogram emblem with glowing aura */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-5 flex flex-col items-center"
            >
              <div className="relative mb-3">
                <div
                  className="absolute -inset-3 rounded-full blur-md opacity-40 transition-all duration-700"
                  style={{ backgroundColor: selectedMood.accentColor }}
                />
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#3E3830] bg-[#171614] flex items-center justify-center shadow-2xl p-2.5">
                  <EconaseLogo size="sm" variant="dark" />
                </div>
              </div>

              <span className="text-[10px] sm:text-[11px] tracking-[0.45em] uppercase text-[#B5A996] font-medium block">
                Haute Parfumerie · Édition MMXXVI
              </span>
            </motion.div>

            {/* Main Luxury Title */}
            <motion.h1
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FAF8F5] mb-4 max-w-3xl leading-[1.12]"
            >
              El arte de habitar tu propia memoria
            </motion.h1>

            {/* Poetic Subtitle */}
            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-sm sm:text-base text-[#B0A799] font-light max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10 font-serif italic"
            >
              «Quince extracciones botánicas raras maceradas pacientemente en cristal. Selecciona la atmósfera olfativa que deseas iniciar.»
            </motion.p>

            {/* Interactive Olfactory Mood Selector (Three Pillars) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="w-full mb-8"
            >
              <div className="text-center mb-3">
                <span className="text-[11px] tracking-[0.25em] uppercase text-[#8F8677] font-medium flex items-center justify-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-[#D1AF77]" />
                  Elige tu Acorde de Entrada
                </span>
              </div>

              <div
                id="olfactory-mood-grid"
                role="radiogroup"
                aria-label="Selección de acorde de fragancia"
                className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto text-left"
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
                      className={`relative p-4 sm:p-5 rounded-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group overflow-hidden border ${
                        isSelected
                          ? 'bg-[#1D1B18] border-[#D1AF77] shadow-[0_0_24px_rgba(209,175,119,0.14)] scale-[1.01]'
                          : 'bg-[#161513]/80 border-[#2E2B26] hover:border-[#524B40] hover:bg-[#1A1816]'
                      }`}
                    >
                      {/* Active indicator bead */}
                      <div className="flex items-center justify-between w-full mb-2.5">
                        <span
                          className="text-[10px] tracking-[0.25em] uppercase font-serif-luxury"
                          style={{ color: mood.accentColor }}
                        >
                          {mood.subtitle}
                        </span>
                        <div
                          className={`w-2 h-2 rounded-full transition-all ${
                            isSelected ? 'scale-125' : 'opacity-25'
                          }`}
                          style={{ backgroundColor: mood.accentColor }}
                        />
                      </div>

                      <h2 className="font-serif-luxury text-lg sm:text-xl font-medium text-[#FAF8F5] mb-1.5 group-hover:text-white">
                        {mood.title}
                      </h2>

                      <p className="text-xs text-[#9E9587] leading-relaxed line-clamp-2 mb-3">
                        {mood.tagline}
                      </p>

                      <div className="pt-2.5 border-t border-[#292622] flex items-center justify-between text-[11px] text-[#7A7265]">
                        <span className="font-serif italic truncate pr-2">
                          {mood.notes.base.split(',')[0]}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-[#A69C8C] shrink-0 font-medium">
                          {isSelected ? 'Seleccionado' : 'Explorar'}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Interactive Note Harmonizer Preview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="w-full max-w-2xl bg-[#171513]/90 border border-[#2D2A25] rounded-xl p-4 sm:p-5 mb-8 text-left relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#26231F]">
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#8C8375] font-medium block">
                    Alquimia Olfativa de {selectedMood.title}
                  </span>
                  <p className="text-xs font-serif italic text-[#D1AF77] mt-0.5">
                    {selectedMood.quote}
                  </p>
                </div>

                {/* Note Stage Tabs: Salida / Corazón / Fondo */}
                <div className="flex items-center gap-1 bg-[#11100F] p-1 rounded-lg border border-[#2D2A26] self-start sm:self-auto shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveNoteTab('top');
                      playHarmonicChime(587.33);
                    }}
                    className={`px-2.5 py-1 rounded text-[10px] tracking-wider uppercase transition-colors cursor-pointer ${
                      activeNoteTab === 'top'
                        ? 'bg-[#292621] text-[#FAF8F5] font-semibold'
                        : 'text-[#7D7569] hover:text-[#B5AC9E]'
                    }`}
                  >
                    Salida
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveNoteTab('heart');
                      playHarmonicChime(440);
                    }}
                    className={`px-2.5 py-1 rounded text-[10px] tracking-wider uppercase transition-colors cursor-pointer ${
                      activeNoteTab === 'heart'
                        ? 'bg-[#292621] text-[#FAF8F5] font-semibold'
                        : 'text-[#7D7569] hover:text-[#B5AC9E]'
                    }`}
                  >
                    Corazón
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveNoteTab('base');
                      playHarmonicChime(329.63);
                    }}
                    className={`px-2.5 py-1 rounded text-[10px] tracking-wider uppercase transition-colors cursor-pointer ${
                      activeNoteTab === 'base'
                        ? 'bg-[#292621] text-[#FAF8F5] font-semibold'
                        : 'text-[#7D7569] hover:text-[#B5AC9E]'
                    }`}
                  >
                    Fondo
                  </button>
                </div>
              </div>

              {/* Active Note Content */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-wider text-[#A89F90] block mb-1">
                    {activeNoteTab === 'top' && 'Notas de Cabeza (Primeros 15 minutos)'}
                    {activeNoteTab === 'heart' && 'Cuerpo & Rastro Olfativo (2 a 6 horas)'}
                    {activeNoteTab === 'base' && 'Acorde de Fijación & Memoria (+12 horas)'}
                  </span>
                  <p className="text-sm text-[#EBE6DC] font-medium font-serif">
                    {selectedMood.notes[activeNoteTab]}
                  </p>
                </div>
                <div className="hidden sm:block text-right shrink-0">
                  <span className="text-[10px] uppercase tracking-wider text-[#696257] block">
                    Método
                  </span>
                  <span className="text-[11px] text-[#A69C8E]">
                    {selectedMood.maceration}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              {/* Enter with selected mood */}
              <button
                id="enter-with-mood-btn"
                type="button"
                onClick={handleEnterWithMood}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FAF8F5] text-[#141312] hover:bg-[#EBE5DA] transition-all duration-200 font-medium text-xs sm:text-sm tracking-widest uppercase cursor-pointer flex items-center justify-center gap-2.5 shadow-lg group hover:scale-[1.02]"
              >
                <span>Entrar con {selectedMood.title}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Enter and explore all */}
              <button
                id="enter-all-collection-btn"
                type="button"
                onClick={handleEnterAll}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-[#3E3A33] hover:border-[#D1AF77] text-[#D4CDC1] hover:text-[#FAF8F5] hover:bg-[#1A1816] transition-all duration-200 text-xs sm:text-sm tracking-widest uppercase cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D1AF77]" />
                <span>Explorar las 15 Fragancias</span>
              </button>
            </motion.div>
          </main>

          {/* Minimalist Luxury Footer */}
          <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 pb-6 sm:pb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#756E63] border-t border-[#23201C] pt-5">
            {/* Session remember checkbox */}
            <label className="flex items-center gap-2.5 cursor-pointer text-[11px] text-[#8C8375] hover:text-[#B8AF9F] transition-colors">
              <input
                id="remember-welcome-choice"
                type="checkbox"
                checked={rememberChoice}
                onChange={(e) => setRememberChoice(e.target.checked)}
                className="w-3.5 h-3.5 rounded border-[#38332B] bg-[#171513] text-[#D1AF77] focus:ring-0 focus:outline-none cursor-pointer"
              />
              <span>No volver a mostrar en esta sesión de navegación</span>
            </label>

            <div className="flex items-center gap-4 text-[11px] tracking-wider uppercase">
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
