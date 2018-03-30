import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { MusicProvider } from '../../providers/music/music';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public allMusic = [];
  constructor(public navCtrl: NavController, private loadingController: LoadingController, private musicProvider: MusicProvider) {

  }

  ionViewDidLoad() {
    let allMusicLoadingController = this.loadingController.create({
      content: "Getting your Music from server",
      duration: 15000,
      spinner: 'crescent'

    });
    allMusicLoadingController.present();
    this.musicProvider.getMusic()
      .subscribe((musicList) => {
        allMusicLoadingController.dismiss()
        console.log(musicList);
        this.allMusic = musicList
      });
  }

  addOneSong(refresher) {
    console.log("inside add One song")
    this.musicProvider.getOneSong()
      .subscribe((oneSong) => {
        this.allMusic.unshift(oneSong[0])
        refresher.complete();
      });
    }
}
