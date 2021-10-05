import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  openModal: boolean = false;
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

  openHelp() {
    this.openModal = !this.openModal;
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
