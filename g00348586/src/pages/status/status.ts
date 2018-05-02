import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {
  myStatus: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }
  //set review
  saveStatus(){
    console.log(this.myStatus);
    this.storage.set("Status", this.myStatus);
    this.navCtrl.pop();

  }
//get review
  ionViewWillEnter(){
    this.storage.get("Status")
    .then((data) => {
      this.myStatus = data;
    })
    .catch((err) => {
      console.log(err);
    })

  }

}
