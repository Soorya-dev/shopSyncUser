import axios from 'axios';
import { Product } from '../../domain/entities/Product';
import { ProductRepository } from '../../application/repositories/ProductRepository';

export class HttpProductRepository implements ProductRepository {
  private apiUrl = 'https://your-server-endpoint/api/products';  // Adjust as per your API
  
  async getProducts(): Promise<Product[]> {
    const response = await axios.get<Product[]>(this.apiUrl);
    return response.data;
  }

  async reduceStock(productId: string, amount: number): Promise<void> {
    await axios.put(`${this.apiUrl}/${productId}/reduceStock`, { amount });
  }
}

