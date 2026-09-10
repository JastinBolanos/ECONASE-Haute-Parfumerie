import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="mt-auto border-t border-[#EAE5DC] bg-[#FAF9F5] py-10 px-4 sm:px-6">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#80766D]">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-serif-luxury text-sm font-medium tracking-wider text-[#1A1918]">
            ECONASE
          </span>
          <span className="text-[11px] text-[#8F867E]">
            Alta Perfumería de Autor · Grasse & Madrid
          </span>
        </div>

        {/* Semantic navigation links with natural business labels */}
        <nav aria-label="Enlaces al pie" className="flex items-center flex-wrap justify-center gap-6">
          <Link
            to="/home"
            className="hover:text-[#1A1918] transition-colors"
          >
            Catálogo
          </Link>
          <Link
            to="/home/maison"
            className="hover:text-[#1A1918] transition-colors"
          >
            La Maison
          </Link>
          <Link
            to="/home/perfil"
            className="hover:text-[#1A1918] transition-colors"
          >
            Mi Cuenta
          </Link>
          <Link
            to="/home/bolsa"
            className="hover:text-[#1A1918] transition-colors"
          >
            Bolsa de Compras
          </Link>
        </nav>

        <p className="tracking-wider text-[11px]">
          © {new Date().getFullYear()} ECONASE. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
