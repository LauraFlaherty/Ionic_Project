import { Component } from '@angular/core';
import { HolidayDestPage } from './../holiday-dest/holiday-dest';
import { IndoorPage } from './../indoor/indoor';
import { WeatherPage } from './../weather/weather';
import { Flashlight } from '@ionic-native/flashlight';
import { Storage } from '@ionic/storage'; 
import { NavController } from 'ionic-angular';
import {StatusPage} from '../status/status';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //to show data binding 
  name: string="User"; 
  Status:string;

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

        //toggle flashlight
  toggleFlashlight(){
    console.log("off/on");
    this.flashlight.toggle(); 
  }
  //button
  openStatusPage(){
    this.navCtrl.push(StatusPage);
  }
//The store the user's review!
  ionViewWillEnter(){
    this.storage.get("Status")
    .then((data) => {
      this.Status = data;
    })
    .catch((err) => {
      console.log(err);
    })

  }
  
    }
    

    
