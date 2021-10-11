import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import * as data from '../../../../assets/bd.json';

@Component({
  selector: 'box-congrats',
  templateUrl: './box-congrats.component.html',
  styleUrls: ['./box-congrats.component.css']
})
export class BoxCongratsComponent implements OnInit {
  @Input() level: any = '';
  @Input() open: any = false;

  bd: any = data;
  bdCongrats: any = this.bd.congrats;
  bdCongratsTwo: any = this.bdCongrats.introduction;

  constructor() { }

  ngOnInit(): void { }
}
