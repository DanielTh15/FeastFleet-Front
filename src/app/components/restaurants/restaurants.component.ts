import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant.model';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';
import { RestaurantComponent } from '../restaurant/restaurant.component';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  listRestaurant: Restaurant[] = [];
  @ViewChildren(RestaurantComponent) restaurantChildren!: QueryList<RestaurantComponent>;

  constructor(private service: RestaurantServiceService) {}

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.all().subscribe(
      res => {
        if(res) {
          this.listRestaurant =res;
          console.log(this.listRestaurant);
          this.restaurantChildren.forEach(child => {
            child.setRestaurants(this.listRestaurant);
          });
        }
      })
  }
}