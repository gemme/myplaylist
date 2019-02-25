import { Component, OnInit } from '@angular/core';
import { ArtistService } from './artist.service';

type Artist = {
  name: string,
  url: string
}


@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {


  public artist:string = null;
  public artists:Array<Artist> = null;

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
  }

  getArtists() {
    this.artistService.searchArtists(this.artist)
      .then((response: Array<Artist>) => {
        this.artists = response;
      })
  }

}
