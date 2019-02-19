import { Component, OnInit } from '@angular/core';
import { SongService } from './song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  // instance variables
  public songs:Array<object> = null;

  constructor(private songService:SongService) {}

  ngOnInit() {
    this.songs = this.songService.getSongs();
  }

}
