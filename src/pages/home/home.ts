import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FuelServiceProvider } from '../../providers/fuel-service/fuel-service';

// Pages
import { VehicleDetailPage } from '../vehicle-detail/vehicle-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public fuelList: any;

  constructor(
    public navCtrl: NavController,
    private fuelService: FuelServiceProvider) {
  }
  
  ionViewWillEnter(){
    this.fuelList = this.fuelService.getFuelList();
  }

  goToVehicleDetail(){
    this.navCtrl.push(VehicleDetailPage);
  }

}
