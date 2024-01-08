import { Component } from '@angular/core';
import { Restaurant } from './models/restaurant.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewRestaurant = false;
  selectedRestaurant: Restaurant | null = null;

  onRestauranteSeleccionado(restaurante: Restaurant) {
    this.selectedRestaurant = restaurante;
    this.viewRestaurant = true;
  }
  wiew(event: any){
  }

  volverALista() {
    this.viewRestaurant = true;
    this.selectedRestaurant = null;
  }
}
