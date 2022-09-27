import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerRecordComponent } from './customer-record/customer-record.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerRecordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
