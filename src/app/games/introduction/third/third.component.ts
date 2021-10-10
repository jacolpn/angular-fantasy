import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  openHelp: boolean = false;
  modaldialog: boolean = false;
  oneLineTS: string = "export class IntroductionComponent implements OnInit {";
  twoLineTS: string = "texto: string = \"Olá Mundo\";";
  threeLineTS: string = "";
  fourLineTS: string = "constructor() { }";
  fiveLineTS: string = "";
  sixLineTS: string = "ngOnInit(): void { }";
  sevenLineTS: string = "}";
  eightLineTS: string = "";

  oneLineHTML: string = "<section>";
  twoLineHTML: string = "{{ texto }}";
  threeLineHTML: string = "";
  fourLineHTML: string ="<input";
  fiveLineHTML: string = "[placeholder]=\"texto\"";
  sixLineHTML: string = "=\"texto == 'Olá Mundo'\"";
  sixCorrectLineHTML: string = "[class.success]=\"texto == 'Olá Mundo'\"";
  sevenLineHTML: string = ">";
  eightLineHTML: string = "</section>";
  nineLineHTML: string = "";

  textInputHTML: string = "";
  textCorrectHTML: string = "[class.success]";

  oneLineCSS: string = ".success {"
  twoLineCSS: string = "border: 2px solid rgba(53, 201, 75);"
  threeLineCSS: string = "}"
  fourLineCSS: string = ""

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (this.textInputHTML == this.textCorrectHTML) {
      this.modaldialog = !this.modaldialog;
    }
  }

  conclude() {
    if (this.textInputHTML == this.textCorrectHTML) {
      this.modaldialog = !this.modaldialog;
    }
  }

  removeSpaceAndUpperCase(value: string) {
    return value.replace(/\s/g, '').toLocaleUpperCase();
  }
}
