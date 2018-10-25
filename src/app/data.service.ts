import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = "http://localhost:3000/author";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url + '?_sort=id&_order=desc')
      .map(response => response.json());
  }
}
