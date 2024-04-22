'use client';

import React from 'react';

import { Product } from '@/app/lib/types';
import { MiniCardProduct } from './CardProduct';

type Props = {
  products: Product[];
};

const CategoriesCarousel: React.FC<Props> = ({ products }) => {
  return (
    <div className="carousel rounded-box">
      {products.map((product) => (
        <div key={product.id} className="carousel-item">
          <MiniCardProduct key={product.id} {...product} />
        </div>
      ))}
    </div>
  );
};

export default CategoriesCarousel;
