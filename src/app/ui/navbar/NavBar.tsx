import Link from 'next/link';
import CategoriesBar from './CategoriesBar';
import { SearchInput } from './SearchInput';

export const NavBar = () => {
  return (
    <div className="fixed z-50 w-full">
      <div className="navbar z-50 items-center justify-center bg-custom-grey">
        <div className="flex flex-col md:flex-row md:gap-56 ">
          <div className="">
            <Link className="btn btn-ghost whitespace-nowrap text-xl text-custom-white" href="/">
              Feira Ofertas
            </Link>
          </div>
          <SearchInput />
        </div>
      </div>
      <CategoriesBar />
    </div>
  );
};
