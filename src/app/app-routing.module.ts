import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetailResolverService } from './movie-detail-resolver.service';

const routes: Routes = [
  { path: '', component: SearchMovieComponent },
  {
    path: 'Movie-Details/:imdbID', component: MovieDetailsComponent,
    resolve: {
      movieDetails: MovieDetailResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
