import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ICustomer } from './ICustomer';
import { Observable } from "rxjs";

import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {

  url: string = "http://localhost:8080/api/customer";

  constructor(private http: Http) { }

  getCustomers() {
    return this.http.get(this.url)
    .map((response: Response) =>  <ICustomer[]>response.json()._embedded.customers);
  }

}
