import { INITIAL_PRODUCTS } from './infrastructure/data/initialProducts';
import { Product } from './domain/entities/Product';

export const PRODUCTS: Product[] = INITIAL_PRODUCTS;
export const SINGLE_PRODUCT: Product = PRODUCTS[0];
