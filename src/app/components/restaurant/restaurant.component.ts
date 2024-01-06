
import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant.model';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})


export class RestaurantComponent implements OnInit {

  listRestaurant: Restaurant[] = [];

  constructor(private service: RestaurantServiceService) {

  }


  ngOnInit(): void {
    this.list();
  }


  mostrarInfo = false;

  mostrarReserva = false;

   /* @Input() restaurant: Restaurant = {
    restaurantId: '',
    name: '',
    cookType: '',
    address: '',
    description: '',
    calification: 0,
    categories: [
      {
        category: {
          id: 0,
          name: ''
        }
      }
    ]
  };*/

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
  list() {
    this.service.all().subscribe(res => {
      if (res) {
        this.listRestaurant = res;
      }
    });
  }

}

