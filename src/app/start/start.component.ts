import { Component, OnInit } from '@angular/core';
import {Course} from "../templates/course";
import {StartServiceService} from "./start-service.service";
import {Router} from "@angular/router";
// import {Observable} from "rxjs";

@Component({
  selector: 'JT-GFC-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  private courseList: Course[] = [];
  selectedCourse: string;
  constructor(
    private startService: StartServiceService,
    private routing: Router
  ) { }

  ngOnInit() {
    this.getCourses();
    console.log(this.courseList);
  }
  getCourses(): void{
    this.startService.getCourses().subscribe(courseList => this.courseList = courseList);
    // console.log(this.courseList);
  }
  submitCourse(): void{
    // console.log(this.selectedCourse);
    this.startService.updateCourse(this.selectedCourse);
    // for(let i: number = 0; i < this.courseList.length; i++){
    //   if (Number(this.selectedCourse) === this.courseList[i].id){
    //     console.log(this.courseList);
    //     this.startService.setBackground(this.courseList[i].image);
    //   }
    // }
    this.routing.navigate([`/scorecard/${this.selectedCourse}`]);
  }
}
