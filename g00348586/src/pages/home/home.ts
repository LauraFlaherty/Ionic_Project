import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HolidayDestPage } from './../holiday-dest/holiday-dest';
import { IndoorPage } from './../indoor/indoor';
import { WeatherPage } from './../weather/weather';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
 // open indoor page
  openIndoor() {
    this.navCtrl.push(IndoorPage);
    }
  // open weather page
  openWeather() {
    this.navCtrl.push(WeatherPage);
    }
  //open holiday destination
  openHolidayDest() {
    this.navCtrl.push(HolidayDestPage);
    }

    
}
