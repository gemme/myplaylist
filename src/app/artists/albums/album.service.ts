import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

type Response = {
  topalbums: {
    album: Album
  }
};

type Album = {

}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private API_KEY = environment.API_KEY;
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getAlbums(artist){
    const ALBUMS_URL = `${this.API_URL}method=artist.gettopalbums&artist=${artist}&api_key=${this.API_KEY}&format=json`;
    return this.http
      .get(ALBUMS_URL)
      .pipe(
        map((response: Response) => response.topalbums.album)
      )
      .toPromise();
  }
}
