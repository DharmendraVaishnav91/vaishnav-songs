import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  songsList:Array<any>;
  constructor(public navCtrl: NavController,private dataProvider:DataProvider) {
    this.fetchSongList();
    //this.songsList=[{name:'Anadi karmfale'},{name:"Ami to durjan"} ,{name: "Amar Jivana"}];
  }

  fetchSongList(){
    this.dataProvider.getSongList().subscribe((data)=>{
      this.songsList=data.songList;
    })
  }

  onInput(event){

  }
}
