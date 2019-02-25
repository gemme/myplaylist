import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

type Response = {
  results: {
    artistmatches: {
      artist: Array<Artist>
    }
  }
}

type Artist = {
  name: string,
  url: string
}
@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private API_KEY = environment.API_KEY;
  private API_URL = environment.API_URL;

  //DI
  constructor( private http: HttpClient ) { }

  searchArtists(artist){
    const SEARCH_URL = `${this.API_URL}method=artist.search&artist=${artist}&api_key=${this.API_KEY}&format=json`;
    return this.http
      .get<Response>(SEARCH_URL)
      .pipe(
        map(response => {
          return response.results.artistmatches.artist;
        })
      ).toPromise();
  }

  getDetails(artist) {
    const URL = `http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=${artist}&api_key=${this.API_KEY}&format=json`;
    return this.http
      .get(URL)
      .toPromise();
  }
}
