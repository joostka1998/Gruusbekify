import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'empty';
  audioIsPlaying;
  audioPlayer;
  list = [// {
    //   id = 1,
    //   title = '';
    // artist = '';
    // audioLocation =
    'https://gruusbek.nl/wp-content/uploads/2019/12/CV_Now_Da_Wer-_-_Mot_Now_Van_Huus-Gruusbek.nl_.mp3'
  ];
// }
//
// ,
// {
//   id = 1,
//     title = '';
//   artist = '';
//   audioLocation = 'https://gruusbek.nl/wp-content/uploads/2020/01/Dur_t_Dolle_Hin_-_Gruusbekse_beej_mekoar-Gruusbek.nl_.mp3';
// }
// ,
// {
//   id = 1,
//     title = '';
//   artist = '';
//   audioLocation = 'https://gruusbek.nl/wp-content/uploads/2019/12/CV_Duut_Daa_Noow_-_Scootie_Angels-Gruusbek.nl_.mp3';
// }
// ]

  constructor() {
    this.audioIsPlaying = false;
    this.audioPlayer = document.getElementById('audioPlayer');
    // this.audioPlayer.src = this.list[1];
  }

  ngOnInit() {
  }

  playlist_togglePlayPause() {
    this.audioPlayer = document.getElementById('audioPlayer');
    if (this.audioIsPlaying === false) {
      this.audioPlayer.play();
    } else if (this.audioIsPlaying === true) {
      this.audioPlayer.pause();
    }
    this.audioIsPlaying = !this.audioIsPlaying;
  }

  playlist_prevTrack() {
    this.audioPlayer = document.getElementById('audioPlayer');
    this.audioPlayer.src = this.list[1];
    this.audioPlayer.play();
  }

  playlist_nextTrack() {
    this.audioPlayer = document.getElementById('audioPlayer');
    this.audioPlayer.src = this.list[2];
    this.audioPlayer.play();
  }

}
