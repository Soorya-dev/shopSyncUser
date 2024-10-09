import { Product } from '../../domain/entities/Product';
import { ProductRepository } from '../repositories/ProductRepository';

export class FetchProducts {
  private productRepo: ProductRepository;

  constructor(productRepo: ProductRepository) {
    this.productRepo = productRepo;
  }

  public async execute(): Promise<Product[]> {
    return await this.productRepo.getProducts();
  }
}

