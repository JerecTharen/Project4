import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {auth} from "firebase";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
// import {AngularFirestore} from "@angular/fire/firestore";
import {DatabaseService} from "../../Services/database.service";

@Component({
  selector: 'JT-GFC-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  // email: string;
  // password: string;

  // signUpForm: FormGroup;

  constructor(
    private angularAuth: AngularFireAuth,
    private router: Router,
    private fb: FormBuilder,
    // private db: AngularFirestore,
    private dbService: DatabaseService
  ) {
    // this.signUpForm = fb.group({
    //   'email': [null, Validators.email],
    //   'password': [null, Validators.minLength(6)]
    // })
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    console.log('destroy called');
  }

  // signUpSubmit(post){
  //   this.email = post.email;
  //   this.password = post.password;
  //   // console.log(`${this.email}, ${this.password}`);
  //   this.signUp();
  // }
  // signUp() {
  //   this.angularAuth.auth
  //     .createUserWithEmailAndPassword(this.email, this.password)
  //     .then(user => {
  //       if(user) {
  //         this.router.navigate(['/course-select']);
  //       }
  //     })
  //     .catch(error => console.log(error));
  // }

  // signIn() {
  //   this.angularAuth.auth
  //     .signInWithEmailAndPassword(this.email, this.password)
  //     .then(user => {
  //       if(user) {
  //         this.router.navigate(['/scorecard']);
  //       }
  //     });
  // }

  signUpWithGoogle() {
    this.angularAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(user => {
      console.log(user);
      this.dbService.addUser(user);
      this.router.navigate(['/course-select']);
    });
  }
}

