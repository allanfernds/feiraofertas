'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { Category } from '../lib/types';
import { usePathname } from 'next/navigation';

export const NavLinks = (category: Category) => {
  const pathname = usePathname();
  return (
    <Link
      className={clsx(
        'pointer hidden rounded-b-sm px-4 py-2 text-center text-sm text-white hover:bg-custom-orange md:block',
        {
          'bg-custom-orange': pathname === `/categoria/${category.slug}`,
        },
      )}
      href={`/categoria/${category.slug}`}
    >
      {category.title}
    </Link>
  );
};
