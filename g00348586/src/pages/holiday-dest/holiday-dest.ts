import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HolidayDestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-holiday-dest',
  templateUrl: 'holiday-dest.html',
})
export class HolidayDestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HolidayDestPage');
  }
  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Sorry!',
      message: 'No more available holiday destinations at this time!',
      buttons: ['Ok']
    });
    alert.present()
  }

}

