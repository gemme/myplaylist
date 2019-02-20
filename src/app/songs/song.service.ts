import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


type Track = {
  artist: string,
  name: string,
  url: string,
}
@Injectable({
  providedIn: 'root'
})
export class SongService {

  public songs:Array<Track> = null;
  private API_KEY = '7cc2122f78c55e48c3fe8b33a16b5ef8';

  constructor(private http: HttpClient) {}

  searchSong(song) {
    const API_URL = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${song}&api_key=${this.API_KEY}&format=json`;
    return this.http.get(API_URL)
             .pipe(
               map(response => response.results.trackmatches.track)
              ).toPromise();
  }

  getSongs() {
    return this.songs = [{
      artist: 'Nirvana',
      name: 'Teens like spirit',
      url: 'https://www.last.fm/music/Nirvana/_/Smells+Like+Teen+Spirit'
    }];
  }
}
