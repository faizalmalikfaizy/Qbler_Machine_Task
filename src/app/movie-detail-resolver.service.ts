import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailResolverService implements Resolve<any> {

  constructor(private Service: ServiceService) { }

  ID: any

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    this.ID = route.paramMap.get('imdbID');
    return this.Service.DetailsMovie(this.ID);
  }
}
