import { IProduct } from "./iproduct";
import { Product } from "./product";

export interface Wishlist {
    id:number;
    customerId:number;
    productId:number;
    product: Product;
}

