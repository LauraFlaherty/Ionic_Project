import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HolidayDestPage } from '../pages/holiday-dest/holiday-dest';
import { IndoorPage } from '../pages/indoor/indoor';
import { WeatherPage } from '../pages/weather/weather';
import { MovieProvider } from '../providers/movie/movie';
import { Flashlight } from '@ionic-native/flashlight';
import { Vibration } from '@ionic-native/vibration';
import { FormsModule } from '@angular/forms'; 
import { IonicStorageModule } from '@ionic/storage';
import { StatusPage } from '../pages/status/status';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HolidayDestPage, 
    IndoorPage, 
    WeatherPage,
    StatusPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    FormsModule,  
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
    ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HolidayDestPage, 
    IndoorPage, 
    WeatherPage,
    StatusPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider,
    Flashlight,
    Vibration,
    Storage
  ]
})
export class AppModule {}
