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


  AllByCustomer(customerId: string):Observable<Review[]> {
    return this.http.get<Review[]>(this.URLrestaurant + '/getAllbyCustomer/' + customerId);
  }

  All():Observable<Review[]>{
    return this.http.get<Review[]>(this.URLrestaurant + '/All');
  }
  delete(idReview: number):Observable<any>{
    return this.http.delete<any>(this.URLrestaurant + '/delete/'+ idReview);
  }

  getById(reviewId: number):Observable<any>{
    return this.http.get<any>(this.URLrestaurant + '/getById/' + reviewId);
  }
}
