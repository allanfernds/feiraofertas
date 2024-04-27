export type Category = {
  id: number;
  title: string;
  slug: string;
  banner?: string;
  description?: string;
};

export type Company = {
  id: number;
  companyName: string;
  slug?: string;
  logoURL: string;
  location: string;
};



export type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  freight: number;
  discountPrice: number;
  description: string;
  imageURL: string;
  categoryID: number;
  saleURL: string;
  installment: number;
  company: Company;
  createdAt: string;
  updatedAt: string;
  expirationDate: string;
};
