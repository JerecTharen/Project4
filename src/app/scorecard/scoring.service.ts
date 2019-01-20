import { Injectable } from '@angular/core';
import {Player} from "./player/player";
import {PlayerService} from "./player/player.service";
import {ScoreTotals} from "./score-totals";

@Injectable({
  providedIn: 'root'
})
export class ScoringService {

  private toScore: any[] = [];

  constructor() { }

  calcScores(): ScoreTotals{
    let inScore: number = 0;
    let outScore: number = 0;
    let totalScore: number = 0;
    for(let i: number = 0; i < 18; i++){
      this.toScore[i] = Number(this.toScore[i]);
    }
    for(let y: number = 0; y < 9; y++){
      outScore += this.toScore[y];
    }
    for(let x: number = 9; x < 18; x++){
      inScore += this.toScore[x];
    }
    totalScore = inScore + outScore;
    console.log(outScore);
    console.log(inScore);
    console.log(totalScore);
    this.toScore[18] = outScore;
    this.toScore[19] = inScore;
    this.toScore[20] = totalScore;
    for(let z: number = 0; z < 18; z++){
      if(this.toScore[z] === 0){
        this.toScore[z] = '--';
      }
    }
    return {
      outScore: outScore,
      inScore: inScore,
      totalScore: totalScore
    };
  }

  calcRelToPar(totalPar: number, scores: any[]): number{
    this.setScores(scores);
    let result: ScoreTotals = this.calcScores();
    let final: number = result.totalScore - totalPar;
    this.toScore[21] = final;
    return final;
  }

  setScores(scores: any[]): void{
    this.toScore = scores;
    for(let i: number = 0; i < 18; i++){
      if(this.toScore[i] === '--'){
        this.toScore[i] = 0;
      }
    }
  }

  // addPlayer(name: string): void{
  //   this.playerService.pushPlayer(name);
  // }
}
