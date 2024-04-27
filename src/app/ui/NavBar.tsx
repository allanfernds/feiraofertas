import Link from 'next/link';
import CategoriesBar from './CategoriesBar';

export const NavBar = () => {
  return (
    <nav className="fixed z-50 w-full">
      <div className="navbar z-50 items-center justify-center bg-custom-grey">
        <div className="flex flex-col md:flex-row md:gap-56 ">
          <div className="">
            <Link className="btn btn-ghost whitespace-nowrap text-xl text-custom-white" href="/">
              Feira Ofertas
            </Link>
          </div>
          <div className="form-control">
            <label className="input input-bordered flex items-center h-9 w-[95vw] text-sm md:w-96">
              <input type="text" className="grow" placeholder="Pesquise por produto, categoria, marca ou loja" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
          </div>
        </div>
      </div>
      <CategoriesBar />
    </nav>
  );
};
