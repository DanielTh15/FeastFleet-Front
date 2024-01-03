import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
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

  delete(restaurantId: string): Observable<any> {
    return this.http.delete<any>(this.URLrestaurant + '/delete/' + restaurantId);
  }

  save(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(this.URLrestaurant + '/save', restaurant).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = 'Hubo un error al procesar la solicitud.';

    if (error.error instanceof ErrorEvent) {
      // Error del cliente
      errorMessage = `Error: ${error.error.message}`;

    } else {
      // Error del servidor
      errorMessage = `Error: ${error.error}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
