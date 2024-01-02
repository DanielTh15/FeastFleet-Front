import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryModel } from 'src/app/models/category.model';
import { CategoryDTO, Image, Restaurant } from 'src/app/models/restaurant.model';
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

  restaurantData: Restaurant = {
    restaurantId: '',
    name: '',
    cookType: '',
    address: '',
    description: '',
    calification: 0,
    image: [],
    categories: []
  }

  newImageUrl: string = '';



  constructor(private service: RestaurantServiceService,
    private serviceCategory: CategoryService) {

  }

  displayedColumns: string[] = ['restaurantId', 'name', 'cookType', 'address', 'image', 'category', 'options'];
  dataSource = new MatTableDataSource<Restaurant>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getAllRestaurant();
    this.getAllCategory();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAllCategory() {
    this.serviceCategory.all().subscribe(resCate => {
      if (resCate) {
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
        console.log(this.listRestaurant)
      }
    });
  }

  deleteRestaurant(restaurantId: any) {
    this.service.delete(restaurantId).subscribe(res => {
      this.getAllRestaurant();
    })
  }


  save() {

    const categoryIds: { categoryId: number }[] = this.restaurantData.categories.map(cat => ({ categoryId: cat.categoryId }));
    this.restaurantData.categories = categoryIds;
    this.service.save(this.restaurantData).subscribe(res => {
      if (res) {
        alert('Restautante guaardado')
        this.getAllRestaurant();
      }

    })
  }

  addImage() {
    if (this.newImageUrl.trim() !== '') {
      const newImage: Image = { imageUrl: this.newImageUrl };
      this.restaurantData.image.push(newImage);
      this.newImageUrl = ''; // Limpia la variable después de agregarla
    }
  }


  toggleCategory(category: CategoryModel) {
    const index = this.restaurantData.categories.findIndex(cat => cat.categoryId === category.idCategory);

    if (index !== -1) {
      // Si la categoría ya está en la lista, la eliminamos
      this.restaurantData.categories.splice(index, 1);
    } else {
      // Si la categoría no está en la lista, la agregamos
      this.restaurantData.categories.push({ categoryId: category.idCategory });
    }
  }

  isCategorySelected(category: CategoryModel): boolean {
    // Verificamos si la categoría está seleccionada
    return this.restaurantData.categories.some(cat => cat.categoryId === category.idCategory);
  }

  viewCategoryNames(restaurant: Restaurant): string[] {
      // Verificar si el restaurante tiene categorías
    if (restaurant && restaurant.categories.length > 0) {
          // Obtener los nombres de las categorías basado en el categoryId

      const categoryNames: string[] = restaurant.categories
        .map(cat => this.listCategory.find(category => category.idCategory === cat.categoryId)?.name || '');

      return categoryNames;
    }

    return [];
  }


}



