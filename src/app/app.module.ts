import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomerviewComponent } from './customerview/customerview.component';

import { CustomerService } from './customer.service';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerviewComponent,
    CustomerdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
