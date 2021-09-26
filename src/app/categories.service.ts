import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

   // for caching

  categoriesList: Category[] = [];
  private url= 'http://localhost:65061/api/Categories';

  constructor(private client:HttpClient) { }


  getCategories():Observable<Category[]> {
    return this.client.get<Category[]>(this.url);
  }
  
}
