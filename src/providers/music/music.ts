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

  constructor(public http: Http) {
    console.log('Hello MusicProvider Provider');
  }

  getMusic(){
    return this.http.get(API)
    .map(response=>response.json());
  }

}
