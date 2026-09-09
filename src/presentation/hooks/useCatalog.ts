import { useState, useEffect, useCallback } from 'react';
import { Product } from '../../domain/entities/Product';
import { container, ServiceContainer } from '../../di/container';

export interface UseCatalogResult {
  products: Product[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  clearSearch: () => void;
  isLoading: boolean;
  totalAvailable: number;
}

export function useCatalog(services: ServiceContainer = container): UseCatalogResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [totalAvailable, setTotalAvailable] = useState(0);

  // Initial load
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    services.getProductsUseCase
      .execute()
      .then((data) => {
        if (isMounted) {
          setProducts(data);
          setTotalAvailable(data.length);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error('Failed to load products:', err);
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [services]);

  // Reactive search on query change
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    services.searchProductsUseCase
      .execute(searchQuery)
      .then((filtered) => {
        if (isMounted) {
          setProducts(filtered);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error('Failed to search products:', err);
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [searchQuery, services]);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  return {
    products,
    searchQuery,
    setSearchQuery,
    clearSearch,
    isLoading,
    totalAvailable,
  };
}
