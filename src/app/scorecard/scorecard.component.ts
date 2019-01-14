import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  DATASOURCE = testData;

}
