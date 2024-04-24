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

// const getAllproducts = async () => {
//   const products = await fetch('http://localhost:3001/products', {
//     cache: 'no-store',
//   });
//   const response = products.json();
//   return response;
// };

const getProductBySlug = async (slug: string) => {
  const response = await fetch(`http://localhost:3001/products?slug=${slug}`, {
    cache: 'no-store',
  });
  const product = response.json();
  return product;
};

const page: React.FC<Props> = async ({ params }) => {
  const [product]: Product[] = await getProductBySlug(params.slug);
  // const products = await getAllproducts();
  return (
    <div className="bg-gra-400 flex flex-col items-center justify-center py-8">
      <div>
        <div className="flex flex-col md:flex-row">
          <div className="px-8 md:flex-1">
            <div className=" mb-4 rounded-l">
              <Image
                className=" rounded-lg"
                src={product.imageURL}
                alt={product.title}
                priority={true}
                width={500}
                height={650}
              />
            </div>
          </div>
          <div className="px-4 md:flex-1">
            <p className="mt-2 text-sm text-gray-600">{formatarData(product.createdAt)}</p>
            <h2 className="mb-2 text-2xl font-bold text-gray-800">{product.title}</h2>
            <p className="mb-4 w-[360px] text-sm text-gray-600">{product.description}</p>

            <div className="mb-4 flex flex-col">
              <div className="mr-4">
                <span className="font-medium text-gray-700">
                  de
                  {'  '}
                </span>
                <span className="text-gray-600 line-through">R$ {product.price}</span>
              </div>
              <div>
                <span className="mt-4 font-medium text-gray-700">
                  {product.discountPrice ? 'por apenas' : ''}
                </span>
                <span className="block text-3xl font-semibold text-black">
                  {product.discountPrice ? 'R$' + product.discountPrice : 'Grátis'}
                </span>

                {product.installment > 0 ? (
                  <>
                    <span className=" text-NEUTRAL-600 block text-lg font-medium">
                      {'em ' + product.installment + 'x sem juros '}
                    </span>
                  </>
                ) : (
                  ''
                )}
              </div>
              <span className="BLOCK  text-xs font-bold text-green-500">
                {'Frete ' + (product.freight > 0 ? 'R$ ' + product.freight + ',00' : 'Grátis')}
              </span>
              <p className="text-xs text-gray-600">
                válido até o dia {'  '}
                {formatarData(product.expirationDate)}
              </p>
            </div>

            <div className="w-1/2 ">
              <button className="w-full rounded-lg bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600">
                VER OFERTA
              </button>
            </div>
            <CompanyCard />
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
