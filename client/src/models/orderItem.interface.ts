import { iProduct, iOrder } from ".";

export interface iOrderItem {
    id: number;
    quantity: number;
    price: number;
    product: iProduct;
  }
  