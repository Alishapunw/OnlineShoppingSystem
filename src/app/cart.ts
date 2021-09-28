import { ProductCart } from "./product-cart";

export interface Cart {
    cartId:number;
    customerId:number;
    status:boolean;
    productCart: ProductCart[];

}

export class CartClass implements Cart {
    cartId = 22;
    customerId=2000;
    status = false;
    productCart: ProductCart[] = [];

    /*constructor(cartId:number, customerId:number, status:boolean) {
        this.cartId = cartId;
        this.customerId = customerId;
        this.status = status;
    }*/
}
