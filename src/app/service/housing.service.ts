import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProperty } from '../property/IProperty';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private httpclient: HttpClient) {}

  getAllData(sellRent: number): Observable<IProperty[]> {
    return this.httpclient.get('data/property.json').pipe(
      map((data) => {
        const propertiesArray: Array<IProperty> = [];

        for (const id in data) {
          if (data[id].SellRent === sellRent) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }
}
