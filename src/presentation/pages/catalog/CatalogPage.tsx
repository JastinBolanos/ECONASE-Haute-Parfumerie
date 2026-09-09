import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from '../../components/search/SearchBar';
import { CatalogGrid } from '../../components/catalog/CatalogGrid';
import { useCatalog } from '../../hooks/useCatalog';
import { useCart } from '../../hooks/useCart';

type OlfactoryFamily =
  | 'TODAS'
  | 'AMADERADO & ESPECIADO'
  | 'CÍTRICO & FLORAL BLANCO'
  | 'CUERO & RESINAS NOBLES';

export const CatalogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const familyFromUrl = searchParams.get('familia');

  const { products, searchQuery, setSearchQuery, clearSearch, isLoading } = useCatalog();
  const { addToCart } = useCart();
  const [selectedFamily, setSelectedFamily] = useState<OlfactoryFamily>(() => {
    if (familyFromUrl) {
      const decoded = decodeURIComponent(familyFromUrl).toUpperCase();
      if (
        decoded === 'AMADERADO & ESPECIADO' ||
        decoded === 'CÍTRICO & FLORAL BLANCO' ||
        decoded === 'CUERO & RESINAS NOBLES'
      ) {
        return decoded as OlfactoryFamily;
      }
    }
    return 'TODAS';
  });

  // Sync state if URL search query changes
  useEffect(() => {
    if (familyFromUrl) {
      const decoded = decodeURIComponent(familyFromUrl).toUpperCase();
      if (
        decoded === 'AMADERADO & ESPECIADO' ||
        decoded === 'CÍTRICO & FLORAL BLANCO' ||
        decoded === 'CUERO & RESINAS NOBLES'
      ) {
        setSelectedFamily(decoded as OlfactoryFamily);
      } else if (decoded === 'TODAS') {
        setSelectedFamily('TODAS');
      }
    }
  }, [familyFromUrl]);

  const handleSelectFamily = (family: OlfactoryFamily) => {
    setSelectedFamily(family);
    if (family === 'TODAS') {
      searchParams.delete('familia');
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ familia: family }, { replace: true });
    }
  };

  // Calculate dynamic category counts
  const familyCounts = useMemo(() => {
    const counts = {
      TODAS: products.length,
      'AMADERADO & ESPECIADO': 0,
      'CÍTRICO & FLORAL BLANCO': 0,
      'CUERO & RESINAS NOBLES': 0,
    };

    products.forEach((p) => {
      const cat = p.category.toUpperCase();
      if (cat.includes('AMADERADO') || cat.includes('ESPECIADO')) {
        counts['AMADERADO & ESPECIADO']++;
      } else if (cat.includes('CÍTRICO') || cat.includes('FLORAL')) {
        counts['CÍTRICO & FLORAL BLANCO']++;
      } else if (cat.includes('CUERO') || cat.includes('RESINAS')) {
        counts['CUERO & RESINAS NOBLES']++;
      }
    });

    return counts;
  }, [products]);

  // Filter products by selected family
  const filteredProducts = useMemo(() => {
    if (selectedFamily === 'TODAS') {
      return products;
    }
    return products.filter((p) => {
      const cat = p.category.toUpperCase();
      if (selectedFamily === 'AMADERADO & ESPECIADO') {
        return cat.includes('AMADERADO') || cat.includes('ESPECIADO');
      }
      if (selectedFamily === 'CÍTRICO & FLORAL BLANCO') {
        return cat.includes('CÍTRICO') || cat.includes('FLORAL');
      }
      if (selectedFamily === 'CUERO & RESINAS NOBLES') {
        return cat.includes('CUERO') || cat.includes('RESINAS');
      }
      return true;
    });
  }, [products, selectedFamily]);

  const filterTabs: { id: OlfactoryFamily; label: string; count: number }[] = [
    { id: 'TODAS', label: 'TODAS', count: familyCounts.TODAS },
    { id: 'AMADERADO & ESPECIADO', label: 'AMADERADO & ESPECIADO', count: familyCounts['AMADERADO & ESPECIADO'] },
    { id: 'CÍTRICO & FLORAL BLANCO', label: 'CÍTRICO & FLORAL BLANCO', count: familyCounts['CÍTRICO & FLORAL BLANCO'] },
    { id: 'CUERO & RESINAS NOBLES', label: 'CUERO & RESINAS NOBLES', count: familyCounts['CUERO & RESINAS NOBLES'] },
  ];

  return (
    <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-8 sm:py-14 flex flex-col">
      {/* Catalog Hero Banner */}
      <header className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-[#8A8177] font-medium block mb-3">
          Colección de Alta Perfumería
        </span>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-light text-[#1A1918] tracking-tight mb-4">
          15 Esencias de Autor y Alquimia Natural
        </h1>
        <p className="text-sm sm:text-base text-[#5C544C] leading-relaxed max-w-3xl mx-auto font-light">
          Tres familias olfativas puras, concebidas con extractos botánicos raros de origen ético, maceradas durante noventa días en barricas de cristal y embotelladas a mano en frascos pesados de 100 ML.
        </p>
      </header>

      {/* Search & Category Filter Section */}
      <section
        id="search-section"
        className="w-full mb-10 sm:mb-14 flex flex-col items-center gap-6"
        aria-label="Búsqueda y filtros de familias olfativas"
      >
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onClear={clearSearch}
        />

        {/* Olfactory Family Filter Tabs */}
        <div
          id="family-filter-tabs"
          className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 pt-2"
          role="tablist"
          aria-label="Filtrar por familia olfativa"
        >
          {filterTabs.map((tab) => {
            const isActive = selectedFamily === tab.id;
            return (
              <button
                key={tab.id}
                id={`filter-tab-${tab.id.toLowerCase().replace(/[\s&]+/g, '-')}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleSelectFamily(tab.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#1A1918] text-[#FAF9F5] shadow-xs font-medium scale-[1.02]'
                    : 'bg-white border border-[#DDD6CB] text-[#59524A] hover:border-[#1A1918] hover:text-[#1A1918]'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-[#F4F1EA] text-[#786F66]'
                  }`}
                >
                  ({tab.count})
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Catalog Grid Section */}
      <section
        id="catalog-section"
        className="w-full"
        aria-label="Colección de alta perfumería ECONASE"
      >
        <CatalogGrid
          products={filteredProducts}
          searchQuery={searchQuery}
          onAddToCart={addToCart}
          onResetSearch={() => {
            clearSearch();
            handleSelectFamily('TODAS');
          }}
          isLoading={isLoading}
        />
      </section>
    </div>
  );
};
