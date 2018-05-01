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


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HolidayDestPage, 
    IndoorPage, 
    WeatherPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HolidayDestPage, 
    IndoorPage, 
    WeatherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider
  ]
})
export class AppModule {}
