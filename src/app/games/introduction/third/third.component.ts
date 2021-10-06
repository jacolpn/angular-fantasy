import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  openModal: boolean = false;
  modaldialog: boolean = false;
  firstLine: string = "export class IntroductionComponent implements OnInit {";
  thirdLine: string = "constructor() { }";
  fourthLine: string = "ngOnInit(): void { }";
  fifthLine: string = "}";

  firstLineHtml: string = "<section>";
  secondLineHtml: string = "{{ texto }}";
  thirdLineHtml: string = "<input [placeholder]=\"texto\">";
  fourthLineHtml: string ="<input";
  fifthLineHtml: string = "</section>";
  textInputHtml: string = "";
  textCorrectHtml: string = "[placeholder]=\"texto\"";


  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (this.textInputHtml == this.textCorrectHtml) {
      this.modaldialog = !this.modaldialog;
    }
  }

  openHelp() {
    this.openModal = !this.openModal;
  }

  conclude() {
    if (this.textInputHtml == this.textCorrectHtml) {
      this.modaldialog = !this.modaldialog;
    }
  }

  removeSpaceAndUpperCase(value: string) {
    return value.replace(/\s/g, '').toLocaleUpperCase();
  }
}
