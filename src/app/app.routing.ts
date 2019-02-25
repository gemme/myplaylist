import { RouterModule, Routes } from '@angular/router';
import { SongsComponent } from './songs/songs.component';
import { ArtistsComponent } from './artists/artists.component';

const APP_ROUTES: Routes = [
    { path: '', component: ArtistsComponent },
    { path: 'songs', component: SongsComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);