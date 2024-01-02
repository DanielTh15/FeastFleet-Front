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
<<<<<<< HEAD
    console.log('Lista de restaurantes en el componente hijo:', this.restaurants);
=======
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
>>>>>>> DanielQ
  }



  updateRestaurants(updatedList: Restaurant[]): void {
    this.restaurants = updatedList;
    console.log('Lista de restaurantes actualizada en el componente hijo:', this.restaurants);
  }
}