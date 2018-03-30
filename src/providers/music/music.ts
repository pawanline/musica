// default from provider import { HttpClient } from '@angular/common/http';

import {Http} from '@angular/http' //http service from angular
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

/*
  Generated class for the MusicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const API:string = "https://orangeValleycaa.org/api/music";
@Injectable()
export class MusicProvider {

  public favouritesSongs = [];
  constructor(public http: Http) {
    console.log('Hello MusicProvider Provider');
  }

  getMusic(){
    return this.http.get(API)
    .map(response=>response.json());
  }
  
getOneSong(){
  let oneSongUrl = API;
  return this.http.get(oneSongUrl)
  .map(respone=>respone.json())
} 


getFavourites(){
  return this.favouritesSongs;
}

addToFavourites(song){
let isSongAdded = this.favouritesSongs.findIndex((favouriteSong) => {
return song.id === favouriteSong.id
});

if (isSongAdded === -1){
  this.favouritesSongs.push(song);
}
}


}
