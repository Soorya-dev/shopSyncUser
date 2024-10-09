import React, { useState, useEffect } from 'react';
import { Product } from '../../domain/entities/Product';
import { FetchProducts } from '../../application/useCases/fetchProducts';
import { HttpProductRepository } from '../../infrastructure/repositories/HttpProductRepository';

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    const productRepo = new HttpProductRepository();
    const fetchProducts = new FetchProducts(productRepo);

    fetchProducts.execute().then(setProducts);
  }, []);

  return (
    <div>
      <h1>Available Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} USD (Stock: {product.stock})
          </li>
        ))}
      </ul>
    </div>
  );
};
