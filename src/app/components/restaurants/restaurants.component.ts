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

  }

  list(){
    this.service.all().subscribe(res=> {
      if(res) {
        this.listRestaurant = res;
      }
    })
  }


    
  }
