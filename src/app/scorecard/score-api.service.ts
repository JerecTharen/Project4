import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScoreAPIService {

  private courseURL: string = 'https://golf-courses-api.herokuapp.com/courses/';
  private courseID: string;
  constructor(private httpC: HttpClient) { }

  getCourse(): Observable<any>{
    return this.httpC.get<any>(this.courseURL + this.courseID);
  }
  updateCourseID(id: string): void{
    this.courseID = id;
  }
}
