import { Injectable } from '@angular/core';
import { AngularFireAuth} from "@angular/fire/auth";
import { Router } from "@angular/router";
import {AngularFireDatabase} from "@angular/fire/database";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private angularAuth: AngularFireAuth
  ) {

  }

  isAuthenticated() {
    return this.angularAuth.authState.pipe(
      map(user => user && user.uid ? true : false)
    )
  }


}
