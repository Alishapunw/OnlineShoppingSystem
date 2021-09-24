export class Product {
    ProductId!:number;
    ProductName!:string;
    BrandName!:string;
    PricePerUnit!:number;
    Description!:string;
    ImageUrls!:string[];
  name: any;
  price: any;
    constructor(ProductId:number, ProductName:string, BrandName:string, PricePerUnit:number, Description:string, ImageUrls:string[]){
        this.ProductId=ProductId;
        this.ProductName=ProductName;
        this.BrandName=BrandName;
        this.PricePerUnit=PricePerUnit;
        this.Description=Description;
        this.ImageUrls=ImageUrls;
    }
}
