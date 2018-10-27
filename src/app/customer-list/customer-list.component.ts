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
    let searchText = 'joanna';
    console.log(searchText);
    this.search(searchText);
  }

  onSelect(cst: Customer): void  {
    this.selectedCustomer = cst;
  }

  search(input: String): void {
    let output = this.customers.filter(x => x.name === input );
    console.log(output)
  } 
}
