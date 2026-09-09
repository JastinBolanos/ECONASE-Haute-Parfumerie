import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check, Plus, ArrowRight } from 'lucide-react';
import { Product } from '../../../domain/entities/Product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1800);
  };

  const formattedPrice = `${product.price},00 ${product.currency}`;

  return (
    <article
      id={`product-card-${product.id}`}
      className="w-full bg-white border border-[#E8E3DA] rounded-3xl shadow-xs overflow-hidden group flex flex-col justify-between hover:border-[#CCC4B8] hover:shadow-md transition-all duration-300 min-w-0"
    >
      {/* Product Image Section */}
      <div className="relative bg-[#F4F1EA] flex flex-col justify-between p-3.5 sm:p-4 overflow-hidden min-h-[260px] sm:min-h-[280px]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4ED] via-[#EFECE3] to-[#E8E3D8] opacity-80" />

        {/* Top Badges Bar: Always above image, fully responsive and non-breaking */}
        <div className="relative z-20 flex items-center justify-between gap-2 w-full pointer-events-none">
          <span className="shrink-0 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-medium tracking-wider sm:tracking-widest uppercase bg-white/95 backdrop-blur-md text-[#59524A] rounded-full border border-[#DDD6CB] shadow-2xs whitespace-nowrap">
            {product.volume}
          </span>
          <span className="shrink-0 text-[8.5px] sm:text-[9px] uppercase tracking-wider font-semibold text-emerald-800 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#DDD6CB] shadow-2xs whitespace-nowrap flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 inline-block" />
            DISPONIBLE
          </span>
        </div>

        {/* Perfume image with link: constrained in flex-1 so it never overlaps the badges */}
        <div className="relative z-10 flex-1 flex items-center justify-center py-2 min-h-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-[140px] sm:max-w-[165px] aspect-[3/4] flex items-center justify-center"
          >
            <Link
              to={`/home/fragancias/${product.id}`}
              className="block w-full h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1A1918]/20 rounded-xl"
              aria-label={`Ver detalles de ${product.name}`}
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                referrerPolicy="no-referrer"
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80';
                }}
                className={`w-full h-full object-cover rounded-xl shadow-md transition-transform duration-500 group-hover:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-90'
                }`}
              />
            </Link>
          </motion.div>
        </div>

        {/* Bottom micro-spacing balance */}
        <div className="h-1" aria-hidden="true" />
      </div>

      {/* Product Details Section */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-[10px] tracking-widest uppercase text-[#857B72] font-semibold block mb-1">
            {product.category}
          </span>

          <Link
            to={`/home/fragancias/${product.id}`}
            className="group/title block focus:outline-none mb-1"
          >
            <h2
              id={`product-title-${product.id}`}
              className="font-serif-luxury text-xl sm:text-2xl font-medium text-[#1A1918] tracking-tight group-hover/title:text-[#524B43] transition-colors line-clamp-1 break-words"
            >
              {product.name}
            </h2>
          </Link>

          <p className="text-[10px] tracking-widest uppercase text-[#736A61] mb-2.5 truncate">
            {product.subtitle}
          </p>

          <p className="text-xs text-[#4A453F] leading-relaxed mb-3 line-clamp-2">
            {product.description}
          </p>

          <Link
            to={`/home/fragancias/${product.id}`}
            className="inline-flex items-center gap-1 text-[11px] text-[#80766D] hover:text-[#1A1918] font-medium mb-4 transition-colors"
          >
            <span>Conocer notas en detalle</span>
            <ArrowRight className="w-3 h-3" />
          </Link>

          {/* Olfactory Notes */}
          <div className="space-y-1.5 py-3 border-y border-[#EFECE5] text-xs text-[#5C554E] mb-5">
            <div>
              <span className="font-semibold uppercase tracking-wider text-[9px] block text-[#80766D]">
                Notas de Salida
              </span>
              <span className="text-[11px] text-[#332F2A] line-clamp-1 break-words">{product.olfactoryNotes.top}</span>
            </div>
            <div>
              <span className="font-semibold uppercase tracking-wider text-[9px] block text-[#80766D]">
                Notas de Corazón
              </span>
              <span className="text-[11px] text-[#332F2A] line-clamp-1 break-words">{product.olfactoryNotes.heart}</span>
            </div>
            <div>
              <span className="font-semibold uppercase tracking-wider text-[9px] block text-[#80766D]">
                Notas de Fondo
              </span>
              <span className="text-[11px] text-[#332F2A] line-clamp-1 break-words">{product.olfactoryNotes.base}</span>
            </div>
          </div>
        </div>

        {/* Price & Add to Cart Button */}
        <div>
          <div className="flex items-baseline justify-between gap-2 flex-wrap mb-3.5">
            <span className="text-[11px] uppercase tracking-wider text-[#8A8177]">
              Precio
            </span>
            <span id={`product-price-${product.id}`} className="text-xl font-serif-luxury font-medium text-[#1A1918] whitespace-nowrap">
              {formattedPrice}
            </span>
          </div>

          <button
            id={`add-to-cart-btn-${product.id}`}
            type="button"
            onClick={handleAddToCart}
            className={`w-full py-3 px-4 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs focus:outline-none focus:ring-2 focus:ring-[#1A1918]/30 ${
              isAdded
                ? 'bg-emerald-800 text-white hover:bg-emerald-900'
                : 'bg-[#1A1918] text-[#FAF9F5] hover:bg-[#332F2C] active:scale-[0.99]'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" strokeWidth={2} />
                <span>Añadido a la bolsa</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" strokeWidth={2} />
                <span>Añadir a la bolsa</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};
