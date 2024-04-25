import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ProductsGrid: React.FC<Props> = ({ children }) => {
  return (
    <main className="mt-20 flex min-h-screen items-center justify-center">
      <div className="grid max-w-[1200px] grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:p-0">
        {children}
      </div>
    </main>
  );
};

export default ProductsGrid;
