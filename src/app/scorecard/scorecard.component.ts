import { Component, OnInit } from '@angular/core';
import {ScoreAPIService} from "./score-api.service";
import {StartServiceService} from "../start/start-service.service";
import {ActivatedRoute} from "@angular/router";
import {ScoringService} from "./scoring.service";
import {PlayerService} from "./player/player.service";
import {Player} from "./player/player";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ScoreTotals} from "./score-totals";
// import {SaveService} from "./save/save.service";

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
  // private backgroundImage: string;
  private newPlayerName: string;
  private currentPlayer: number;
  private currentHole: number;
  private newScore: number;
  private scoreForm: FormGroup;
  private allPlayers: Player[];
  private courseInfo: any[];
  private selectedTee: number;
  private courseYardage: string[] = ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--'];
  private courseHandicap: string[] = ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--'];
  private coursePAR: string[] = ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--'];
  constructor(
    private scoreAPI: ScoreAPIService,
    private startService: StartServiceService,
    private scoringService: ScoringService,
    private playerService: PlayerService,
    // private saveService: SaveService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.scoreForm = this.fb.group({
      'currentHole': [null],
      'currentPlayer': [null],
      'newScore': [null]
    });
  }

  ngOnInit() {
    // this.backgroundImage = this.startService.getBackground();
    // console.log(this.backgroundImage);
    this.scoreAPI.updateCourseID(this.startService.getCourse());
    this.getCourseInfo();
  }

  getCourseInfo(): void{
    // this.scoreAPI.getCourse().subscribe(info => {
    //   this.courseInfo = info.data.holes;
    //   // console.log(this.courseInfo);
    // });
    // if(this.courseInfo === undefined){
    //   this.scoreAPI.getCourse(this.route.snapshot.paramMap.get('id')).subscribe(info => {
    //     this.courseInfo = info.data.holes;
    //     // console.log(this.courseInfo);
    //   });
    // }
    this.scoreAPI.getCourse(this.route.snapshot.paramMap.get('id')).subscribe(info => {
      this.courseInfo = info.data.holes;
      // console.log(this.courseInfo);
    });
  }

  // sayTeeType(): void{
  //   console.log(this.selectedTee);
  // }

  readyInfo(tee: number): void{
    // console.log('Setting new info');
    this.courseYardage = [];
    this.courseHandicap = [];
    this.coursePAR = [];
    // console.log(this.courseYardage);
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

  addPlayerBTN(): void{
    // console.log(this.newPlayerName);
    this.addPlayer(this.newPlayerName);
  }
  addPlayer(name: string): void{
    this.playerService.pushPlayer(name);
    this.allPlayers = this.playerService.getPlayers();
    // console.log(this.playerService.getPlayers());
  }

  addScoreSubmit(post):void{
    this.currentHole = Number(post.currentHole);
    this.currentPlayer = Number(post.currentPlayer);
    this.newScore = post.newScore;
    // console.log(`${this.currentHole}, ${this.currentPlayer}, ${this.newScore}`);
    this.addScore();
  }
  addScore(): void{
    let scores: any[] = this.playerService.addScore(this.currentHole, this.currentPlayer, this.newScore).scores;
    // console.log(this.playerService.getPlayers());
    this.scoringService.setScores(scores);
    let result: ScoreTotals = this.scoringService.calcScores();
    this.playerService.addScore(19, this.currentPlayer, result.outScore);
    this.playerService.addScore(20, this.currentPlayer, result.inScore);
    this.playerService.addScore(21, this.currentPlayer, result.totalScore);
    let totalPar: number = 0;
    // console.log(this.selectedTee);
    for (let i: number = 0; i < 18; i++){
      // console.log(this.courseInfo[i].teeBoxes[this.selectedTee].par);
      totalPar += this.courseInfo[i].teeBoxes[this.selectedTee].par;
    }
    this.scoringService.calcRelToPar(totalPar, scores);
  }
  // getData(){
  //   console.log(this.saveService.getData());
  // }

  DATASOURCE = testData;

}
