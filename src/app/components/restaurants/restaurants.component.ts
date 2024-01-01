import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant.model';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit{

  listRestaurant: Restaurant[] = [];

  constructor(private service: RestaurantServiceService){

  }

  ngOnInit(): void {
    this.list();


    this.listRestaurant.forEach(res => {
      const indice = Math.floor(Math.random() * res.image.length);
      res.randomImage = res.image[indice].imageUrl;
    })
  }


  mostrarInfo = false;

  mostrarReserva = false;

   

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
        this.listRestaurant = res.map(item => {
          // Inicializar propiedades para evitar errores de "undefined"
          item.randomImage = item.image.length > 0 ? item.image[0].imageUrl : '';
          return item;
        });
      }
    });
  }


    
  }
