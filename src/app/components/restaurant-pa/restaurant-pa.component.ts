import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryModel } from 'src/app/models/category.model';
import { Category, Restaurant } from 'src/app/models/restaurant.model';
import { CategoryService } from 'src/app/services/category.service';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';



@Component({
  selector: 'app-restaurant-pa',
  templateUrl: './restaurant-pa.component.html',
  styleUrls: ['./restaurant-pa.component.css']
})
export class RestaurantPAComponent implements OnInit {
  listRestaurant: Restaurant[] = [];
  listCategory: CategoryModel[] = [];
  constructor(private service: RestaurantServiceService,
    private serviceCategory: CategoryService) {}

  displayedColumns: string[] = ['restaurantId', 'name', 'cookType', 'address', 'options'];
  dataSource = new MatTableDataSource<Restaurant>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getAllRestaurant();
    this.getAllCategory();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAllCategory(){
    this.serviceCategory.all().subscribe(resCate =>{
      if(resCate){
        this.listCategory = resCate;
        console.log(this.listCategory);
      }
    })
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
    this.service.delete(restaurantId).subscribe(res => {
      this.getAllRestaurant();
    })
  }
}
