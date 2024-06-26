import { Product } from '@/app/lib/types';
import Image from 'next/image';
import { calcularDescontoPorcentagem, formatarData, verificarExpiracao } from '@/app/lib/utils';
import CompanyCard from '../ui/CompanyCard';
import { clsx } from 'clsx';
import ExpirationBadge from '../ui/Badges';
import CustomQRcode from '../ui/QRcode';

type Params = {
  productdetails: string;
};

type Props = {
  params: Params;
};

const getProductBySlug = async (slug: string) => {
  const response = await fetch(`http://localhost:3001/products?slug=${slug}`, {
    cache: 'no-store',
  });
  const product = response.json();
  return product;
};

const page: React.FC<Props> = async ({ params }) => {
  const [product]: Product[] = await getProductBySlug(params.productdetails);
  const expiration = verificarExpiracao(product.expirationDate);
  return (
    <div className="flex flex-col items-center justify-center py-8 pt-20 md:pt-40">

        <div
          className={clsx(
            'flex flex-col items-center justify-between gap-8 px-8 bg-white shadow-custom-shadow md:flex-row',
            expiration && 'grayscale',
          )}
        >
          <div className="md:flex-1">
            <figure className="mb-4 rounded-lg">
              <Image
                className="relative rounded-lg border p-2"
                src={product.imageURL}
                alt={product.title}
                priority={true}
                width={500}
                height={650}
              />
              <ExpirationBadge expiration={expiration} />
            </figure>
          </div>
          <div className="bg-slate-50 px-4 pt-4 md:flex-1">
            <p className="mt-2 text-sm text-gray-600">{formatarData(product.createdAt)}</p>
            <h2 className="mb-2 text-2xl font-bold text-gray-800">{product.title}</h2>
            <p className="mb-4 text-sm text-gray-600">{product.description}</p> 
            <div className="mb-4 flex flex-col">
              <div className="flex items-center gap-20">
                <div> 
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
                    <div className=" items-baseline gap-1">
                      <span className="text-md mono font-medium">R$</span>
                      <span className="text-3xl font-semibold">
                        {parseFloat(product.discountPrice.toString()).toFixed(2)}
                      </span>
                      <span className="ml-2 text-sm text-green-500">
                        {calcularDescontoPorcentagem(product.price, product.discountPrice)}
                      </span>
                    </div>

                    {product.installment > 0 ? (
                      <>
                        <span className=" text-neutral-600 block text-lg font-medium">
                          {'em ' + product.installment + 'x sem juros '}
                        </span>
                      </>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                <div className="hidden md:block">
                  <CustomQRcode url={params.productdetails} />
                </div>
              </div>
              <span className="text-xs font-bold text-green-500">
                {'Frete ' + (product.freight > 0 ? 'R$ ' + product.freight + ',00' : 'Grátis')}
              </span>
              <p className="text-xs text-gray-600">
                válido até o dia {'  '}
                {formatarData(product.expirationDate)}
              </p>
            </div>

            <div className="w-1/2">
              <button className="w-48 rounded-sm bg-green-500 px-4 py-2 font-semibold text-white hover:bg-green-600">
                {expiration ? 'EXPIRADO' : 'VER OFERTA'}
              </button>
            </div>
            <CompanyCard company={product.company} />
          </div>
        </div>


    </div>
  );
};

export default page;
