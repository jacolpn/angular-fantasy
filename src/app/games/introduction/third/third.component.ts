import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  openModal: boolean = false;
  modaldialog: boolean = false;
  textInput: string = "";
  textCorrect: string = "texto";

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
