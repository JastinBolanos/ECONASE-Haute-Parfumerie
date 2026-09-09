import { IProductRepository } from '../../domain/repositories/ProductRepository';
import { Product } from '../../domain/entities/Product';

export class SearchProductsUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(query: string): Promise<Product[]> {
    return this.productRepository.search(query);
  }
}
