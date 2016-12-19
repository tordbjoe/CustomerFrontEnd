import { Component, OnInit, Input } from '@angular/core';

import { ICustomer } from '../icustomer';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent implements OnInit {

  @Input() customer: ICustomer;

  constructor() { }

  ngOnInit() {
  }

}
