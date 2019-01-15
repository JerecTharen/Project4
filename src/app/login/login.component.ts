import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'JT-GFC-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private angularAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
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

}
