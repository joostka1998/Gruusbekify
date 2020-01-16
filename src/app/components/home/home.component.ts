import {Component, OnInit} from '@angular/core';
import {SchlagerModel} from '../../models/SchlagerModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'empty';
  audioIsPlaying;
  audioPlayer;
  currentyPlaying;
  list: Array<SchlagerModel> = [
    new SchlagerModel(
      0,
      'Mot Now Van Huus',
      'CV Now Da Wer',
    'https://gruusbek.nl/wp-content/uploads/2019/12/CV_Now_Da_Wer-_-_Mot_Now_Van_Huus-Gruusbek.nl_.mp3'),
    new SchlagerModel(
      1,
      'Gruusbekse beej mekoar',
      'Dur \'t Dolle Hin',
      'https://gruusbek.nl/wp-content/uploads/2020/01/Dur_t_Dolle_Hin_-_Gruusbekse_beej_mekoar-Gruusbek.nl_.mp3',
      'https://gruusbek.nl/wp-content/uploads/2020/01/Dur_t_Dolle_Hin_-_Gruusbekse_beej_mekoar-Gruusbek-nl_-mp3-image-80x80.jpg'),
    new SchlagerModel(
      2,
      'Scootie Angels',
      'CV Duut Daa Noow',
      'https://gruusbek.nl/wp-content/uploads/2019/12/CV_Duut_Daa_Noow_-_Scootie_Angels-Gruusbek.nl_.mp3')
    ];

  constructor() {
    this.audioIsPlaying = false;
    this.audioPlayer = document.getElementById('audioPlayer');
  }

  ngOnInit() {
  }

  playlist_togglePlayPause() {
    this.audioPlayer = document.getElementById('audioPlayer');

    if (this.audioPlayer.src === '') {
      this.currentyPlaying = this.list[0].id;
      this.audioPlayer.src = this.list[0].audioLocation;
    }

    if (this.audioIsPlaying === false) {
      this.title = this.list[this.currentyPlaying].title;
      this.audioPlayer.play();
    } else if (this.audioIsPlaying === true) {
      this.audioPlayer.pause();
    }
    this.audioIsPlaying = !this.audioIsPlaying;
  }

  playlist_prevTrack() {
    this.audioPlayer = document.getElementById('audioPlayer');

    if (this.currentyPlaying === 0) {
      this.currentyPlaying = this.list.length - 1;
      this.audioPlayer.src = this.list[this.list.length - 1].audioLocation;
    } else {
      this.currentyPlaying = this.currentyPlaying - 1;
      this.audioPlayer.src = this.list[this.currentyPlaying].audioLocation;
    }
    this.title = this.list[this.currentyPlaying].title;
    this.audioPlayer.play();
  }

  playlist_nextTrack() {
    this.audioPlayer = document.getElementById('audioPlayer');
    if (this.currentyPlaying === this.list.length - 1) {
      this.currentyPlaying = 0;
      this.audioPlayer.src = this.list[0].audioLocation;
    } else {
      this.currentyPlaying = this.currentyPlaying + 1;
      this.audioPlayer.src = this.list[this.currentyPlaying].audioLocation;
    }
    this.title = this.list[this.currentyPlaying].title;
    this.audioPlayer.play();
  }

}
