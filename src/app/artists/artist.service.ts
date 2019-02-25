import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


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

  private API_KEY = '7cc2122f78c55e48c3fe8b33a16b5ef8';

  //DI
  constructor( private http: HttpClient ) { }

  searchArtists(artist){
    const URL = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artist}&api_key=${this.API_KEY}&format=json`;
    return this.http
      .get<Response>(URL)
      .pipe(
        map(response => {
          return response.results.artistmatches.artist;
        })
      ).toPromise();
  }
}
