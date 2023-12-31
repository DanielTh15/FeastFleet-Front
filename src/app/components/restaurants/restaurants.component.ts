import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant.model';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';
import { RestaurantComponent } from '../restaurant/restaurant.component';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit, AfterViewInit {
  listRestaurant: Restaurant[] = [];


  constructor(private service: RestaurantServiceService) { }

  ngOnInit(): void {
    this.list();
  }

  ngAfterViewInit(): void {

  }

  list() {
    this.service.all().subscribe(
      res => {
        if (res) {
          this.listRestaurant = res;
          // Resto del código...
        }
      },
      error => {
        console.error('Error al obtener datos de restaurantes:', error);
      }
    );
  }
}