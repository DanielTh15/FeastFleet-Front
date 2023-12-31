import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant.model';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {


  ngOnInit(): void {
    console.log(this.restaurants);
    }

  mostrarInfo = false;

  mostrarReserva = false;

// En el componente hijo (RestaurantComponent)
@Input() restaurants: Restaurant[] = [];

setRestaurants(restaurants: Restaurant[]) {
  this.restaurants = restaurants;
}
   

  mostrarSeleccion() {
    this.mostrarInfo = true;

  }


  mostrarFormReserva() {
    this.mostrarReserva = true;
  }

  cerrar() {
    this.mostrarInfo = false;

  }

  cerrarRerseva() {
    this.mostrarReserva = false;
  }


}
