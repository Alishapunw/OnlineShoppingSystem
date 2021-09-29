export interface ProductCart {
    id:        number;
    cartId:    number;
    productId: number;
    quantity:  number;
    amount:    number;
    cart:      null;
    product:   Product;
}

export interface Product {
    productId:     number;
    productName:   string;
    brandName:     string;
    pricePerUnit:  number;
    description:   string;
    quantity:      number;
    categoryId:    number;
    retailerId:    number;
    status:        boolean;
    category:      null;
    retailer:      null;
    productCart:   any[];
    productImages: any[];
}

/*export interface ProductCart {
    
    productId?:number,
    productName?:string,
    brandName?:string,
    pricePerUnit?:number,
    description?:string,
    quantitySelected?:number,
    amount?:number,

}*/




export interface IBasketTotals {
  shipping: number;
  subtotal: number;
  total: number;
}
