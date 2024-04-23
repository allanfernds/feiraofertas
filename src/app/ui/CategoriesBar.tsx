import Link from 'next/link';
import { Category } from '../lib/types';

const categories: Category[] = [
  {
    id: 1,
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
      className=" w-full md:justify-center flex gap-2
    items-center border-t-4 md:border-t-8  border-custom-orange bg-custom-grey text-custom-grey-3 font-medium text-md md:h-12 md:flex-nowrap"
    >
      {/* MENU MOBILE============================================================== */}
      <div className="dropdown md:hidden my-2 ml-3">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-sm btn-ghost md:invisible bg-white/10 border-none text-white text-left"
        >
          Categorias
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {categories.map((category) => (
            <li
              className="mx-2 text-center text-custom-grey-2 "
              key={category.id}
            >
              <Link href={`/${category.slug}`}>{category.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* MENU MOBILE============================================================== */}
      {categories.map((category) => (
        <li
          className="hidden px-2 py-1  md:block text-center text-sm rounded-md hover:bg-custom-orange hover:text-white"
          key={category.id}
        >
          <Link href={`/${category.slug}`}>{category.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesBar;
