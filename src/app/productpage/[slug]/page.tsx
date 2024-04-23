import { Product } from '@/app/lib/types';
import Image from 'next/image';
import React from 'react';
import { formatarData } from '@/app/lib/utils';
// import CategoriesCarousel from '@/app/ui/CategoriesCarousel';
import CompanyCard from '../../ui/CompanyCard';

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
    <div className="bg-gra-400 py-8 flex flex-col justify-center items-center">
      <div className="">
        <div className="flex flex-col md:flex-row">
          <div className="md:flex-1 px-8">
            <div className=" rounded-l mb-4">
              <Image
                className=" rounded-lg"
                src={product.imageURL}
                alt={product.title}
                width={500}
                height={650}
              />
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <p className="text-gray-600 text-sm mt-2">
              {formatarData(product.createdAt)}
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {product.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4 w-72">
              {product.description}
            </p>

            <div className="flex flex-col mb-4">
              <div className="mr-4">
                <span className="font-medium text-gray-700">
                  de
                  {'  '}
                </span>
                <span className="text-gray-600 line-through">
                  R$ {product.price}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700 mt-4">
                  {product.discountPrice ? 'por apenas' : ''}
                </span>
                <span className="text-black font-semibold block text-3xl">
                  {product.discountPrice
                    ? 'R$' + product.discountPrice
                    : 'Grátis'}
                </span>
                {product.installment > 0 ? (
                  <>
                    <span className=" font-medium text-emerald-600 block text-lg">
                      {'ou ' +
                        product.installment +
                        'x de ' +
                        (
                          product.discountPrice / product.installment
                        ).toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                    </span>
                  </>
                ) : (
                  ''
                )}
              </div>
              <p className="text-gray-600 text-xs">
                válido até o dia {'  '}
                {formatarData(product.expirationDate)}
              </p>
            </div>

            <div className="w-1/2 ">
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-bold">
                VER OFERTA
              </button>
            </div>
            {/* <CompanyCard /> */}
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
