//https://ionicframework.com/docs/components/#searchbar

import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-indoor',
  templateUrl: 'indoor.html',
})
export class IndoorPage {
  items;
  
  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    console.log("Initialised");

    this.items = [
      'Kingsley Shacklebolt',
      'Minerva McGonagall',
      'Severus Snape',
      'Draco Malfoy',
      'Regulus Black',
      'Stan Shunpike',
      'Cassandra Trelawney',
      'Remus Lupin',
      'Bellatrix Lestrange',
      'Rubeus Hagrid',
      'Septima Vector',
      'Quirinus Quirrell',
      'Cedric Diggory',
      'Sirius Black',
      'Hermione Granger',
      'Katie Bell',
      'Bartemius Crouch',
      'Petunia Dursley',
      'Xenophilius Lovegood',
      'Igor Karkaroff',
      'Seamus Finnigan',
      'Fenrir Greyback',
      'Neville Longbottom',
      'Lucius Malfoy',
      'Lord Voldemort',
      'Fred Weasley',
      'Ron Weasley',
      'Harry Potter',
      'Cho Chang',
      'Firenze',
      'Romilda Vane',
      'Molly Weasley',
      'Winky',
      'Amelia Bones',
      'Terry Boot',
      'Lavender Brown',
      'Millicent Bulstrode',
      'Alecto Carrow',
      'Penelope Clearwater',
      'Vincent Crabbe',
      'Fleur Delacour',
      'Luna Lovegood'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}