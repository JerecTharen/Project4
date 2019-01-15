import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {auth} from "firebase";

@Component({
  selector: 'JT-GFC-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {
  email: string;
  password: string;

  constructor(private angularAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {}

  signUp() {
    this.angularAuth.auth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(user => {
        if(user) {
          this.router.navigate(['/scorecard']);
        }
      })
      .catch(error => console.log(error));
  }

  signIn() {
    this.angularAuth.auth
      .signInWithEmailAndPassword(this.email, this.password)
      .then(user => {
        if(user) {
          this.router.navigate(['/scorecard']);
        }
      });
  }

  signUpWithGoogle() {
    this.angularAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(user => {
      console.log(user);
      if(user) {
        this.router.navigate(['/scorecard']);
      }
    })
  }
}

