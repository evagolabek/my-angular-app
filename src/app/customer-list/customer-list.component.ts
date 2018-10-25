import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from '../mock-data';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers = CUSTOMERS;
  selectedCustomer: Customer;

  constructor() { }

  ngOnInit() {
  }

  onSelect(cst: Customer): void  {
    this.selectedCustomer = cst;
  }
  
}
