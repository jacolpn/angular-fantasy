import { Component, OnInit } from '@angular/core';

import * as data from '../../../../assets/bd.json';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  bd = data;
  code = this.bd.code;
  codeIntroduction = this.code.introduction;
  help = this.bd.help;
  codeIntroductionHelp = this.help.introduction[2];

  openHelp: boolean = false;
  textInputHTML: string = "";
  textCorrectHTML: string = "[placeholder]";

  constructor() { }

  ngOnInit(): void { }

  conclude() {
    if (this.removeSpaceAndUpperCase(this.textInputHTML) == this.removeSpaceAndUpperCase(this.textCorrectHTML)) {
      localStorage.setItem('introductionThird', 'true');
    }
  }

  removeSpaceAndUpperCase(value: string) {
    return value.replace(/\s/g, '').toLocaleUpperCase();
  }
}
