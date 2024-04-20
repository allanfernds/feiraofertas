import Link from 'next/link';
import { Product } from './lib/types';
import CardProduct from './ui/CardProduct';

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
      <div className="h-screen container flex flex-wrap gap-8 pt-10 md:p-24 justify-center items-center ">
        {products.map((product) => (
          <Link key={product.id} href={`/${product.slug}`}>
            <CardProduct {...product} />
          </Link>
        ))}
      </div>
    </main>
  );
}
