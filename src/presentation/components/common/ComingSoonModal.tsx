import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles } from 'lucide-react';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export const ComingSoonModal: React.FC<ComingSoonModalProps> = ({
  isOpen,
  onClose,
  title = 'Próximamente',
  message = 'La boutique digital y el registro exclusivo de clientes de ECONASE se habilitarán muy pronto en nuestra próxima actualización.',
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when modal is open
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
        <div
          id="coming-soon-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-[#FAF9F5] border border-[#DDD6CB] rounded-3xl p-6 sm:p-10 shadow-2xl text-center my-auto"
          >
            {/* Close Button 'X' */}
            <button
              id="close-modal-btn"
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-[#857B72] hover:text-[#1A1918] hover:bg-[#EFECE5] rounded-full transition-colors cursor-pointer"
              aria-label="Cerrar aviso"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Emblem / Icon */}
            <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#EFECE5] border border-[#DDD7CD] flex items-center justify-center text-[#1A1918] shadow-xs">
              <Sparkles className="w-6 h-6" strokeWidth={1.5} />
            </div>

            {/* Eyebrow */}
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#8A8177] font-semibold block mb-2">
              ECONASE · Alta Perfumería
            </span>

            {/* Title */}
            <h2
              id="modal-headline"
              className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#1A1918] tracking-tight mb-4"
            >
              {title}
            </h2>

            {/* Message */}
            <p className="text-xs sm:text-sm text-[#5C544D] leading-relaxed mb-8 font-light">
              {message}
            </p>

            {/* Action Button: 'Entendido' */}
            <button
              id="modal-confirm-btn"
              type="button"
              onClick={onClose}
              className="w-full py-3.5 px-8 rounded-full bg-[#1A1918] text-[#FAF9F5] text-xs font-medium tracking-widest uppercase hover:bg-[#332F2C] active:scale-[0.99] transition-all shadow-xs cursor-pointer"
            >
              Entendido
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
