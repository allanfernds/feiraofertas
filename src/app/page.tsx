import React from 'react';
import { Product } from './lib/types';
import { CardProduct } from './ui/CardProduct';
import ProductsGrid from './ui/ProductsGrid';

const getAllproducts = async () => {
  // Simular atraso de 3 segundos
  await new Promise((resolve) => setTimeout(resolve, 3000));
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const products = await fetch('http://localhost:3001/products', {
    cache: 'no-store',
  });
  const response = await products.json();

  return response;
};

export default async function Home() {
  const products: Product[] = await getAllproducts();
  return (
    <main>
      <ProductsGrid>
        {products.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </ProductsGrid>
    </main>
  );
}
