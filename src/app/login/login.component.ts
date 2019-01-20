import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {FormBuilder, Validators, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'JT-GFC-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  loginForm: FormGroup;

  constructor(
    private angularAuth: AngularFireAuth,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = fb.group({
      'email': [null, Validators.email],
      'password': [null, Validators.minLength(4)]
    })
  }

  ngOnInit() {
  }

  signIn() {
    this.email = this.loginForm.value.email;
    this.password = this.loginForm.value.password;
    this.angularAuth.auth
      .signInWithEmailAndPassword(this.email, this.password)
      .then(user => {
        if(user) {
          // console.log(user.user.uid);
          this.router.navigate(['/course-select']);
        }
      });
  }

}
