import { Component, EventEmitter, Output } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant.model';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent  {

  @Output() selectedRestaurant: EventEmitter<Restaurant> = new EventEmitter<Restaurant>();

  onRestauranteSeleccionado(restaurante: Restaurant) {
    this.selectedRestaurant.emit(restaurante);
  }

}

