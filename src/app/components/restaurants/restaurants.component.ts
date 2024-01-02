import { Component, OnInit } from '@angular/core';
import { Image, Restaurant } from 'src/app/models/restaurant.model';
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
        this.listRestaurant = res;
      }
    });
  }

  selectRandomImage(images: Image[]): string {
    if (images && images.length > 0) {
      const randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex].imageUrl;
    }
    return '../../../assets/imagenDefault.jpg'; // Puedes proporcionar una imagen por defecto o manejar el caso sin imágenes.
  }
}
