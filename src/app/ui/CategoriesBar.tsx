import React from 'react';
import Link from 'next/link';
import { Category } from '../lib/types';

const categories: Category[] = [
  {
    id: 6,
    title: 'Tecnologia',
    slug: 'tecnologia',
  },
  {
    id: 1,
    title: 'Acessórios',
    slug: 'acessorios',
  },
  {
    id: 2,
    title: 'Moda',
    slug: 'moda',
  },
  {
    id: 3,
    title: 'Alimentos e Bebidas',
    slug: 'alimentos-bebidas',
  },
  { id: 4, title: 'Saúde e Bem-Estar', slug: 'saude-bem-estar' },
  { id: 5, title: 'Viagens', slug: 'viagens' },
];

const CategoriesBar = () => {
  return (
    <ul
      className=" text-md flex w-full items-center
    gap-2 border-t-4 border-custom-orange  bg-custom-grey font-medium text-custom-grey-3 md:h-12 md:flex-nowrap md:justify-center md:border-t-8"
    >
      {/* MENU MOBILE   =================================*/}
      <div className="dropdown my-2 ml-3 md:hidden">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-sm border-none bg-white/10 text-left text-white md:invisible"
        >
          Categorias
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
        >
          {categories.map((category) => (
            <li className="mx-2 text-center text-custom-grey-2 " key={category.id}>
              <Link href={`/categoria/${category.slug}`}>{category.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* MENU MOBILE   ================================*/}
      {categories.map((category) => (
        <li
          className="hidden rounded-md px-2  py-1 text-center text-sm hover:bg-custom-orange hover:text-white md:block"
          key={category.id}
        >
          <Link href={`/categoria/?categoria=${category.slug}`}>{category.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesBar;
