import { iOrderItem, iAddress } from ".";

export interface iOrder {
    id: number;
    orderNumber: string;
    status: string;
    date: Date;
    subtotal: number;
    discount: number;
    shipping: number;
    total: number;
    address: iAddress;
    orderItems: iOrderItem[];
}
  