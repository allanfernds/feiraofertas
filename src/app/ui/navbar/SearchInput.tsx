'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

export const SearchInput = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="form-control">
      <label className="input input-bordered flex h-9 w-[95vw] items-center text-sm text-neutral-800 md:w-96">
        <input
          type="text"
          className="grow"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          placeholder="Pesquise por produto, categoria, marca ou loja"
          defaultValue={searchParams.get('query')?.toString()}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </div>
  );
};
