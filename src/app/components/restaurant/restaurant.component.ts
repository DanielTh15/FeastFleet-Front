import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant.model';

@Component({
  selector: 'app-restaurant',
  template: `
    <div *ngIf="restaurants && restaurants.length > 0">
      <h3>Restaurantes en el Componente Hijo:</h3>
      <div *ngFor="let item of restaurants">
        {{ item.name }} - {{ item.cookType }}
      </div>
    </div>
    <div *ngIf="!restaurants || restaurants.length === 0">
      <p>No hay restaurantes disponibles.</p>
    </div>
  `,
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  @Input() restaurants: Restaurant[] = [];

  ngOnInit(): void {
    console.log('Lista de restaurantes en el componente hijo:', this.restaurants);
  }



  updateRestaurants(updatedList: Restaurant[]): void {
    this.restaurants = updatedList;
    console.log('Lista de restaurantes actualizada en el componente hijo:', this.restaurants);
  }
}