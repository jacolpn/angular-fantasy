import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {
  openHelp: boolean = false;
  modaldialog: boolean = false;
  oneLineTS: string = "export class IntroductionComponent implements OnInit {";
  twoLineTS: string = "texto: string = \"Olá Mundo\";";
  threeLineTS: string = "";
  fourLineTS: string = "constructor() { }";
  fiveLineTS: string = "";
  sixLineTS: string = "ngOnInit(): void { }";
  sevenLineTS: string = "";
  eightLineTS: string = "onClear() {";
  nineLineTS: string = "this.texto = \"\";";
  tenLineTS: string = "}";
  elevenLineTS: string = "";

  oneLineHTML: string = "<section>";
  twoLineHTML: string = "{{ texto }}";
  threeLineHTML: string = "";
  fourLineHTML: string ="<input";
  fiveLineHTML: string = "[placeholder]=\"texto\"";
  sixLineHTML: string = "=\"texto == 'Olá Mundo'\"";
  sixCorrectLineHTML: string = "[class.success]=\"texto == 'Olá Mundo'\"";
  sevenLineHTML: string = "[(ngModel)]=\"texto\"";
  eightLineHTML: string = ">";
  nineLineHTML: string = "";
  tenPartyOneLineHTML: string = "<button"
  tenPartyTwoLineHTML: string = "=\"onClear()\">Limpar</button>";
  tenCorrectLineHTML: string = "<button (click)=\"onClear()\">Limpar</button>";
  elevenLineHTML: string = "</section>";
  twelveLineHTML: string = "";

  textInputHTML = "";
  textCorrectHTML: string = "(click)";

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

  onClear() {
    this.textPhone = "";
  }
}
