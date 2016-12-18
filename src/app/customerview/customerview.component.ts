import { Component, OnInit } from '@angular/core';
import { CustomerService} from '../customer.service';
import { ICustomer} from '../icustomer';

@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.component.html',
  styleUrls: ['./customerview.component.css']
})
export class CustomerviewComponent implements OnInit {

  customers: ICustomer[];

  constructor(private customerService: CustomerService) { }

  getCustomers() {
    this.customerService.getCustomers()
    .subscribe( customers => this.customers = customers, error => alert(error) );
  }

  ngOnInit() {
    this.getCustomers();
  }

}
