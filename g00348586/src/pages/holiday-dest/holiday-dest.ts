import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';


@IonicPage()
@Component({
  selector: 'page-holiday-dest',
  templateUrl: 'holiday-dest.html',
})
export class HolidayDestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController,private vibration: Vibration) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HolidayDestPage');
  }
  //Alert at the bottom of the page, when clicked will notify the user that it is the end of the page
  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Sorry!',
      message: 'No more available holiday destinations at this time!',
      buttons: ['Ok']
    });
    alert.present()
  }
  doVibrate(){
    //concole.log to show that the function is in action
    console.log("Vibration works");
    //vibrates for a second. Vibration duration ignored on iOS 
    this.vibration.vibrate(1000);
  }

}

