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
  fifthLineHtml: string = "</section>";
  textInputHtml: string = "";
  textCorrectHtml: string = "[placeholder]=\"texto\"";

  textHelp: string = "<input [placeholder]=\"texto\">";

  constructor() { }

  ngOnInit(): void { }

  conclude() {
    // if (this.textInputHtml == this.textCorrectHtml) {
    //   this.modaldialog = !this.modaldialog;
    // }
  }

  removeSpaceAndUpperCase(value: string) {
    return value.replace(/\s/g, '').toLocaleUpperCase();
  }
}
