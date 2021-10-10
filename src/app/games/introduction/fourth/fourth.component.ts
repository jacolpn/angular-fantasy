import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
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
  sixLineHTML: string = "[class.success]=\"texto == 'Olá Mundo'\"";
  sevenLineHTML: string = "=\"texto\"";
  sevenCorrectLineHTML: string = "[(ngModel)]=\"texto\"";
  eightLineHTML: string = ">";
  nineLineHTML: string = "</section>";
  tenLineHTML: string = "";

  textInputHTML = "";
  textCorrectHTML: string = "[(ngModel)]";

  oneLineCSS: string = ".success {";
  twoLineCSS: string = "border: 2px solid rgba(53, 201, 75);";
  threeLineCSS: string = "}";
  fourLineCSS: string = "";

  textPhone: string = "Olá Mundo!";

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
