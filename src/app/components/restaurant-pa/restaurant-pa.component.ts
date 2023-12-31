import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Restaurant } from 'src/app/models/restaurant.model';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';



@Component({
  selector: 'app-restaurant-pa',
  templateUrl: './restaurant-pa.component.html',
  styleUrls: ['./restaurant-pa.component.css']
})
export class RestaurantPAComponent implements OnInit {
  listRestaurant: Restaurant[] = [];

  constructor(private service: RestaurantServiceService) {}

  displayedColumns: string[] = ['restaurantId', 'name', 'cookType', 'address', 'options'];
  dataSource = new MatTableDataSource<Restaurant>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getAllRestaurant();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAllRestaurant() {
    this.service.all().subscribe(res => {
      if (res) {
        this.listRestaurant = res;
        this.dataSource.data = this.listRestaurant;
        console.log(this.listRestaurant);
      }
    });
  }

  deleteRestaurant(restaurantId: any){
    this.service.delete(restaurantId).subscribe(res=>{        
    this.getAllRestaurant();
      }
    )
  }
}
