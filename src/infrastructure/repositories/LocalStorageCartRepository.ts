import { ICartRepository } from '../../domain/repositories/CartRepository';
import { Product } from '../../domain/entities/Product';
import { Cart, CartItem } from '../../domain/entities/Cart';

const CART_STORAGE_KEY = 'econase_cart_v1';

export class LocalStorageCartRepository implements ICartRepository {
  private memoryFallback: CartItem[] = [];

  private isLocalStorageAvailable(): boolean {
    try {
      if (typeof window === 'undefined' || !window.localStorage) {
        return false;
      }
      const testKey = '__storage_test__';
      window.localStorage.setItem(testKey, testKey);
      window.localStorage.removeItem(testKey);
      return true;
    } catch {
      return false;
    }
  }

  private readItems(): CartItem[] {
    if (!this.isLocalStorageAvailable()) {
      return this.memoryFallback;
    }
    try {
      const raw = window.localStorage.getItem(CART_STORAGE_KEY);
      if (!raw) return [];
      return JSON.parse(raw) as CartItem[];
    } catch {
      return this.memoryFallback;
    }
  }

  private writeItems(items: CartItem[]): void {
    if (!this.isLocalStorageAvailable()) {
      this.memoryFallback = items;
      return;
    }
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      this.memoryFallback = items;
    }
  }

  private buildCart(items: CartItem[]): Cart {
    const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    return {
      items,
      totalCount,
      totalAmount,
    };
  }

  async getCart(): Promise<Cart> {
    const items = this.readItems();
    return this.buildCart(items);
  }

  async addItem(product: Product, quantity = 1): Promise<Cart> {
    const items = this.readItems();
    const existingIndex = items.findIndex((i) => i.product.id === product.id);

    if (existingIndex >= 0) {
      items[existingIndex].quantity += quantity;
    } else {
      items.push({ product, quantity });
    }

    this.writeItems(items);
    return this.buildCart(items);
  }

  async removeItem(productId: string): Promise<Cart> {
    const items = this.readItems().filter((i) => i.product.id !== productId);
    this.writeItems(items);
    return this.buildCart(items);
  }

  async clearCart(): Promise<Cart> {
    this.writeItems([]);
    return this.buildCart([]);
  }
}
