import { Component, Input } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {

  mostrarInfo = false;

  @Input() restaurant: Restaurant = {
    restaurantId: '',
    name: '',
    cookType: '',
    address: '',
    description: '',
    calification: 0,
    category: {
      name: ''
    }
  }

  mostrarSeleccion(){
    this.mostrarInfo =true;

  }

  cerrar(){
    this.mostrarInfo = false;

  }



}
