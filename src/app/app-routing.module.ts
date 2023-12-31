import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RestaurantPAComponent } from './components/restaurant-pa/restaurant-pa.component';
import { SubNavComponent } from './components/sub-nav/sub-nav.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';

const routes: Routes = [
  {path: '', component: SubNavComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: RestaurantPAComponent},
  {path: 'restaurant', component: RestaurantComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
