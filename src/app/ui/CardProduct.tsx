import Image from 'next/image';
import { Product } from '../lib/types';
import Link from 'next/link';
import { calcularDescontoPorcentagem, verificarExpiracao } from '@/app/lib/utils';
import clsx from 'clsx';

export const CardProduct = (product: Product) => {
  const expiration = verificarExpiracao(product.expirationDate)
  console.log(product.id, product.expirationDate, expiration)
  return (
    <Link  href={`/${product.slug}`}>
      <div className={clsx("card relative z-0 justify-between rounded-md  bg-base-100 shadow-custom-shadow md:h-[440px] md:w-[250px]",
        expiration && "contrast-75 grayscale"
      )}>
        <figure>
          <Image
            width={410}
            height={500}
            src={product.imageURL}
            alt={product.title}
            priority={true}
            className="p-9 scale-95"
          />
          <span className={clsx("border-4 bg-black text-white shadow-lg border-black rounded-md absolute font-bold rotate-6 text-2xl px-1",
            !expiration && "hidden"
            )}>
            EXPIRADO
          </span>
        </figure>
        <div className="avatar absolute">
          <div className="ml-2 mt-2 w-8 rounded shadow-custom-shadow">
            <Image
              width={64}
              height={64}
              src={product.company.logoURL}
              alt={product.company.companyName}
              priority={true}
            />
          </div>
        </div>
        <div className="h-[200px] p-4 pb-0 pt-6">
          <span className="font-base text-sm text-gray-500 line-through">
            {'R$' + product.price}
          </span>
          <h2 className="card-title items-baseline gap-1 text-2xl text-neutral-700">
            <span className="text-base font-semibold">R$</span>
            {product.discountPrice && product.discountPrice}
            <span className="text-sm text-green-500 ml-2">
              {calcularDescontoPorcentagem(product.price, product.discountPrice)}
            </span>
          </h2>
          <div className="flex pb-2 h-28 flex-col justify-between">
            <p className="mt-2 leading-5">{product.description.slice(0, 62) + '...'}</p>
            <p className="m-0 text-xs font-bold text-green-500">
              {'Frete ' + (product.freight > 0 ? 'R$ ' + product.freight + ',00' : 'Grátis')}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const MiniCardProduct = ({ ...product }: Product) => {
  return (
    <Link href={`/productpage/${product.slug}`}>
      <div className="card m-4 h-[400px] w-[300px] bg-custom-white shadow-xl">
        <figure>
          <Image
            width={200}
            height={175}
            src={product.imageURL}
            alt={product.title}
            priority={true}
            className="h-[310px] w-[300px] object-cover md:h-[210px]"
          />
        </figure>
        <div className="p-6">
          <h2 className="text- card-title">
            {product.title.length <= 15 ? product.title : product.title.slice(0, 15) + ' ...'}
          </h2>
          <p>{product.description.slice(0, 40) + ' ...'}</p>
          <p className="w-24 line-through">{product.price}</p>
          <h2 className="card-title">
            R$ {product.discountPrice ? product.discountPrice : '00,00'}
          </h2>
          <span className="m-0 inline h-1 text-xs font-medium text-emerald-500">
            {'Frete ' + (product.freight > 0 ? 'R$ ' + product.freight + ',00' : 'Grátis')}
          </span>
        </div>
      </div>
    </Link>
  );
};
