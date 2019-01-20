import { Injectable } from '@angular/core';
import {Player} from "./player/player";
import {PlayerService} from "./player/player.service";

@Injectable({
  providedIn: 'root'
})
export class ScoringService {

  constructor() { }

  // addPlayer(name: string): void{
  //   this.playerService.pushPlayer(name);
  // }
}
