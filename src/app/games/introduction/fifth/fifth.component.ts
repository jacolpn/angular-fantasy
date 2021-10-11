import { Component, OnInit } from '@angular/core';

import * as data from '../../../../assets/bd.json';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {
  bd = data;
  code = this.bd.code;
  codeIntroduction = this.code.introduction;

  openHelp: boolean = false;
  textInputHTML = "";
  textCorrectHTML: string = "(click)";
  textPhone: string = "Olá Mundo!";

  constructor() { }

  ngOnInit(): void { }

  conclude() { }

  removeSpaceAndUpperCase(value: string) {
    return value.replace(/\s/g, '').toLocaleUpperCase();
  }

  onClear() {
    this.textPhone = "";
  }
}
