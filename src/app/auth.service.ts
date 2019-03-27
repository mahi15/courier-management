import { Injectable } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AngularFireDatabase(userModel: any): any {
    throw new Error('Method not implemented.');
  }

  constructor(
    private http: HttpClient,
    private afs: AngularFirestore,
    private router: Router,
  ) { }

  enroll(user: any) {
    this.afs.collection('courier').add(user).then(
      res => {
        return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
      },
      error => {
        return false;
      }
    );
  }

  login(data): any {
    return firebase.auth().signInWithEmailAndPassword(data.email, data.password)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  getUser(data) {
    return this.afs.collection('courier', ref => ref.where('email', '==', data)).snapshotChanges();
  }

  isLoggedin() {
    if (localStorage.getItem('user') == null || localStorage.getItem('user') == undefined) {
      return false;
    } else {
      return true;
    }
  };
}

