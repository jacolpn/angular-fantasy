import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import * as data from '../../../../assets/bd.json';

@Component({
  selector: 'box-help',
  templateUrl: './box-help.component.html',
  styleUrls: ['./box-help.component.css']
})
export class BoxHelpComponent implements OnInit {
  @Input() level: any = '';
  @Output() open: any = new EventEmitter();

  bd: any = data;
  bdHelp: any = this.bd.help;
  bdHelpTwo: any = this.bdHelp.introduction
  openModal: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  openHelp() {
    this.openModal = !this.openModal;
    this.open.emit(this.openModal)
  }
}
