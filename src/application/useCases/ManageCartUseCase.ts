import { ICartRepository } from '../../domain/repositories/CartRepository';
import { Product } from '../../domain/entities/Product';
import { Cart } from '../../domain/entities/Cart';

export class ManageCartUseCase {
  constructor(private cartRepository: ICartRepository) {}

  async getCart(): Promise<Cart> {
    return this.cartRepository.getCart();
  }

  async addToCart(product: Product, quantity = 1): Promise<Cart> {
    return this.cartRepository.addItem(product, quantity);
  }

  async removeFromCart(productId: string): Promise<Cart> {
    return this.cartRepository.removeItem(productId);
  }

  async clearCart(): Promise<Cart> {
    return this.cartRepository.clearCart();
  }
}
