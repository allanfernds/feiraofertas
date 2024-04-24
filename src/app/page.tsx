import React from 'react';
import { Product } from './lib/types';
import { CardProduct } from './ui/CardProduct';

const getAllproducts = async () => {
  const products = await fetch('http://localhost:3001/products', {
    cache: 'no-store',
  });
  const response = products.json();
  return response;
};

export default async function Home() {
  const products: Product[] = await getAllproducts();
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="mt-20 grid max-w-[1200px] grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:p-0">
        {products.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}
