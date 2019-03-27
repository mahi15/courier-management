import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder, } from '@angular/forms';
import {AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = [];
  loginForm: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    this.auth.login(this.loginForm.value).then((data) => {
      this.auth.getUser(data.user.email).subscribe(user => {
        user.map(e => {
          localStorage.setItem('user', JSON.stringify(e.payload.doc.data()));
          const id = e.payload.doc.id;
          const datas = e.payload.doc.data();
          return {id, ...datas};
        });
        this.router.navigate(['/dashboard']);
      });
    });
  }
}
