import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CustomerService} from '../customer.service';
import { ICustomer} from '../icustomer';

@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.component.html',
  styleUrls: ['./customerview.component.css'],
  
})
export class CustomerviewComponent implements OnInit {

  @Output() changedCustomer = new EventEmitter<ICustomer>();

  errorMessage: string;
  
  customers: ICustomer[];
  customer: ICustomer;

  constructor(private customerService: CustomerService) { }

  getCustomers() {
    this.customerService.getCustomers()
    .subscribe( 
      customers => this.customers = customers,
      error => this.errorMessage = <any>error
    );
  }

  showCustomerDetails(customer: ICustomer) {
    this.customer = customer;
    this.changedCustomer.emit(customer);
  }

  ngOnInit() {
    this.getCustomers();
  }

}
