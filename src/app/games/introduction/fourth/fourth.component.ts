import { Component, OnInit } from '@angular/core';

import * as data from '../../../../assets/bd.json';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
  bd = data;
  code = this.bd.code;
  codeIntroduction = this.code.introduction;

  openHelp: boolean = false;
  textInputHTML = "";
  textCorrectHTML: string = "[(ngModel)]";
  textPhone: string = "Olá Mundo!";

  constructor() { }

  ngOnInit(): void { }

  conclude() {
    if (this.removeSpaceAndUpperCase(this.textInputHTML) == this.removeSpaceAndUpperCase(this.textCorrectHTML)) {
      localStorage.setItem('introductionFifth', 'true');
    }
  }

  removeSpaceAndUpperCase(value: string) {
    return value.replace(/\s/g, '').toLocaleUpperCase();
  }
}
