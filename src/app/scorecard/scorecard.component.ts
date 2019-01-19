import { Component, OnInit } from '@angular/core';
import {ScoreAPIService} from "./score-api.service";
import {StartServiceService} from "../start/start-service.service";
import {ActivatedRoute} from "@angular/router";

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
  private selectedTee: number;
  private courseYardage: string[] = ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--'];
  private courseHandicap: string[] = ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--'];
  private coursePAR: string[] = ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--'];
  constructor(
    private scoreAPI: ScoreAPIService,
    private startService: StartServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.scoreAPI.updateCourseID(this.startService.getCourse());
    this.getCourseInfo();
  }

  getCourseInfo(): void{
    this.scoreAPI.getCourse().subscribe(info => {
      this.courseInfo = info.data.holes;
      console.log(this.courseInfo);
    });
    if(this.courseInfo === undefined){
      this.scoreAPI.getCourse(this.route.snapshot.paramMap.get('id')).subscribe(info => {
        this.courseInfo = info.data.holes;
        console.log(this.courseInfo);
      });
    }
  }

  sayTeeType(): void{
    console.log(this.selectedTee);
  }

  readyInfo(tee: number): void{
    this.courseYardage = [];
    this.courseHandicap = [];
    this.coursePAR = [];
    for(let i: number=0; i < 18; i++){
      // let holeNum: string = `hole${i+1}`;
      // console.log(holeNum);
      this.courseYardage.push(this.courseInfo[i].teeBoxes[tee-1].yards);
    }
    // console.log(this.courseYardage);
    for(let y: number = 0; y < 18; y++){
      this.courseHandicap.push(this.courseInfo[y].teeBoxes[tee-1].hcp);
    }
    for(let x: number = 0; x < 18; x++){
      this.coursePAR.push(this.courseInfo[x].teeBoxes[tee-1].par);
    }
  }

  DATASOURCE = testData;

}
