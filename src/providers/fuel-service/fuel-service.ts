import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FuelServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FuelServiceProvider {

  fuelList = [
    {fuelDate: "2017-08-16", mileage: 17900, fuelAmount: 51,},
    {fuelDate: "2017-08-23", mileage: 18550, fuelAmount: 43,}
  ];

  constructor(public http: Http) {
    console.log('Hello FuelServiceProvider Provider');
  }

  getFuelList(){
    return this.fuelList.map(res => res);
  }

}
