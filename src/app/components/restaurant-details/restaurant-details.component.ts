import {  Component, ElementRef, Input, OnChanges, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant.model';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit, OnChanges {

  @ViewChild('carousel') carousel!: ElementRef;

  @Input() restaurant!: Restaurant;

  selectIndex = 0;


  constructor() {

  }

  showPrev(i: number) {
    if(this.selectIndex > 0){
      this.selectIndex = i - 1;
    }
  }

  showNext(i: number){
    if(this.selectIndex< this.restaurant.image.length - 1){
      this.selectIndex = i + 1;
    }
  }
  ngOnInit(): void {
    console.log('Restaurant: ', this.restaurant);

  }

  ngOnChanges(): void {
    console.log('Restaurant Onchange', this.restaurant);

  }




}

