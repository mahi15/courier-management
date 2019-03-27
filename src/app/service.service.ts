import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpclient: HttpClient) { }

  getAftership() {
    return this.httpclient.get('https://api.aftership.com/v4');
  }
}
