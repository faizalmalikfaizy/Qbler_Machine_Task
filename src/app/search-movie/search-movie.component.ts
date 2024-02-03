import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  constructor(private Service: ServiceService, private router: Router) { }

  search_movie_name: string = '';
  movieData: any[] = [];
  ErrorMessage: string = ''

  SearchMoviesName() {

    this.movieData = [];

    if (this.search_movie_name.trim() === '') {
      this.movieData = [];
      return;
    }
    this.Service.SearchMovies(this.search_movie_name).subscribe((response: any) => {
      if (response) {
        this.movieData = response?.Search
      }
    });
  }

  ngOnInit(): void {}

}
