import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { MapPin, LogIn, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProfileContextType {
  onOpenComingSoon: () => void;
}

export const ProfileAddressesPage: React.FC = () => {
  const context = useOutletContext<ProfileContextType>();

  const handleOpenModal = () => {
    if (context?.onOpenComingSoon) {
      context.onOpenComingSoon();
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-[#E8E4DC] rounded-3xl p-6 sm:p-12 shadow-xs">
        <div className="max-w-xl mx-auto text-center py-6">
          <div className="w-16 h-16 rounded-full bg-[#F5F2EC] text-[#80766D] mx-auto flex items-center justify-center mb-5">
            <MapPin className="w-8 h-8" strokeWidth={1.5} />
          </div>

          <span className="text-[10px] tracking-[0.25em] uppercase text-[#8A8177] font-semibold block mb-2">
            Residencias y Destinos
          </span>

          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#1A1918] mb-3">
            Libreta de direcciones vacía
          </h2>

          <p className="text-xs sm:text-sm text-[#6B635A] leading-relaxed mb-8 font-light">
            En el modo invitado no constan direcciones habituales de entrega. Le invitamos a crear su cuenta en el Círculo ECONASE para registrar sus residencias permanentes, instrucciones especiales de entrega en mano y acceder a envíos prioritarios en 24/48h.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              id="addresses-guest-login-btn"
              type="button"
              onClick={handleOpenModal}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#1A1918] text-[#FAF9F5] text-xs font-medium tracking-wider uppercase hover:bg-[#332F2C] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <LogIn className="w-4 h-4" />
              <span>Iniciar sesión o registrarse</span>
            </button>

            <Link
              to="/home"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#DDD7CD] text-[#1A1918] text-xs font-medium tracking-wider uppercase hover:bg-[#FAF9F5] transition-colors flex items-center justify-center gap-2"
            >
              <span>Ver Catálogo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-[#F6F4EE] border border-[#E3DDD1] flex items-center gap-4 text-xs text-[#524B43]">
        <ShieldCheck className="w-5 h-5 text-emerald-800 shrink-0" />
        <p>
          <strong>Confidencialidad Garantizada:</strong> Sus datos de residencia y entrega están protegidos bajo protocolos de privacidad estrictos de la Maison ECONASE.
        </p>
      </div>
    </div>
  );
};
