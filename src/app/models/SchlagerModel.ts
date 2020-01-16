export class SchlagerModel {
  id: number;
  title: string;
  artist: string;
  audioLocation: string;
  coverLocation: string;
  album: string;

  constructor (
    id: number,
    title: string,
    artist: string,
    audioLocation: string,
    coverLocation: string = 'No cover',
    album: string = 'No album') {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.audioLocation = audioLocation;
    this.coverLocation = coverLocation;
    this.album = album;
  }

}
