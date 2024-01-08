import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../models/review.model';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ResenaServiceService {

  private URLrestaurant = 'http://localhost:8080/FeastFleet/Review'

  constructor(private http: HttpClient) { }

  getAll(restaurantId: string):Observable<Review[]> {
    return this.http.get<Review[]>(this.URLrestaurant + '/getAll/' + restaurantId);
  }

  save(review: Review):Observable<Review> {
    return this.http.post<Review>(this.URLrestaurant + '/save', review);
  }
}
