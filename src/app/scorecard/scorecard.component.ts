import { Component, OnInit } from '@angular/core';
import {ScoreAPIService} from "./score-api.service";
import {StartServiceService} from "../start/start-service.service";

const testData: any[] = [
  {hole: 1, names: ['jacob', 'jerec', 'aralin'], scores: [1,2,3]},
  {hole: 2, names: ['jacob', 'jerec', 'aralin'], scores: [4,5,6]},
  {hole: 3, names: ['jacob', 'jerec', 'aralin'], scores: [7,8,9]}
];


@Component({
  selector: 'JT-GFC-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.scss']
})
export class ScorecardComponent implements OnInit {
  private courseInfo: any[];
  constructor(
    private scoreAPI: ScoreAPIService,
    private startService: StartServiceService
  ) { }

  ngOnInit() {
    this.scoreAPI.updateCourseID(this.startService.getCourse());
    this.getCourseInfo();
  }

  getCourseInfo(): void{
    this.scoreAPI.getCourse().subscribe(info => {
      this.courseInfo = info.data;
      console.log(this.courseInfo);
    });
  }

  DATASOURCE = testData;

}
