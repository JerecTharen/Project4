// import { Injectable } from '@angular/core';
// import {SaveData} from "./save-data";
// import {Player} from "../player/player";
// import {AngularFireAuth} from "@angular/fire/auth";
// import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
// import {Observable} from "rxjs";
// import {ListData} from "./list-data";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class SaveService {
//
//   private saveData: SaveData;
//   private listData: ListData[];
//
//   constructor(
//     private angularAuth: AngularFireAuth,
//     private db: AngularFireDatabase,
//     // private al: AngularFireList<ListData[]>,
//     // private user: Observable<ListData[]>
//   ) {
//     this.al = this.db.list<ListData[]>(`users/${this.saveData.userID}`);
//   }
//
//   setData(data: Player[]): void{
//     this.saveData.data = data;
//     this.saveData.userID = this.angularAuth.auth.currentUser.uid;
//   }
//
//   getData(){
//     this.user = this.getDataObservable();
//     this.user.subscribe(data => this.listData = data);
//     return this.saveData.data;
//   }
//   getDataObservable(): Observable<any>{
//     return this.al.valueChanges();
//   }
//
//   convertData(data: Player[]): void{
//
//   }
//
// }
