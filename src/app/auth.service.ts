import { Injectable } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AngularFireDatabase(userModel: any): any {
    throw new Error('Method not implemented.');
  }

  constructor(
    private http: HttpClient,
    private afs: AngularFirestore
  ) { }

  enroll(user: any) {
    console.log(user);
    this.afs.collection('courier').add(user).then(
      res => {
        return true;
      },
      error => {
        return false;
      }
    );
  }
}
// private _http: HttpClient
