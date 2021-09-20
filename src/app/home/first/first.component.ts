import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  hello = '{{ Olá Mundo }}';
  helloTwo = '{{ Ola Mundo }}';
  helloVar: string = '';

  constructor() { }

  ngOnInit(): void {
    this.helloVar = '';
  }

  removeSpaceAndUpperCase(value: string) {
    return value.replace(/\s/g, '').toLocaleUpperCase();
  }
}
