import { Component } from '@angular/core';
<<<<<<< HEAD
import { Restaurant } from './models/restaurant.model';
=======
>>>>>>> 4336b708d84b81430a5c224cbfb6a430860c3512

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
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
=======
  title = 'FeastFleet';
>>>>>>> 4336b708d84b81430a5c224cbfb6a430860c3512
}
