import { Injectable } from '@angular/core';
import {Player} from "./player";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private allPlayers: Player[] = [];

  constructor() { }

  pushPlayer(name: string): void{
    let newID: number;
    if(this.allPlayers.length === 0){
      newID = 1;
    }
    else{
      // console.log(this.allPlayers[this.allPlayers.length].id);
      newID = this.allPlayers[this.allPlayers.length-1].id+1;
    }
    let newPlayer: Player = {
      name: name,
      id: newID,
      scores: ['--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--', '--']
    };
    for(let i: number = 0; i < this.allPlayers.length; i++){
      if(this.allPlayers[i].name === newPlayer.name){
        newPlayer.name = newPlayer.name + newPlayer.id;
      }
    }
    this.allPlayers.push(newPlayer);
  }

  getPlayers(): Player[]{
    return this.allPlayers;
  }

  addScore(holeNum: number, pID: number, score: number): Player{
    // console.log(holeNum);
    // console.log(pID);
    // console.log(score);
    for (let i: number = 0; i < this.allPlayers.length; i++){
      if (pID === this.allPlayers[i].id){
        // console.log(`found at ${i}`);
        this.allPlayers[i].scores[holeNum-1] = `${score}`;
        // console.log(`Score changed to: ${this.allPlayers[i].scores[holeNum-1]}`);
        return this.allPlayers[i];
      }
    }
  }
}
