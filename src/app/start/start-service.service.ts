import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Course} from "../templates/course";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StartServiceService {
  private coursesURL: string = 'https://golf-courses-api.herokuapp.com/courses';
  private selectedCourse: string;
  private backgroundPic: string;
  constructor(private http: HttpClient) { }
  getCourses(): Observable<Course[]>{
    // console.log(this.http.get<Course[]>(this.coursesURL));
    return this.http.get<Course[]>(this.coursesURL);
  }
  updateCourse(course: string): void{
    this.selectedCourse = course;
  }
  getCourse(): string{
    return this.selectedCourse;
  }
  getBackground(): string{
    console.log(this.backgroundPic);
    return this.backgroundPic;
  }
  setBackground(pic: string): void{
    this.backgroundPic = pic;
  }
}
