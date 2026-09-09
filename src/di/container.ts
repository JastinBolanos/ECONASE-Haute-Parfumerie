import { IProductRepository } from '../domain/repositories/ProductRepository';
import { ICartRepository } from '../domain/repositories/CartRepository';
import { InMemoryProductRepository } from '../infrastructure/repositories/InMemoryProductRepository';
import { LocalStorageCartRepository } from '../infrastructure/repositories/LocalStorageCartRepository';
import { GetProductsUseCase } from '../application/useCases/GetProductsUseCase';
import { SearchProductsUseCase } from '../application/useCases/SearchProductsUseCase';
import { ManageCartUseCase } from '../application/useCases/ManageCartUseCase';

export interface ServiceContainer {
  productRepository: IProductRepository;
  cartRepository: ICartRepository;
  getProductsUseCase: GetProductsUseCase;
  searchProductsUseCase: SearchProductsUseCase;
  manageCartUseCase: ManageCartUseCase;
}

export function createContainer(): ServiceContainer {
  const productRepository = new InMemoryProductRepository();
  const cartRepository = new LocalStorageCartRepository();

  const getProductsUseCase = new GetProductsUseCase(productRepository);
  const searchProductsUseCase = new SearchProductsUseCase(productRepository);
  const manageCartUseCase = new ManageCartUseCase(cartRepository);

  return {
    productRepository,
    cartRepository,
    getProductsUseCase,
    searchProductsUseCase,
    manageCartUseCase,
  };
}

export const container = createContainer();
