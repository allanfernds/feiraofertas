import { Product } from './lib/types';
import { CardProduct } from './ui/CardProduct';
import ProductsGrid from './ui/ProductsGrid';
import { productArrayOrder } from '../app/lib/utils';

const getAllproducts = async (query: string) => {
  const products = await fetch('http://localhost:3001/products', {
    cache: 'no-store',
  });

  const response = await products.json();
  const ordenedProducts = productArrayOrder(response);

  if (query.length > 0) {
    const regex = new RegExp(`^\\s*${query}`, 'iu');
    return ordenedProducts.filter((product: Product) => {
      return regex.test(product.slug) || regex.test(product.title);
    });
  }

  return productArrayOrder(response);
};

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';
  console.log(searchParams);
  const products: Product[] = await getAllproducts(query);
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
