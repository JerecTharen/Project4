import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private db: AngularFirestore
  ) { }

  addUser(user){
    this.db.collection('users').doc(user.user.uid).set({
      id: user.user.uid,
      name: user.user.displayName
    });
  }

  addScores(scores, uid){
    this.db.collection('users').doc(uid).collection('scorecard').doc(scores.id).set(scores);
  }

}
