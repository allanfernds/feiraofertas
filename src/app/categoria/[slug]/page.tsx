import React from 'react';
import { Category, Product } from '@/app/lib/types';
import ProductsGrid from '@/app/ui/ProductsGrid';
import { CardProduct } from '@/app/ui/CardProduct';

const getAllProducts = async (categorySlug: string) => {
  // Realizar as requisições simultaneamente

  const categoryResponse = await fetch(`http://localhost:3001/categories?slug=${categorySlug}`, {
    cache: 'no-store',
  });
  const [categoryData]: Category[] = await categoryResponse.json();
  const id: number = categoryData.id;
  const productsResponse = await fetch(`http://localhost:3001/products?category_id=${id}`, {
    cache: 'no-store',
  });
  // Extrair os dados das respostas
  const productsData: Product[] = await productsResponse.json();

  return {
    categoryData,
    productsData,
  };
};

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

const page: React.FC<Props> = async ({ params }: Props) => {
  const data = await getAllProducts(params.slug);
  return (
    <main>
      <header className="flex h-[200px] flex-col justify-center p-4 md:px-32">
        <h1 className="mb-4 text-xl font-medium">{data.categoryData.title}</h1>
        <p className="font-normal text-gray-500">{data.categoryData.description}</p>
      </header>
      <ProductsGrid>
        {data.productsData.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </ProductsGrid>
    </main>
  );
};
export default page;
