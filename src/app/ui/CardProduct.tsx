import Image from 'next/image';
import { Product } from '../lib/types';
import Link from 'next/link';

export const CardProduct = ({ ...product }: Product) => {
  return (
    <Link href={`/productpage/${product.slug}`}>
      <div className="card w-[350px] md:w-[250px] h-[450px] bg-base-100 shadow-xl">
        <figure>
          <Image
            width={250}
            height={190}
            src={product.imageURL}
            alt={product.title}
            className="object-scale-down  h-[310px] md:h-96"
          />
        </figure>
        <div className="p-4 h-[200px]">
          <h2 className="text-md">a partir de</h2>
          <h2 className="card-title n ">
            R$ {product.discountPrice ? product.discountPrice : '00,00'}
          </h2>
          <p className="w-24 text-xs line-through">{product.price}</p>
          <p className="mt-2">{product.description.slice(0, 45) + ' ...'}</p>
          <span className="inline text-xs text-emerald-500 font-medium h-1 m-0">
            {'Frete ' +
              (product.freight > 0
                ? 'R$ ' + product.freight + ',00'
                : 'Grátis')}
          </span>
        </div>
      </div>
    </Link>
  );
};

export const MiniCardProduct = ({ ...product }: Product) => {
  return (
    <Link href={`/productpage/${product.slug}`}>
      <div className="card  h-[400px] w-[300px] bg-custom-white shadow-xl m-4">
        <figure>
          <Image
            width={200}
            height={175}
            src={product.imageURL}
            alt={product.title}
            className="object-cover h-[310px] md:h-[210px] w-[300px]"
          />
        </figure>
        <div className="p-6">
          <h2 className="card-title text-">
            {product.title.length <= 15
              ? product.title
              : product.title.slice(0, 15) + ' ...'}
          </h2>
          <p>{product.description.slice(0, 40) + ' ...'}</p>
          <p className="w-24 line-through">{product.price}</p>
          <h2 className="card-title">
            R$ {product.discountPrice ? product.discountPrice : '00,00'}
          </h2>
          <span className="inline text-xs text-emerald-500 font-medium h-1 m-0">
            {'Frete ' +
              (product.freight > 0
                ? 'R$ ' + product.freight + ',00'
                : 'Grátis')}
          </span>
        </div>
      </div>
    </Link>
  );
};
