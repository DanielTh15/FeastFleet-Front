import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{

  listCutomer: Customer[] = [];
  @Output() customerListOutput: EventEmitter<Customer[]> = new EventEmitter();
  constructor(private customerService: CustomerService){

  }

  ngOnInit(): void {
    this.all();
    }

  all() {
    this.customerService.getAll().subscribe(res=> {
      if(res){
        this.listCutomer = res;
        console.log(this.listCutomer);
      }
    })
  }


  private emitterCustomerList(){
    this.customerListOutput.emit(this.listCutomer);

  }

}
