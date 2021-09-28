import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  firstLine: string = "export class IntroductionComponent implements OnInit {";
  textInput: string = "";
  thirdLine: string = "constructor() { }";
  fourthLine: string = "ngOnInit(): void { }";
  fifthLine: string = "}";
  textCorrect: string = "texto: string = \"Olá Mundo\";";
  textCorrectTwo: string = "texto: string = \"Ola Mundo\";";

  firstLineHtml: string = "<section>";
  thirdLineHtml: string = "</section>";
  textInputHtml: string = "";
  textCorrectHtml: string = "{{ texto }}";

  constructor() { }

  ngOnInit(): void { }

  removeSpaceAndUpperCase(value: string) {
    return value.replace(/\s/g, '').toLocaleUpperCase();
  }
}
