import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[],filterString:string,propName:string): any[]
  {
    const res:any=[];
    if(!value || filterString==='' || propName==='')
    {
      return value;
    }
    value.forEach((a:any)=>{
      if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase()))
      {
        res.push(a);
      }
    }
    );
    return res;
  }
}
