import { Component, OnInit } from '@angular/core';
import {AuthService } from '../auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
// import { Router } from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // userModel;
  public name: string;
  public phone: number;
  public email: string;
  public password: string;
  public repassword: string;

// tslint:disable-next-line: variable-name
  constructor(private _register: AuthService, ) {}

  ngOnInit() {
  }

  onSubmit() {
    const data = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      password: this.password
    };
    this._register.enroll(data);
    alert('SUCCESSFULLY REGISTERED');
  }

}

