import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MovieProvider} from '../../providers/movie/movie';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',

})
export class WeatherPage {
  movies:any[]=[];  
  testRadioOpen: boolean;
  testRadioResult;
  constructor(public navCtrl: NavController, public navParams: NavParams,private mp:MovieProvider, public alerCtrl: AlertController) {
  }
  // radio options to choose what genre of movies to view
  doRadio(){
    let alert = this.alerCtrl.create();
    alert.setTitle('Favourite genre?');
    //love
    alert.addInput({
      type: 'radio',
      label: 'Love',
      value: 'love',
    });
    //war
    alert.addInput({
      type: 'radio',
      label: 'War',
      value: 'war'
    });
    //sad
      alert.addInput({
      type: 'radio',
      label: 'Sad',
      value: 'sad'
    });
    //action
    alert.addInput({
      type: 'radio',
      label: 'Action',
      value: 'action'
    });
    //adventure
    alert.addInput({
      type: 'radio',
      label: 'Adventure',
      value: 'adventure'
    });

      //buttons added
      alert.addButton('Cancel');
      alert.addButton({
        text: 'Ok',
        handler: data => {
          console.log('Radio data:', data);
          this.testRadioOpen = false;
          this.testRadioResult = data;
          //if statements for which result will be chosen
          if (data == "war"){
            this.mp.GetMovieDataWar().subscribe(data =>
              {
                  this.movies = data.Search;
              })
          }
          else if (data == "sad"){
            this.mp.GetMovieDataSad().subscribe(data =>
              {
                  this.movies = data.Search;
              })
          }
          else if (data == "action"){
            this.mp.GetMovieDataAction().subscribe(data =>
              {
                  this.movies = data.Search;
              })
          }
          else if(data == "love"){
            this.mp.GetMovieDataLove().subscribe(data =>
              {
                  this.movies = data.Search;
              })
          }
          else if(data == "adventure"){
            this.mp.GetMovieDataAdventure().subscribe(data =>
              {
                  this.movies = data.Search;
              })
          }
        }
      });
      alert.present().then(() => {
       this.testRadioOpen = true;
      });
  }//radio
  
}

