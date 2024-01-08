import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StrictModifiers, right } from '@popperjs/core';
import { Review } from 'src/app/models/review.model';
import { ResenaServiceService } from 'src/app/services/resena-service.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnChanges, OnInit {

  reviewData: Review = {
    reviewId: 0,
    userId: '',
    restaurantId: '',
    comment: '',
    qualification: 0
  }

  listReviwe: Review[] = [];


  @Input() idRestaurant!: string;



  idCliente: string = '1005438555';

  showBoxSendReviee: boolean = false;
  constructor(private service: ResenaServiceService) {

  }

  ngOnInit(): void {
    this.All();
  }

  wiewReview() {
    this.showBoxSendReviee = true;
  }

  ngOnChanges(): void {
    console.log('IdRestaurant Select', this.idRestaurant);

  }

  save() {
    this.service.save(this.reviewData).subscribe(res => {
      if (res) {
        this.reviewData.userId = this.idCliente;
        this.idRestaurant = this.idRestaurant;
        console.log('Reseña guardada exitosamente');
      }
    });
  }

  All() {
    this.service.getAll(this.idRestaurant).subscribe(res => {
      if (res) {
        this.listReviwe = res;
      }
    });
  }


}



