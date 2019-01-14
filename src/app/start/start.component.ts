import { Component, OnInit } from '@angular/core';
import {Course} from "../templates/course";
import {StartServiceService} from "./start-service.service";
// import {Observable} from "rxjs";

@Component({
  selector: 'JT-GFC-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  private courseList: Course[] = [];
  constructor(private startService: StartServiceService) { }

  ngOnInit() {
    this.getCourses();
    console.log(this.courseList);
  }
  getCourses(): void{
    this.startService.getCourses().subscribe(courseList => this.courseList = courseList);
    console.log(this.courseList);
  }
}
