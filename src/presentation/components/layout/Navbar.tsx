import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, ShoppingBag, User } from 'lucide-react';
import { EconaseLogo } from '../brand/EconaseLogo';

interface NavbarProps {
  onOpenSidebar: () => void;
  cartCount: number;
  onOpenWelcome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSidebar, cartCount, onOpenWelcome }) => {
  return (
    <header className="relative sticky top-0 z-30 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#EAE5DC]">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 h-16 flex items-center justify-between gap-4">
        {/* Left: Button to open sidebar */}
        <div className="flex items-center gap-3 z-10">
          <button
            id="open-sidebar-btn"
            type="button"
            onClick={onOpenSidebar}
            className="flex items-center gap-2.5 px-3 py-2 rounded-full text-sm font-medium text-[#2E2A26] hover:text-[#1A1918] hover:bg-[#EFECE4] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1A1918]/20 cursor-pointer"
            aria-label="Abrir menú de navegación ECONASE"
          >
            <Menu className="w-5 h-5" strokeWidth={1.5} />
            <span className="hidden sm:inline text-xs tracking-widest uppercase text-[#544D46]">
              Menú
            </span>
          </button>
        </div>

        {/* Center: Brand logo placed in the exact middle of the screen - opens welcome on click */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-auto">
          <button
            type="button"
            id="brand-header-link"
            onClick={onOpenWelcome}
            className="flex flex-col items-center group py-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1918]/20 rounded-md"
            aria-label="ECONASE - Abrir experiencia de bienvenida"
            title="Volver a la bienvenida interactiva"
          >
            <span id="brand-header-title" className="m-0 flex items-center transition-transform duration-200 group-hover:scale-[1.03]">
              <EconaseLogo size="md" variant="light" />
              <span className="sr-only">ECONASE</span>
            </span>
          </button>
        </div>

        {/* Right: Main navigation links on desktop + Cart */}
        <div className="flex items-center gap-2 sm:gap-4 z-10">
          {/* Main sections for quick access on desktop */}
          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-1 text-xs tracking-widest uppercase text-[#6B635A]">
            <NavLink
              to="/home"
              end
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full transition-colors ${
                  isActive
                    ? 'text-[#1A1918] font-semibold bg-black/5'
                    : 'hover:text-[#1A1918]'
                }`
              }
            >
              Catálogo
            </NavLink>

            <NavLink
              to="/home/maison"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full transition-colors ${
                  isActive
                    ? 'text-[#1A1918] font-semibold bg-black/5'
                    : 'hover:text-[#1A1918]'
                }`
              }
            >
              La Maison
            </NavLink>

            <NavLink
              to="/home/perfil"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#1A1918] font-semibold bg-black/5'
                    : 'hover:text-[#1A1918]'
                }`
              }
            >
              <User className="w-3.5 h-3.5" />
              <span>Mi Cuenta</span>
            </NavLink>
          </nav>

          {/* Cart link to /home/bolsa */}
          <Link
            to="/home/bolsa"
            id="cart-indicator-btn"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#DDD7CD] bg-white/70 text-[#2E2A26] text-xs font-medium tracking-wide shadow-xs hover:border-[#1A1918] transition-colors shrink-0"
            aria-label={`Ver bolsa de compras con ${cartCount} artículos`}
          >
            <ShoppingBag className="w-4 h-4 text-[#59524C]" strokeWidth={1.5} />
            <span className="hidden sm:inline text-[#6E665E]">Bolsa</span>
            <span
              id="cart-count-badge"
              className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-[#1A1918] text-white text-[11px] font-semibold"
            >
              {cartCount}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};
