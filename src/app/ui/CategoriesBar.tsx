'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Category } from '../lib/types';
import { NavLinks } from './NavLinks';

const getAllCategories = async () => {
  const categories = await fetch('http://localhost:3001/categories_to_show', {
    cache: 'no-store',
  });
  const response = await categories.json();
  return response;
};

const CategoriesBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = await getAllCategories();
      setCategories(categoriesData);
    };

    fetchCategories();
  }, []);

  return (
    <nav className="">
      <ul className="text-md flex w-[100%] items-center gap-2 border-t-4 border-custom-orange bg-custom-grey font-medium text-gray-800 md:flex-nowrap md:justify-center md:border-t-8">
        {/* MENU MOBILE   =================================*/}
        <div className="dropdown z-40 my-2 ml-3 md:hidden">
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
          <li key={category.id}>
            <NavLinks {...category} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoriesBar;
