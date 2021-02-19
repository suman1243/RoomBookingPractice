import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/service/housing.service';
import { IProperty } from '../IProperty';

@Component({
  selector: 'app-rent-property',
  templateUrl: './rent-property.component.html',
  styleUrls: ['./rent-property.component.css'],
})
export class RentPropertyComponent implements OnInit {
  sellRent = 2;
  properties: IProperty[];
  constructor(private housingService: HousingService) {}

  ngOnInit(): void {
    this.housingService.getAllData(this.sellRent).subscribe((data) => {
      this.properties = data;
    });
  }
}
