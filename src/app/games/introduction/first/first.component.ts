import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit, AfterViewInit {
  openHelp: boolean = false;
  modaldialog: boolean = false;
  firstLine: string = "export class IntroductionComponent implements OnInit {";
  textInput: string = "";
  thirdLine: string = "constructor() { }";
  fourthLine: string = "ngOnInit(): void { }";
  fifthLine: string = "}";
  textCorrect: string = "texto";

  firstLineHtml: string = "<section>";
  thirdLineHtml: string = "</section>";
  textInputHtml: string = "";
  textCorrectHtml: string = "{{ texto }}";

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (this.textInput == this.textCorrect && this.textInputHtml == this.textCorrectHtml) {
      this.modaldialog = !this.modaldialog;
    }
  }

  conclude() {
    if (this.textInput == this.textCorrect && this.textInputHtml == this.textCorrectHtml) {
      this.modaldialog = !this.modaldialog;
    }
  }

  removeSpaceAndUpperCase(value: string) {
    return value.replace(/\s/g, '').toLocaleUpperCase();
  }
}
