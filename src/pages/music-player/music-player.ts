import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MusicPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-music-player',
  templateUrl: 'music-player.html',
})
export class MusicPlayerPage {
  public music = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.music = this.navParams.get('music');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicPlayerPage');
   
  }

  stopMusic(){

  }

  playMusic(){
    
  }

  pauseMusic(){
    
  }

}
