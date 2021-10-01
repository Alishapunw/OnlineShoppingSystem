import { IProductImages } from "./iproduct-images";

export interface IProduct {
    productId:number;
    productName:string;
    pricePerUnit:number;
    productImages:IProductImages[];

}
