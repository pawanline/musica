import { Component } from '@angular/core';
import { NavController, LoadingController,ActionSheetController } from 'ionic-angular';
import { MusicProvider } from '../../providers/music/music';
import { SocialSharing } from '@ionic-native/social-sharing'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public allMusic = [];
  constructor(private socialSharing:SocialSharing,public navCtrl: NavController, private loadingController: LoadingController,private actionSheetController:ActionSheetController, private musicProvider: MusicProvider) {

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

    shareSong(music){
      let shareSongActionSheet = this.actionSheetController.create({
        title:"Share Song With Friends",
        buttons:[
          {
            text:"Share On Facebook",
            icon:"logo-facebook",
            handler:()=>{
              this.socialSharing.shareViaFacebook(music.name,music.image,music.music_url);
            }
        },
        {
          text:"Share On Twitter",
          icon:"logo-twitter",
          handler:()=>{
            this.socialSharing.shareViaTwitter(music.name,music.image,music.music_url);
          }
        },
        {
          text:"Share",
          icon:"share",
          handler:()=>{
            this.socialSharing.share(music.name,"",music.image,music.image_url);
          }
        },
        {
          text:"cancel",
          role:"destructive"
        },

      ]
      });

      shareSongActionSheet.present(); 
    }
}
