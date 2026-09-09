import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { User, Shield, MapPin, PackageCheck, LogIn } from 'lucide-react';
import { ComingSoonModal } from '../../components/common/ComingSoonModal';

export const ProfileLayout: React.FC = () => {
  const location = useLocation();
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

  const handleOpenComingSoon = () => {
    setIsComingSoonOpen(true);
  };

  const getSubpageName = () => {
    if (location.pathname.endsWith('/ajustes')) return 'Ajustes y Seguridad';
    if (location.pathname.endsWith('/direcciones')) return 'Libreta de Direcciones';
    if (location.pathname.endsWith('/pedidos')) return 'Mis Pedidos';
    return 'Resumen de Cuenta';
  };

  const navTabs = [
    {
      label: 'Resumen de Cuenta',
      to: '/home/perfil',
      end: true,
      icon: User,
    },
    {
      label: 'Ajustes y Seguridad',
      to: '/home/perfil/ajustes',
      end: false,
      icon: Shield,
    },
    {
      label: 'Libreta de Direcciones',
      to: '/home/perfil/direcciones',
      end: false,
      icon: MapPin,
    },
    {
      label: 'Mis Pedidos',
      to: '/home/perfil/pedidos',
      end: false,
      icon: PackageCheck,
    },
  ];

  return (
    <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-8 sm:py-14">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Inicio', to: '/home' },
          { label: 'Mi Cuenta', to: '/home/perfil' },
          ...(location.pathname !== '/home/perfil'
            ? [{ label: getSubpageName() }]
            : []),
        ]}
      />

      {/* Header Profile Banner in Guest Mode */}
      <header className="bg-white border border-[#E8E4DC] rounded-3xl p-6 sm:p-8 mb-8 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Neutral Guest Icon */}
            <div className="w-16 h-16 rounded-full bg-[#F4F1EA] border border-[#DDD7CD] flex items-center justify-center text-[#736A61] shadow-xs shrink-0">
              <User className="w-7 h-7" strokeWidth={1.5} />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#8A8177] font-semibold">
                  Modo Invitado · Círculo ECONASE
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-600" />
              </div>

              <h1 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#1A1918]">
                Invitado
              </h1>

              <p className="text-xs text-[#6B635A] mt-0.5">
                Acceda para consultar pedidos guardados, residencias y servicios confidenciales.
              </p>
            </div>
          </div>

          {/* Action Button: Iniciar sesión o registrarse */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              id="guest-login-register-btn"
              type="button"
              onClick={handleOpenComingSoon}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1A1918] text-[#FAF9F5] text-xs font-medium tracking-wider uppercase hover:bg-[#332F2C] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-[0.99]"
            >
              <LogIn className="w-4 h-4" />
              <span>Iniciar sesión o registrarse</span>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs Bar */}
      <nav
        aria-label="Pestañas de Mi Cuenta"
        className="flex items-center gap-2 border-b border-[#E5E0D6] mb-8 overflow-x-auto pb-1 scrollbar-none"
      >
        {navTabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.end}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap rounded-t-xl transition-all duration-150 border-b-2 -mb-[2px] ${
                  isActive
                    ? 'border-[#1A1918] text-[#1A1918] bg-white/70 font-semibold shadow-2xs'
                    : 'border-transparent text-[#756C63] hover:text-[#1A1918] hover:bg-[#F2EFE8]'
                }`
              }
            >
              <Icon className="w-4 h-4 shrink-0" strokeWidth={1.75} />
              <span>{tab.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Nested Route View */}
      <main>
        <Outlet context={{ onOpenComingSoon: handleOpenComingSoon }} />
      </main>

      {/* Coming Soon Modal */}
      <ComingSoonModal
        isOpen={isComingSoonOpen}
        onClose={() => setIsComingSoonOpen(false)}
        title="Próximamente"
        message="La boutique digital y el registro exclusivo de clientes de ECONASE se habilitarán muy pronto en nuestra próxima actualización."
      />
    </div>
  );
};
