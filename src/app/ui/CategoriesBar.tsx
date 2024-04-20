import Link from 'next/link';
import { Category } from '../lib/types';

const categories: Category[] = [
  {
    id: 1,
    title: 'Tecnologia',
    slug: 'tecnologia',
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
  {
    id: 4,
    title: 'Saúde e Bem-Estar',
    slug: 'saude-bem-estar',
  },
  {
    id: 5,
    title: 'Viagens',
    slug: 'viagens',
  },
];

const CategoriesBar = () => {
  return (
    <ul
      className="menu menu-horizontal w-full md:justify-center 
    items-center bg-custom-orange text-white text-md h-12 md:h-auto flex-nowrap"
    >
      {/* MENU MOBILE============================================================== */}
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-sm btn-ghost md:invisible bg-custom-orange border-none text-white text-left"
        >
          Categorias
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {categories.map((category) => (
            <li
              className="mx-2 text-center text-custom-grey-2"
              key={category.id}
            >
              <Link href={`/${category.slug}`}>{category.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* MENU MOBILE============================================================== */}
      <li>
        <Link href={`/`}>Recentes</Link>
      </li>
      {categories.map((category) => (
        <li className="hidden md:block  mx-4 text-center" key={category.id}>
          <Link href={`/${category.slug}`}>{category.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesBar;
