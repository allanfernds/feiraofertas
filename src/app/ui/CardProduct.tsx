import Image from 'next/image';
import { Product } from '../lib/types';

const CardProduct = ({ ...product }: Product) => {
  return (
    <div className="card w-[350px] md:w-[300px] max-h-[550px] bg-base-100 shadow-xl">
      <figure>
        <Image
          width={400}
          height={275}
          src={product.imageURL}
          alt={product.title}
          className="object-cover h-[310px] md:h-[310px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description}</p>
        <div className="border-b border-custom-grey-3/20 h-1 w-full"></div>
        <p className="w-24 line-through">{product.price}</p>
        <h2 className="card-title">
          R$ {product.discountPrice ? product.discountPrice : '00,00'}
        </h2>
        <span className="inline text-xs text-emerald-500 font-medium h-1 m-0">
          {'Frete ' +
            (product.freight > 0 ? 'R$ ' + product.freight + ',00' : 'Grátis')}
        </span>
      </div>
    </div>
  );
};

export default CardProduct;
