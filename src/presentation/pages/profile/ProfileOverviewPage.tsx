import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { User, Shield, MapPin, PackageCheck, ArrowRight, Sparkles, LogIn } from 'lucide-react';

interface ProfileContextType {
  onOpenComingSoon: () => void;
}

export const ProfileOverviewPage: React.FC = () => {
  const context = useOutletContext<ProfileContextType>();
  const handleOpenModal = () => {
    if (context?.onOpenComingSoon) {
      context.onOpenComingSoon();
    }
  };

  return (
    <div className="space-y-8">
      {/* Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Details Summary (Guest Mode) */}
        <section className="bg-white border border-[#E8E4DC] rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#F4F1EA] text-[#1A1918]">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-serif-luxury text-xl font-medium text-[#1A1918]">
                    Estado de la Cuenta
                  </h2>
                  <span className="text-[10px] tracking-wider uppercase text-[#8A8177]">
                    Sesión como Invitado
                  </span>
                </div>
              </div>
              <span className="text-[10px] tracking-wider uppercase text-amber-800 bg-amber-50 border border-amber-200/60 px-2.5 py-0.5 rounded-full font-medium">
                Sin Registrar
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#524B44] leading-relaxed mb-6">
              Actualmente navega como invitado. Regístrese o inicie sesión en ECONASE para sincronizar sus compras, registrar direcciones de entrega prioritarias y disfrutar de invitaciones exclusivas a cosechas privadas.
            </p>
          </div>

          <button
            type="button"
            onClick={handleOpenModal}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#1A1918] hover:text-[#524B44] transition-colors cursor-pointer w-fit py-2"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Iniciar sesión o registrarse</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </button>
        </section>

        {/* Shipping Address Summary (Guest Mode) */}
        <section className="bg-white border border-[#E8E4DC] rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#F4F1EA] text-[#1A1918]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-serif-luxury text-xl font-medium text-[#1A1918]">
                    Libreta de Direcciones
                  </h2>
                  <span className="text-[10px] tracking-wider uppercase text-[#8A8177]">
                    0 Residencias Guardadas
                  </span>
                </div>
              </div>
              <span className="text-[10px] tracking-wider uppercase text-[#8A8177] bg-[#F5F2EC] px-2.5 py-0.5 rounded-full font-medium">
                Vacío
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#524B44] leading-relaxed mb-6">
              No hay direcciones de entrega asociadas a esta sesión de invitado. Los miembros registrados pueden guardar múltiples domicilios y disfrutar de portes asegurados gratuitos.
            </p>
          </div>

          <Link
            to="/home/perfil/direcciones"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#1A1918] hover:text-[#524B44] transition-colors w-fit py-2"
          >
            <span>Consultar libreta de direcciones</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </section>
      </div>

      {/* Orders Section (Guest Mode Empty State with Invitation) */}
      <section className="bg-white border border-[#E8E4DC] rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#EFECE5]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#F4F1EA] text-[#1A1918]">
              <PackageCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif-luxury text-xl font-medium text-[#1A1918]">
                Historial de Pedidos
              </h2>
              <p className="text-xs text-[#7A7269]">
                Gestión y seguimiento de frascos de alta perfumería
              </p>
            </div>
          </div>

          <Link
            to="/home/perfil/pedidos"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1A1918] hover:text-[#524B44] transition-colors"
          >
            <span>Ver detalle de pedidos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-[#ECE7DE] text-center max-w-xl mx-auto my-4">
          <p className="font-serif-luxury text-lg font-medium text-[#1A1918] mb-2">
            Aún no dispone de pedidos en esta cuenta
          </p>
          <p className="text-xs sm:text-sm text-[#6E665D] leading-relaxed mb-6">
            Al realizar sus compras como miembro del Círculo ECONASE, cada lote numerado, certificado artesanal y estado de envío quedará registrado aquí.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleOpenModal}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#1A1918] text-white text-xs uppercase tracking-wider font-medium hover:bg-[#332F2C] transition-colors cursor-pointer shadow-xs"
            >
              Iniciar sesión o registrarse
            </button>
            <Link
              to="/home"
              className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#DDD7CD] text-[#1A1918] text-xs uppercase tracking-wider font-medium hover:bg-white transition-colors"
            >
              Ver Fragancias de Autor
            </Link>
          </div>
        </div>
      </section>

      {/* Maison Exclusivity Banner */}
      <div className="bg-[#24211E] text-[#FAF8F5] rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-[#36322E] text-[#E0D8CC] shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#B8AEA2] font-semibold block mb-1">
              Invitación de la Maison
            </span>
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium tracking-tight text-white mb-2">
              Únase al Círculo Privado ECONASE
            </h3>
            <p className="text-xs sm:text-sm text-[#C7BFB5] leading-relaxed max-w-2xl font-light">
              Los miembros registrados obtienen reserva preferente de cosechas botánicas limitadas, dos muestras de 2 ml en cada frasco para prueba previa en piel y consulta olfativa directa con nuestros artesanos de Grasse.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleOpenModal}
          className="px-6 py-3 rounded-full bg-white text-[#1A1918] text-xs uppercase tracking-wider font-medium hover:bg-[#EFECE6] transition-colors whitespace-nowrap shadow-xs cursor-pointer active:scale-[0.99]"
        >
          Iniciar sesión o registrarse
        </button>
      </div>
    </div>
  );
};
