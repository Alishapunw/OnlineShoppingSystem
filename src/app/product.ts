import { ProductImages } from "./product-images";

export class Product {
    productId!:number;
    productName!:string;
    brandName!:string;
    pricePerUnit!:number;
    description!:string;
    quantity!:number;
    categoryId!:number;
    retailerId!:number;
    status!:boolean;
    productImages!:ProductImages[];

    constructor(productId:number, productName:string, brandName:string, pricePerUnit:number, description:string, quantity:number, categoryId :number, retailerId:number, status:boolean, productImages:ProductImages[]){
        this.productId=productId;
        this.productName=productName;
        this.brandName=brandName;
        this.pricePerUnit=pricePerUnit;
        this.description=description;
        this.quantity=quantity;
        this.categoryId=categoryId;
        this.retailerId=retailerId;
        this.status=status;
       // this.productImages = productObject.productImages.map((a: any) => new ProductImages(a));
       this.productImages = productImages;
    }
}

