import { Component, OnInit, Input, Output } from '@angular/core';
import { List } from './list'

@Component({
  selector: 'app-list-template',
  templateUrl: './list-template.component.html',
  styleUrls: ['./list-template.component.css']
})
export class ListTemplateComponent implements OnInit,List {
  @Input() countryflag: any;
  @Input() countryname: string;
  @Input() countrycapital: string;
  @Input() countrycurrenciesname: string;
  @Input() countrycurrenciescode: string;
  @Input() countryregion: string;
  @Input() countrysubregion: string;
  @Input() countrytimezones: any;
  @Input() countryalpha3Code: string;

  constructor() { }

  ngOnInit() {
  }

}
