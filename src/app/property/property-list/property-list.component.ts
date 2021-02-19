import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../service/housing.service';
import { IProperty } from '../IProperty';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: IProperty[];
  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }

    this.housingService.getAllData(this.SellRent).subscribe((data) => {
      this.properties = data;
      console.log(data);
      console.log(this.route.snapshot.url.toString());
    });
  }
}
