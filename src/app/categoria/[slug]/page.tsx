import { Category } from '@/app/lib/types';
import React from 'react';

const getAllproducts = async (category: string) => {
  // Simular atraso de 3 segundos
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const products = await fetch(`http://localhost:3001/products?slug=${category}`, {
    cache: 'no-store',
  });
  const response: Category = await products.json();

  return response;
};

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

const page: React.FC<Props> = async ({ params }: Props) => {
  console.log(params.slug);
  const products = await getAllproducts(params.slug);
  return (
    <main>
      <header>{products}</header>
    </main>
  );
};

export default page;
