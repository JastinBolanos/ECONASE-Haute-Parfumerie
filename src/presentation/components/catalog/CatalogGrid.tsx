import React from 'react';
import { Product } from '../../../domain/entities/Product';
import { ProductCard } from './ProductCard';
import { EmptyCatalogState } from './EmptyCatalogState';

interface CatalogGridProps {
  products: Product[];
  searchQuery: string;
  onAddToCart: (product: Product) => void;
  onResetSearch: () => void;
  isLoading?: boolean;
}

export const CatalogGrid: React.FC<CatalogGridProps> = ({
  products,
  searchQuery,
  onAddToCart,
  onResetSearch,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <div className="w-full flex justify-center py-24">
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#857B72]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#1A1918] animate-ping" />
          <span>Consultando catálogo de 15 fragancias de autor ECONASE...</span>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <EmptyCatalogState
        searchQuery={searchQuery}
        onReset={onResetSearch}
      />
    );
  }

  return (
    <div
      id="catalog-grid"
      className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 xl:gap-8"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};
