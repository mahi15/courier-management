import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courier';
  constructor(
    public auth: AuthService,
    public router: Router
  ) {}

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
