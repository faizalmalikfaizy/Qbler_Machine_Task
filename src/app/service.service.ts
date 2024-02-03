import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private ApiBaseUrl: string = 'https://www.omdbapi.com/';
  private ApiBaseKey: string = 'a0180714';

  constructor(private http: HttpClient) { }

  SearchMovies(title: string) {
    return this.http.get(`${this.ApiBaseUrl}?s=${title}&apikey=${this.ApiBaseKey}`);
  }

  MovieDetails(titleNmae: string) {
    return this.http.get(`${this.ApiBaseUrl}?t=${titleNmae}&apikey=${this.ApiBaseKey}`);
  }

  DetailsMovie(titleNmae: string) {
    return this.http.get(`${this.ApiBaseUrl}?i=${titleNmae}&apikey=${this.ApiBaseKey}`);
  }

}
