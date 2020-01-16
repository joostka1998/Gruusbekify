export class SchlagerModel {
  id: number;
  title: string;
  artist: string;
  audioLocation: string;

  constructor (id: number, title: string, artist: string, audioLocation: string) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.audioLocation = audioLocation;
  }

}
