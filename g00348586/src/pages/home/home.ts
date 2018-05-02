import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HolidayDestPage } from './../holiday-dest/holiday-dest';
import { IndoorPage } from './../indoor/indoor';
import { WeatherPage } from './../weather/weather';
import { Flashlight } from '@ionic-native/flashlight';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule } from '@angular/forms'; 
import { Storage } from '@ionic/storage'; 


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //to show data binding 
  name: string="User"; 
  constructor(public navCtrl: NavController,private flashlight:Flashlight,public storage:Storage) {

  }
 // open indoor page
  openIndoor() {
    this.navCtrl.push(IndoorPage);
    }
  // open Movie page
  openWeather() {
    this.navCtrl.push(WeatherPage);
    }
  //open holiday destination
  openHolidayDest() {
    this.navCtrl.push(HolidayDestPage);
    }
  toggleFlashlight(){
    console.log("off/on");
    this.flashlight.toggle(); 
  }
 
    
}

