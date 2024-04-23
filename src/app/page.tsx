import Link from 'next/link';
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
    <main className="flex min-h-screen justify-center items-center">
      <div className="p-4 lg:p-0 max-w-[1200px] mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}
