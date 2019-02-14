import { iTag, iImage } from ".";

export interface iProduct {
    id: string;
    name: string;
    brand: string;
    price: number;
    stock: number;
    shipping: string;
    description: string;
    tags: iTag[];
    images: iImage[];
  }
  