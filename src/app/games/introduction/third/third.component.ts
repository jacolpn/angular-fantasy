import { Component, OnInit } from '@angular/core';

import * as data from '../../../../assets/bd.json';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  bd = data;
  code = this.bd.code;
  codeIntroduction = this.code.introduction;
  help = this.bd.help;
  codeIntroductionHelp = this.help.introduction[3];

  openHelp: boolean = false;
  textInputHTML: string = "";
  textCorrectHTML: string = "[class.success]";

  constructor() { }

  ngOnInit(): void { }

  conclude() {
    if (this.removeSpaceAndUpperCase(this.textInputHTML) == this.removeSpaceAndUpperCase(this.textCorrectHTML)) {
      localStorage.setItem('introductionFourth', 'true');
    }
  }

  removeSpaceAndUpperCase(value: string) {
    return value.replace(/\s/g, '').toLocaleUpperCase();
  }
}
