import { Component, OnInit } from '@angular/core';

import * as data from '../../../../assets/bd.json';

@Component({
  selector: 'status-level',
  templateUrl: './status-level.component.html',
  styleUrls: ['./status-level.component.css']
})
export class StatusLevelComponent implements OnInit {
  bd = data;
  levels = this.bd.levels;

  access: any = {
    "introductionFirst": true,
    "introductionSecond": true,
    "introductionThird": true,
    "introductionFourth": true,
    "introductionFifth": true
  }

  constructor() { }

  ngOnInit(): void { }
}
