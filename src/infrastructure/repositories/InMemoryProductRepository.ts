import { IProductRepository } from '../../domain/repositories/ProductRepository';
import { Product } from '../../domain/entities/Product';
import { INITIAL_PRODUCTS } from '../data/initialProducts';

export class InMemoryProductRepository implements IProductRepository {
  private products: Product[];

  constructor(seedData: Product[] = INITIAL_PRODUCTS) {
    this.products = [...seedData];
  }

  async getAll(): Promise<Product[]> {
    return [...this.products];
  }

  async getById(id: string): Promise<Product | null> {
    const product = this.products.find((p) => p.id === id);
    return product ? { ...product } : null;
  }

  async search(query: string): Promise<Product[]> {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return this.getAll();
    }

    return this.products.filter((product) => {
      const matchName = product.name.toLowerCase().includes(normalizedQuery);
      const matchSubtitle = product.subtitle.toLowerCase().includes(normalizedQuery);
      const matchCategory = product.category.toLowerCase().includes(normalizedQuery);
      const matchDescription = product.description.toLowerCase().includes(normalizedQuery);
      const matchTopNotes = product.olfactoryNotes.top.toLowerCase().includes(normalizedQuery);
      const matchHeartNotes = product.olfactoryNotes.heart.toLowerCase().includes(normalizedQuery);
      const matchBaseNotes = product.olfactoryNotes.base.toLowerCase().includes(normalizedQuery);

      return (
        matchName ||
        matchSubtitle ||
        matchCategory ||
        matchDescription ||
        matchTopNotes ||
        matchHeartNotes ||
        matchBaseNotes
      );
    });
  }
}
