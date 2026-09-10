import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { X, Sparkles, Feather, User, ShoppingBag, ArrowRight } from 'lucide-react';
import { EconaseLogo } from '../brand/EconaseLogo';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const mainNavItems = [
    {
      label: 'Catálogo de Fragancias',
      to: '/home',
      end: true,
      icon: Sparkles,
      caption: 'Ediciones exclusivas de autor',
    },
    {
      label: 'La Maison',
      to: '/home/maison',
      end: false,
      icon: Feather,
      caption: 'Historia, filosofía y materias primas',
    },
    {
      label: 'Mi Cuenta',
      to: '/home/perfil',
      end: false,
      icon: User,
      caption: 'Espacio personal y pedidos',
    },
    {
      label: 'Bolsa de Compras',
      to: '/home/bolsa',
      end: false,
      icon: ShoppingBag,
      caption: 'Revisión y solicitud de frascos',
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            id="sidebar-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-xs transition-opacity"
            aria-hidden="true"
          />

          {/* Lateral drawer / bandeja lateral */}
          <motion.aside
            id="sidebar-drawer"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed inset-y-0 left-0 z-50 w-84 max-w-[85vw] bg-[#F7F5F0] border-r border-[#E8E4DC] p-6 sm:p-8 shadow-2xl flex flex-col justify-between overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Bandeja lateral ECONASE"
          >
            {/* Header section */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E8E4DC]">
                <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#8C827A]">
                  Casa de Perfumes
                </span>
                <button
                  id="close-sidebar-btn"
                  type="button"
                  onClick={onClose}
                  className="p-2 -mr-2 rounded-full text-[#59524C] hover:text-[#1A1918] hover:bg-[#ECE8DF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1A1918]/20 cursor-pointer"
                  aria-label="Cerrar menú lateral"
                >
                  <X className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>

              {/* Logo & Brand Name in the sidebar */}
              <div id="sidebar-brand-section" className="mt-8 flex flex-col items-center justify-center text-center w-full">
                {/* Minimalist perfume emblem with ECONASE monogram */}
                <div
                  id="sidebar-logo"
                  className="w-16 h-16 rounded-full border border-[#D9D3C7] bg-white flex items-center justify-center shadow-xs mb-3 p-3 mx-auto"
                >
                  <svg
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-9 h-9 text-[#1A1918]"
                    aria-label="Emblema ECONASE"
                  >
                    <path
                      d="M 21 12 L 38 12 C 39.5 12 40 12.8 40 14.5 L 40 17 L 38 17 C 37 15 36 14.5 33 14.5 L 24.5 14.5 L 24.5 39.5 L 34 39.5 C 37 39.5 37.8 38.8 38.8 36.5 L 40.5 36.5 L 40.5 40 C 40.5 41.5 40 42 38.5 42 L 21 42 C 19.5 42 19 41.2 19 39.8 L 19 36.5 L 20.8 36.5 C 21.8 38.2 22.5 39 23.5 39 L 23.5 15 C 22.5 15 21.8 15.8 20.8 17.5 L 19 17.5 L 19 14.2 C 19 12.8 19.5 12 21 12 Z"
                      fill="currentColor"
                    />
                    <path
                      d="M 8 28.5 C 13 32, 19 25, 25 27 C 30 28.6, 36 31, 42 27"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>

                <div className="w-full flex items-center justify-center">
                  <EconaseLogo size="md" variant="light" />
                </div>
              </div>

              {/* Primary Navigation Sections */}
              <nav aria-label="Secciones del menú" className="mt-8 space-y-1">
                {mainNavItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.end}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `flex items-start gap-3.5 p-3 rounded-xl transition-all duration-150 group ${
                          isActive
                            ? 'bg-white border border-[#DDD7CD] shadow-2xs text-[#1A1918]'
                            : 'hover:bg-white/60 text-[#4D463F] hover:text-[#1A1918]'
                        }`
                      }
                    >
                      <div className="p-1.5 rounded-lg bg-[#FAF8F5] border border-[#E8E2D7] text-[#1A1918] group-hover:scale-105 transition-transform mt-0.5">
                        <Icon className="w-4 h-4" strokeWidth={1.75} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-serif-luxury text-sm font-medium block">
                          {item.label}
                        </span>
                        <span className="text-[11px] text-[#7A726A] line-clamp-1">
                          {item.caption}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity self-center text-[#8C827A]" />
                    </NavLink>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Atelier note */}
            <div className="pt-6 border-t border-[#E8E4DC] text-center">
              <p className="text-[11px] text-[#80766D] tracking-wider uppercase font-medium mb-1">
                Atelier de Perfumería
              </p>
              <p className="text-xs text-[#524B43]">
                Atención personalizada: atelier@econase.com
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
