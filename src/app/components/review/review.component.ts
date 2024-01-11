import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { Review } from 'src/app/models/review.model';
import { CustomerService } from 'src/app/services/customer.service';
import { ResenaServiceService } from 'src/app/services/resena-service.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnChanges, OnInit {

  @Output() reviewListEmitter: EventEmitter<Review[]> = new EventEmitter();

  reviewData: Review = {
    reviewId: 0,
    customerId: '',
    restaurantId: '',
    comment: '',
    qualification: 0
  }



  listReviwe: Review[] = [];
  ListAllReview: Review[] = [];
  CustomerList: Customer[] = [];

  currentReviewId: string | null = null;


  @Input() idRestaurant!: string;
  idCliente: string = '1005897832';

  totalReviewByCustomer: Review[] = [];

  showBoxSendReviee: boolean = false;
  constructor(private service: ResenaServiceService,
    private customerService: CustomerService) {

  }

  ngOnInit(): void {
    this.All();
    this.getAllReview();
    this.AllByCustomer();

  }
  //Este metodo trae  todas las reseñas 

  getAllReview() {
    this.service.All().subscribe(res => {
      if (res) {
        this.ListAllReview = res;
        console.log(this.ListAllReview);

      }
    })
  }

  wiewReview() {
    this.showBoxSendReviee = !this.showBoxSendReviee;
  }

  ngOnChanges(): void {
    console.log('IdRestaurant Select', this.idRestaurant);
    console.log('list customer', this.CustomerList);

  }

  save() {
    this.reviewData.customerId = this.idCliente;
    this.reviewData.restaurantId = this.idRestaurant;
  
    this.service.save(this.reviewData).subscribe(
      (newReview) => {
        this.showBoxSendReviee = false;
        // Asocia el cliente a la nueva reseña
        const customer = this.CustomerList.find(c => c.idCustomer === this.idCliente);
        if (customer) {
          newReview.customer = customer;
          // Agrega la nueva reseña a la lista local
          this.listReviwe.push(newReview);
        }
      },
      // Manejo de errores...
    );
  }

  //Este metodo trae las reseñas que le pertencen a un restaurante
  All() {
    this.service.getAll(this.idRestaurant).subscribe(res => {
      if (res) {
        this.listReviwe = res;
        this.associateCustomersToReviews();
      }
      this.reviewListEmitter.emit(this.listReviwe);

    });
  }

  delete(idReview: any){
    this.service.delete(idReview).subscribe(res =>{
        this.All();
      })
  }

  updateReview(reviewId: any){
    this.service.getById(reviewId).subscribe(review=>{
      if(review){
        this.reviewData = review;
        this.showBoxSendReviee = true;
      }
    });
  }

  AllByCustomer() {
    this.customerService.getAll().subscribe(customer => {
      if (customer && customer.length > 0) {
        this.CustomerList = customer;
        this.associateCustomersToReviews();

      }
    })
  }

  associateCustomersToReviews() {
    this.listReviwe.forEach(review => {
      const customer = this.CustomerList.find(c => c.idCustomer === review.customerId);
      if (customer) {
        review.customer = customer;
        this.service.AllByCustomer(review.customerId).subscribe(res => {
          if (res) {
            this.totalReviewByCustomer = res;
            customer.totalReviews = this.totalReviewByCustomer.length;
          }
        });
      }
    });
  }

  showInformationDeleteAndUpdate(idCustomer: string) {
    this.currentReviewId = idCustomer;
  }

}













