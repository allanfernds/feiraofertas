import React from 'react';
import { Category, Product } from '@/app/lib/types';
import ProductsGrid from '@/app/ui/ProductsGrid';
import { CardProduct } from '@/app/ui/CardProduct';

const getAllProducts = async (categorySlug: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

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
    <div>
      <div className="flex flex-col items-center justify-center py-10 md:py-20">
        <h1 className="mb-2 text-2xl font-bold text-neutral-700">{data.categoryData.title}</h1>
        <p className="w-[320px] text-center font-normal text-gray-500 md:w-[500px] lg:w-full">
          {data.categoryData.description}
        </p>
      </div>
      <ProductsGrid>
        {data.productsData.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </ProductsGrid>
    </div>
  );
};
export default page;
