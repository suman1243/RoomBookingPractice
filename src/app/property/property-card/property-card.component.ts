import { Component, OnInit, Input } from '@angular/core';
import { Identifiers } from '@angular/compiler';
import { IProperty } from '../IProperty';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})
export class PropertyCardComponent implements OnInit {
  constructor() {}

  @Input() property: IProperty;

  // Property: any = {
  //   ID: '1',
  //   Name: 'Home',
  //   Type: 'home',
  //   Price: 12000,
  // };

  ngOnInit(): void {}
}
