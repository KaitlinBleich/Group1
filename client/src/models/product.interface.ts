import { iCategory, iSubcategory, iImage } from ".";

export interface iProduct {
    id: string;
    name: string;
    brand: string;
    price: number;
    stock: number;
    shipping: string;
    description: string;
    category: iCategory;
    subcategory: iSubcategory;
    images: iImage[];
  }
  