import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private URLrestaurant = 'http://localhost:8080/FeastFleet/api/customer'


  constructor(private http: HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.URLrestaurant + "/all");
  }

  getById(customerId: string):Observable<Customer> {
    return this.http.get<Customer>(this.URLrestaurant + '/getById/' + customerId);
  }
}
