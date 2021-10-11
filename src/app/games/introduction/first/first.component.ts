import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  openHelp: boolean = false;

  firstLine: string = "export class IntroductionComponent implements OnInit {";
  secondLine: string = ": string = \"Ola Mundo\";"
  thirdLine: string = "constructor() { }";
  fourthLine: string = "ngOnInit(): void { }";
  fifthLine: string = "}";

  textInput: string = "";
  textCorrect: string = "texto";

  firstLineHtml: string = "<section>";
  thirdLineHtml: string = "</section>";

  textInputHtml: string = "";
  textCorrectHtml: string = "{{ texto }}";

  constructor() { }

  ngOnInit(): void { }

  conclude() {
    if (
      this.removeSpaceAndUpperCase(this.textInput) == this.removeSpaceAndUpperCase(this.textCorrect)
      && this.removeSpaceAndUpperCase(this.textInputHtml) == this.removeSpaceAndUpperCase(this.textCorrectHtml)
    ) {
      localStorage.setItem('introductionFirst', 'true');
      localStorage.setItem('introductionSecond', 'true');
    }
  }

  removeSpaceAndUpperCase(value: string) {
    return value.replace(/\s/g, '').toLocaleUpperCase();
  }
}
