import { useState, useEffect, useCallback } from 'react';
import { Product } from '../../domain/entities/Product';
import { Cart } from '../../domain/entities/Cart';
import { container, ServiceContainer } from '../../di/container';

export interface UseCartResult {
  cart: Cart;
  cartCount: number;
  addToCart: (product: Product, quantity?: number) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  clearCart: () => Promise<void>;
}

const INITIAL_CART: Cart = {
  items: [],
  totalCount: 0,
  totalAmount: 0,
};

export function useCart(services: ServiceContainer = container): UseCartResult {
  const [cart, setCart] = useState<Cart>(INITIAL_CART);

  useEffect(() => {
    let isMounted = true;
    services.manageCartUseCase
      .getCart()
      .then((loadedCart) => {
        if (isMounted) setCart(loadedCart);
      })
      .catch((err) => {
        console.error('Failed to load cart:', err);
      });

    return () => {
      isMounted = false;
    };
  }, [services]);

  const addToCart = useCallback(
    async (product: Product, quantity = 1) => {
      try {
        const updated = await services.manageCartUseCase.addToCart(product, quantity);
        setCart(updated);
      } catch (err) {
        console.error('Failed to add to cart:', err);
      }
    },
    [services]
  );

  const removeFromCart = useCallback(
    async (productId: string) => {
      try {
        const updated = await services.manageCartUseCase.removeFromCart(productId);
        setCart(updated);
      } catch (err) {
        console.error('Failed to remove from cart:', err);
      }
    },
    [services]
  );

  const clearCart = useCallback(async () => {
    try {
      const updated = await services.manageCartUseCase.clearCart();
      setCart(updated);
    } catch (err) {
      console.error('Failed to clear cart:', err);
    }
  }, [services]);

  return {
    cart,
    cartCount: cart.totalCount,
    addToCart,
    removeFromCart,
    clearCart,
  };
}
