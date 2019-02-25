import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';


type Track = {
  artist: string,
  name: string,
  url: string,
}

type Response = {
  results: {
    trackmatches: {
      track: Array<Track>
    }
  }
}
@Injectable({
  providedIn: 'root'
})
export class SongService {

  public songs:Array<Track> = null;
  private API_KEY = environment.API_KEY;
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  searchSong(song) {
    const SEARCH_URL = `${this.API_URL}method=track.search&track=${song}&api_key=${this.API_KEY}&format=json`;
    return this.http.get<Response>(SEARCH_URL)
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
