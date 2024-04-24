import React from 'react';

const CompanyCard = () => {
  return (
    <div className="items-centers my-6 flex  w-[360px] justify-start rounded-lg bg-slate-200/50 p-2">
      <div className="h-[70px] w-[70px] rounded-full bg-slate-300"></div>
      <div className="ml-4">
        <h2 className="text-left text-lg font-bold">Nome da loja</h2>
        <p className="text-left">endereço</p>
      </div>
    </div>
  );
};

export default CompanyCard;
