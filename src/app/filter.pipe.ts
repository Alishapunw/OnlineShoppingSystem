import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[],filterString:string,propName:string): Product[]
  {
    const res:Product[]=[];
    if(!value || filterString==='' || propName==='')
    {
      return value;
    }
    value.forEach((a:Product)=>{
      if(a.productName.trim().toLowerCase().includes(filterString.toLowerCase()))
      {
        res.push(a);
      }
      else if(a.description.trim().toLowerCase().includes(filterString.toLowerCase())){
        res.push(a);
      }
      else if(a.brandName.trim().toLowerCase().includes(filterString.toLowerCase())){
        res.push(a);
      }
    }
    );
    return res;
  }
}
