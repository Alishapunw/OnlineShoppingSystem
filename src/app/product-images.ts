export class ProductImages {
    productId!:number;
    imagePath!:string;

   
    constructor( productId:number, imagePath:string) {
        this.productId = productId;
        this.imagePath = imagePath;
    }
}
