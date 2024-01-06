import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Image, Restaurant } from 'src/app/models/restaurant.model';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  selectedRestaurant!: Restaurant;

  viewComponenteFather:boolean = true;
  showComponentChildren:boolean = false;

  listRestaurant: Restaurant[] = [];

  selectedImages: string[] = [];


  constructor(private service: RestaurantServiceService) {

  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.all().subscribe(res => {
      if (res) {
        this.listRestaurant = res;
        // Hacer la modificación después de que Angular haya completado su ciclo de detección de cambios.
      }
    });
  }
  selectRestautant(restaurant: Restaurant): void {
    this.selectedRestaurant = restaurant;
    console.log(this.selectedRestaurant);
    this.viewComponenteFather = false;
    this.showComponentChildren = true;
    }


}
