import { Product } from '@/app/lib/types';
import Image from 'next/image';
import React from 'react';
import { formatarData } from '@/app/lib/utils';
// import CategoriesCarousel from '@/app/ui/CategoriesCarousel';

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

const getAllproducts = async () => {
  const products = await fetch('http://localhost:3001/products', {
    cache: 'no-store',
  });
  const response = products.json();
  return response;
};

const getProductBySlug = async (slug: string) => {
  const response = await fetch(`http://localhost:3001/products?slug=${slug}`, {
    cache: 'no-store',
  });
  const product = response.json();
  return product;
};

const page: React.FC<Props> = async ({ params }) => {
  const [product]: Product[] = await getProductBySlug(params.slug);
  const products = await getAllproducts();
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8 flex flex-col justify-center items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={product.imageURL}
                alt={product.title}
                width={500}
                height={650}
              />
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
              {formatarData(product.createdAt)}
            </p>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {product.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {product.description}
            </p>
            <div className="flex flex-col mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  De:
                  {'  '}
                </span>
                <span className="text-gray-600 dark:text-gray-300 line-through">
                  R$ {product.price}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  {product.discountPrice ? 'Por:  ' : ''}
                </span>
                <span className="text-gray-600 dark:text-gray-300 text-3xl ">
                  {product.discountPrice ? product.discountPrice : 'Grátis'}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-custom-grey  text-white py-2 px-4 rounded-full font-bold hover:bg-neutral-900">
                    Ir até a loja
                  </button>
                </div>
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300"></span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                válido até o dia {'  '}
                {formatarData(product.expirationDate)}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <CategoriesCarousel products={products} />
      </div> */}
    </div>
  );
};

export default page;
