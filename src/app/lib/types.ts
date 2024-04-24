export type Category = {
  id: number;
  title: string;
  slug: string;
  banner?: string;
  description?: string;
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
  companyID: number;
  createdAt: string;
  updatedAt: string;
  expirationDate: string;
};
