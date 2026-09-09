import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto px-4 py-24 text-center">
      <div className="w-16 h-16 rounded-full bg-[#F4F1EA] text-[#80766D] mx-auto flex items-center justify-center mb-6">
        <Compass className="w-8 h-8" strokeWidth={1.25} />
      </div>
      <h1 className="font-serif-luxury text-3xl font-medium text-[#1A1918] mb-3">
        Página no encontrada
      </h1>
      <p className="text-xs text-[#6B635A] leading-relaxed mb-8">
        La sección que intenta consultar no existe o ha sido reubicada dentro del catálogo de la Maison.
      </p>
      <Link
        to="/home"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1918] text-white text-xs uppercase tracking-wider font-medium hover:bg-[#332F2C] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Regresar al Catálogo Principal</span>
      </Link>
    </div>
  );
};
