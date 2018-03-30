import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MusicProvider } from '../../providers/music/music';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public allMusic = [];
  constructor(public navCtrl: NavController, private musicProvider: MusicProvider) {

  }

  ionViewDidLoad() {
    this.musicProvider.getMusic()
      .subscribe(musicList => this.allMusic = musicList)
  }

}
