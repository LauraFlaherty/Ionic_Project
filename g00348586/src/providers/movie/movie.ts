import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  //to get the love api
  GetMovieDataLove():Observable<any>{
    return this.http.get('http://www.omdbapi.com/?i=tt3896198&apikey=2d196cea&s=love');
  }
  //to get the war api 
  GetMovieDataWar():Observable<any>{
    return this.http.get('http://www.omdbapi.com/?i=tt3896198&apikey=2d196cea&s=war');
  }
  //to get the sad api 
  GetMovieDataSad():Observable<any>{
    return this.http.get('http://www.omdbapi.com/?i=tt3896198&apikey=2d196cea&s=sad');
  }
  //to get the action
  GetMovieDataAction():Observable<any>{
    return this.http.get('http://www.omdbapi.com/?i=tt3896198&apikey=2d196cea&s=action');
  }
  GetMovieDataAdventure():Observable<any>{
    return this.http.get('http://www.omdbapi.com/?i=tt3896198&apikey=2d196cea&s=adventure');
  }
}
