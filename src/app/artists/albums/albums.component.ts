import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlbumService } from './album.service';

type Album = {

};

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit,OnDestroy {

  private subscription: Subscription = null;
  public artistName: string = null;
  public albums:Array<Album> = null;
  public error: string = null;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      const { artist } = params;
      this.artistName = artist;
      this.getAlbums(artist);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getAlbums(artist) {
    this.albumService
      .getAlbums(artist)
      .then((response: Array<Album>) => this.albums = response)
      .catch(error => {
        console.error('getAlbums:error', error);
        this.error = error;
      });
  }

}
