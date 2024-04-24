import React from 'react';
import Link from 'next/link';
import CategoriesBar from './CategoriesBar';

export const NavBar = () => {
  return (
    <>
      <div className="navbar items-center justify-center bg-custom-grey">
        <div className="flex flex-col md:flex-row md:gap-56 ">
          <div className="">
            <Link className="btn btn-ghost whitespace-nowrap text-xl text-custom-white" href="/">
              Feira Ofertas
            </Link>
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Pesquise por produtos, categorias, marca ou loja"
              className="input input-bordered h-9 w-[95vw] text-sm md:w-96"
            />
          </div>
        </div>
      </div>
      <CategoriesBar />
    </>
  );
};
