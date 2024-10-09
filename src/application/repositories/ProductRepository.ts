import { Product } from '../../domain/entities/Product';

export interface ProductRepository {
  getProducts(): Promise<Product[]>;
  reduceStock(productId: string, amount: number): Promise<void>;
}
