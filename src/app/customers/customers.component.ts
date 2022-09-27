import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { CustomersService }  from '../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.customersService.getCustomers().subscribe((customers) => {
      console.log("Customers:");
      console.log(customers);
      this.customers = customers;
    });
  }

}
