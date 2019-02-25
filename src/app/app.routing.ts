import { RouterModule, Routes } from '@angular/router';
import { SongsComponent } from './songs/songs.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistDetailsComponent } from './artists/artist-details/artist-details.component';
import { AlbumsComponent } from './artists/albums/albums.component';

const APP_ROUTES: Routes = [
    { path: '', component: ArtistsComponent },
    { path: 'artist/:artist', component: ArtistDetailsComponent },
    { path: 'artist/:artist/albums', component: AlbumsComponent },
    { path: 'songs', component: SongsComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);