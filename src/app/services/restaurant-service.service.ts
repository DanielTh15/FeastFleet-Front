import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  private URLrestaurant = 'http://localhost:8080/FeastFleet/api/restaurant'

  constructor(private http: HttpClient) { }

  all(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.URLrestaurant + '/all');
  }

  delete(restaurantId: string): Observable<any>{
    return this.http.delete<any>(this.URLrestaurant + '/delete/'+restaurantId);
  }

  save(restaurant: Restaurant): Observable<Restaurant>{
    return this.http.post<Restaurant>(this.URLrestaurant +'/save', restaurant);
  }

}
