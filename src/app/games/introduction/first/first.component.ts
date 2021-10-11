import { Component, OnInit } from '@angular/core';

import * as data from '../../../../assets/bd.json';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  bd = data;
  code = this.bd.code;
  codeIntroduction = this.code.introduction;

  openHelp: boolean = false;
  textInputTS: string = "";
  textCorrectTS: string = "texto";
  textInputHTML: string = "";
  textCorrectHTML: string = "{{ texto }}";

  constructor() { }

  ngOnInit(): void { }

  conclude() {
    if (
      this.removeSpaceAndUpperCase(this.textInputTS) == this.removeSpaceAndUpperCase(this.textCorrectTS)
      && this.removeSpaceAndUpperCase(this.textInputHTML) == this.removeSpaceAndUpperCase(this.textCorrectHTML)
    ) {
      localStorage.setItem('introductionFirst', 'true');
      localStorage.setItem('introductionSecond', 'true');
    }
  }

  removeSpaceAndUpperCase(value: string) {
    return value.replace(/\s/g, '').toLocaleUpperCase();
  }
}
