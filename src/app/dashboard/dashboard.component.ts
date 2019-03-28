import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  urlName: string;
  constructor(private route: Router) { }

  ngOnInit() {
    this.urlName = window.location.pathname;
  }
  logout() {
    localStorage.removeItem('user');
    this.route.navigate(['login']);
  }

}
