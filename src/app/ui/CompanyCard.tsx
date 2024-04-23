const CompanyCard = () => {
  return (
    <div className="bg-slate-200/50 p-2 rounded-lg my-6 flex justify-start items-centers w-[400px]">
      <div className="bg-slate-300 w-[70px] h-[70px] rounded-full"></div>
      <div className="ml-4">
        <h2 className="font-bold text-left text-lg">Nome da loja</h2>
        <p className="text-left">endereço</p>
      </div>
    </div>
  );
};

export default CompanyCard;
