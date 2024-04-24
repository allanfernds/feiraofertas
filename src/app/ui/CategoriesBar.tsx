import React from 'react';
import Link from 'next/link';
import { Category } from '../lib/types';

const getAllCategories = async () => {
  const categories = await fetch('http://localhost:3001/categories_to_show', {
    cache: 'no-store',
  });
  const response = await categories.json();

  return response;
};

const CategoriesBar = async () => {
  const categories = await getAllCategories();
  console.log(categories);
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
          {categories.map((category: Category) => (
            <li className="mx-2 text-center text-custom-grey-2 " key={category.id}>
              <Link href={`/categoria/${category.slug}`}>{category.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* MENU MOBILE   ================================*/}
      {categories.map((category: Category) => (
        <li
          className="hidden rounded-md px-2  py-1 text-center text-sm hover:bg-custom-orange hover:text-white md:block"
          key={category.id}
        >
          <Link href={`/categoria/${category.slug}`}>{category.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesBar;
