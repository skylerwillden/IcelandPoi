import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieService } from './services/movie.service';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { routes } from './routes';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieListItemComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
