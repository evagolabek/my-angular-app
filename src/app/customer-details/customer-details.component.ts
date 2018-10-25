import { Component, OnInit, Input } from '@angular/core';
import { CUSTOMER1 } from '../mock-data'

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer = CUSTOMER1

  constructor() { }

  ngOnInit() {
  }

}
