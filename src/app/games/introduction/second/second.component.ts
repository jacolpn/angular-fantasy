import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  openHelp: boolean = false;

  firstLine: string = "export class IntroductionComponent implements OnInit {";
  thirdLine: string = "constructor() { }";
  fourthLine: string = "ngOnInit(): void { }";
  fifthLine: string = "}";

  firstLineHtml: string = "<section>";
  secondLineHtml: string = "{{ texto }}";
  fourthLineHtml: string ="<input";
  fourthTwoLineHtml: string ="=\"text\">";
  fifthLineHtml: string = "</section>";
  textInputHtml: string = "";
  textCorrectHtml: string = "[placeholder]";

  textHelp: string = "<input [placeholder]=\"texto\">";

  constructor() { }

  ngOnInit(): void { }

  conclude() {
    if (this.removeSpaceAndUpperCase(this.textInputHtml) == this.removeSpaceAndUpperCase(this.textCorrectHtml)) {
      localStorage.setItem('introductionThird', 'true');
    }
  }

  removeSpaceAndUpperCase(value: string) {
    return value.replace(/\s/g, '').toLocaleUpperCase();
  }
}
