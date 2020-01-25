import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie';

@Component({
  selector: 'movie-list-el',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies$ : Observable<Movie[]>
  constructor(private movieService : MovieService) { }

  ngOnInit() {
    this.movies$ = this.movieService.getMovies()
  }


  logSelection(movie  :  Movie, like: boolean = false){
    console.log(movie.id)
    this.movieService.logStats(movie.id, like)
  }


}
