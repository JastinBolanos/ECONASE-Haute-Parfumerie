import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { useCatalog } from '../../hooks/useCatalog';
import { useCart } from '../../hooks/useCart';
import { Check, Plus, ShieldCheck, Sparkles, ArrowLeft, Droplets, Clock, Award } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products, isLoading } = useCatalog();
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const product = products.find((p) => p.id === id);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-[1600px] mx-auto px-4 py-24 text-center text-xs tracking-widest uppercase text-[#8A8177]">
        Cargando notas olfativas de la fragancia...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="w-full max-w-md mx-auto px-4 py-20 text-center">
        <h2 className="font-serif-luxury text-2xl font-medium text-[#1A1918] mb-3">
          Fragancia no encontrada
        </h2>
        <p className="text-xs text-[#736B63] mb-6">
          La creación que busca no forma parte del catálogo activo de la Maison.
        </p>
        <Link
          to="/home"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1918] text-white text-xs uppercase tracking-wider font-medium hover:bg-[#332F2C]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver al Catálogo</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-8 sm:py-14">
      {/* Breadcrumbs with clean business labels */}
      <Breadcrumbs
        items={[
          { label: 'Inicio', to: '/home' },
          { label: 'Catálogo de Fragancias', to: '/home' },
          { label: product.name },
        ]}
      />

      {/* Main Product Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-6">
        {/* Visual Showcase (Left Column - 6 Cols) */}
        <div className="lg:col-span-6 bg-[#F4F1EA] border border-[#E5DFD4] rounded-3xl relative flex items-center justify-center p-6 sm:p-12 lg:p-14 min-h-[360px] sm:min-h-[460px] lg:min-h-[620px] overflow-hidden shadow-xs">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4ED] via-[#EFECE3] to-[#E8E3D8] opacity-90" />

          {/* Badges */}
          <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-6 z-10 flex items-center justify-between gap-2 flex-wrap">
            <span className="px-3 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-medium tracking-widest uppercase bg-white/90 backdrop-blur-xs text-[#474039] rounded-full border border-[#DDD6CB]">
              {product.volume} · Extrait de Parfum
            </span>
            <span className="px-3 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-white/90 backdrop-blur-xs rounded-full border border-[#DDD6CB]">
              DISPONIBLE
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-full max-w-[260px] sm:max-w-[340px] md:max-w-[380px] aspect-[3/4] my-6"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80';
              }}
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Bottom highlight pill */}
          <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-6 z-10 flex items-center justify-center">
            <span className="px-3.5 py-1 sm:py-1.5 text-[10px] sm:text-[11px] uppercase tracking-widest text-[#736A61] bg-white/80 backdrop-blur-xs rounded-full border border-[#DDD6CB] text-center">
              Frasco de cristal pesado elaborado a mano
            </span>
          </div>
        </div>

        {/* Detailed Editorial & Olfactory Pyramid (Right Column - 6 Cols) */}
        <div className="lg:col-span-6 bg-white border border-[#E8E4DC] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs tracking-wider uppercase text-[#857B72] mb-3 flex-wrap gap-2">
              <span>{product.category}</span>
              <span className="text-emerald-700 font-medium">Disponible para Envío</span>
            </div>

            <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1918] tracking-tight mb-2 break-words">
              {product.name}
            </h1>

            <p className="text-xs tracking-[0.25em] uppercase text-[#736A61] mb-6">
              {product.subtitle}
            </p>

            <p className="text-sm sm:text-base text-[#4A453F] leading-relaxed mb-8 font-normal">
              {product.description}
            </p>

            {/* Complete Olfactory Pyramid */}
            <div className="bg-[#FAF9F5] border border-[#EAE5DB] rounded-2xl p-6 sm:p-8 mb-8">
              <h3 className="text-xs uppercase tracking-widest text-[#7D736A] font-semibold mb-5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#1A1918]" />
                <span>Pirámide Olfativa de Autor</span>
              </h3>

              <div className="space-y-5 text-xs">
                <div className="pb-4 border-b border-[#ECE7DD]">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8A8177] block mb-1">
                    Notas de Salida (Primeros 15 a 30 minutos)
                  </span>
                  <span className="text-[#1A1918] font-medium text-sm sm:text-base block">
                    {product.olfactoryNotes.top}
                  </span>
                </div>

                <div className="pb-4 border-b border-[#ECE7DD]">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8A8177] block mb-1">
                    Notas de Corazón (Evolución de 2 a 6 horas)
                  </span>
                  <span className="text-[#1A1918] font-medium text-sm sm:text-base block">
                    {product.olfactoryNotes.heart}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8A8177] block mb-1">
                    Notas de Fondo (Fijación permanente en piel)
                  </span>
                  <span className="text-[#1A1918] font-medium text-sm sm:text-base block">
                    {product.olfactoryNotes.base}
                  </span>
                </div>
              </div>
            </div>

            {/* Quality & Craftsmanship guarantee */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F6F4EE] border border-[#E3DDD1] text-xs text-[#5C554D]">
                <Clock className="w-4 h-4 text-[#1A1918] shrink-0 mt-0.5" />
                <p>
                  <strong>Maceración Lenta:</strong> 90 días naturales en barrica de cristal oscuro.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F6F4EE] border border-[#E3DDD1] text-xs text-[#5C554D]">
                <Droplets className="w-4 h-4 text-[#1A1918] shrink-0 mt-0.5" />
                <p>
                  <strong>Muestra de Cortesía:</strong> Frasco de 2 ml para probar en piel antes de desprecintar.
                </p>
              </div>
            </div>
          </div>

          {/* Price & Action */}
          <div className="pt-6 border-t border-[#EFECE5]">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8A8177] block">
                  Precio de la Creación
                </span>
                <span className="text-xs text-[#7A7269]">IVA y portes asegurados incluidos</span>
              </div>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-serif-luxury font-medium text-[#1A1918] whitespace-nowrap">
                {product.price},00 {product.currency}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={handleAddToCart}
                className={`w-full sm:flex-1 py-4 px-8 rounded-full text-xs font-medium tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                  isAdded
                    ? 'bg-emerald-800 text-white'
                    : 'bg-[#1A1918] text-white hover:bg-[#332F2C] active:scale-[0.99]'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" strokeWidth={2} />
                    <span>Añadido a la Bolsa de Compras</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" strokeWidth={2} />
                    <span>Añadir a la Bolsa de Compras</span>
                  </>
                )}
              </button>

              <Link
                to="/home"
                className="w-full sm:w-auto px-6 py-4 rounded-full border border-[#DDD7CD] text-xs uppercase tracking-wider font-medium text-[#59524A] hover:text-[#1A1918] hover:bg-[#FAF9F5] transition-colors text-center"
              >
                Explorar Colección
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
