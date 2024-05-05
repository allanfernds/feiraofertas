import { Company } from '../lib/types';
import Image from 'next/image';

const CompanyCard: React.FC<{ company: Company }> = ({ company }) => {
  return (
    <div className="items-centers my-6 flex w-[290px] md:w-96 justify-start rounded-lg bg-white p-3 shadow-custom-shadow">
      <Image
        src={company.logoURL}
        width={500}
        height={500}
        alt={'logo' + company.companyName}
        className="h-12 w-12 rounded-full bg-slate-300"
      />
      <div className="ml-4">
        <h2 className="text-left text-lg font-bold text-neutral-800">{company.companyName}</h2>
        <p className="font text-left">{company.location}</p>
      </div>
    </div>
  );
};

export default CompanyCard;
