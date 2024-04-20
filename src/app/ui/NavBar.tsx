import Image from 'next/image';
import Link from 'next/link';
import CategoriesBar from './CategoriesBar';

export const NavBar = () => {
  return (
    <>
      <div className="navbar bg-custom-grey justify-center items-center">
        <div className="flex flex-col md:gap-56 md:flex-row ">
          <div className="">
            <Link
              className="text-custom-white btn btn-ghost text-xl whitespace-nowrap"
              href="/"
            >
              Feira Ofertas
            </Link>
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Pesquise por produtos, categorias, marca ou loja"
              className="input input-bordered w-[95vw] md:w-96 h-9 text-sm"
            />
          </div>
        </div>
      </div>
      <CategoriesBar />
    </>
  );
};
