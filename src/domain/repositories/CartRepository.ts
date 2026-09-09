import { Product } from '../entities/Product';
import { Cart } from '../entities/Cart';

export interface ICartRepository {
  getCart(): Promise<Cart>;
  addItem(product: Product, quantity?: number): Promise<Cart>;
  removeItem(productId: string): Promise<Cart>;
  clearCart(): Promise<Cart>;
}
