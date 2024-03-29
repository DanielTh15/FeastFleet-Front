import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImgComponent } from './components/img/img.component';
import { ChatComponent } from './components/chat/chat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubNavComponent } from './components/sub-nav/sub-nav.component';
import { RestaurantPAComponent } from './components/restaurant-pa/restaurant-pa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { SliderComponent } from './components/slider/slider.component';
import { ReviewComponent } from './components/review/review.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ReservationComponent } from './components/reservation/reservation.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RestaurantComponent,
    RestaurantsComponent,
    FooterComponent,
    ImgComponent,
    ChatComponent,
    SubNavComponent,
    RestaurantPAComponent,
    RestaurantDetailsComponent,
    SliderComponent,
    ReviewComponent,
    CustomerComponent,
    ReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    HammerModule
    



  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
