import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/restaurant.model';
import { CategoryModel } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = 'http://localhost:8080/FeastFleet/api/category';

  constructor(private http: HttpClient) { }

  all(): Observable<CategoryModel[]>{
    return this.http.get<CategoryModel[]>(this.apiUrl + '/getAll');
  }
}
