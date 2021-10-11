import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'box-font',
  templateUrl: './box-font.component.html',
  styleUrls: ['./box-font.component.css']
})
export class BoxFontComponent implements OnInit {
  @Input() title: string = ''
  constructor() { }

  ngOnInit(): void { }
}
