import { Product } from './lib/types';
import { CardProduct } from './ui/CardProduct';
import ProductsGrid from './ui/ProductsGrid';

const getAllproducts = async () => {
  // // Simular atraso de 3 segundos
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const products = await fetch('http://localhost:3001/products', {
    cache: 'no-store',
  });
  const response = await products.json();
  return response;
};

export default async function Home() {
  const products: Product[] = await getAllproducts();
  return (
    <main className="z-10">
      <div className="flex items-center justify-center">
        <h1 className="mb-2 pt-20 text-2xl font-bold text-neutral-700">Últimas ofertas</h1>
      </div>

      <ProductsGrid>
        {products.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </ProductsGrid>
    </main>
  );
}
