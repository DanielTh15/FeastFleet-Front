import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RestaurantPAComponent } from './components/restaurant-pa/restaurant-pa.component';
import { SubNavComponent } from './components/sub-nav/sub-nav.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { SliderComponent } from './components/slider/slider.component';
import { ReviewComponent } from './components/review/review.component';
import { CustomerComponent } from './components/customer/customer.component';

const routes: Routes = [
  { path: '', component: SubNavComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: RestaurantPAComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'restaurant-detail', component: RestaurantDetailsComponent },
  { path: 'slider', component: SliderComponent },


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
