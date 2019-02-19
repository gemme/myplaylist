import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';

import {SongService} from './songs/song.service';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
