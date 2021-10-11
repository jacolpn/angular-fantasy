import { Component, Input, OnInit } from '@angular/core';

import * as data from '../../../../assets/bd.json';

@Component({
  selector: 'status-level',
  templateUrl: './status-level.component.html',
  styleUrls: ['./status-level.component.css']
})
export class StatusLevelComponent implements OnInit {
  @Input() level: any = '';

  bd = data;
  levels = this.bd.levels;

  constructor() { }

  ngOnInit(): void { }

  getStorage(value: any) {
    return localStorage.getItem(value);
  }
}
