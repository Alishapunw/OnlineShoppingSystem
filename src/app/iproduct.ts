import { IProductImages } from "./iproduct-images";

export interface IProduct {
    productId:number;
    productName:string;
    productImages:IProductImages[];
}
