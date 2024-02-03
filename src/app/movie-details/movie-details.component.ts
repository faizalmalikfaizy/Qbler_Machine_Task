import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private Service: ServiceService, private route: ActivatedRoute) { }

  // idTitle: any
  MovieDetails: any[] = [];
  Details : any

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   // this.idTitle = params['id'];
    //   this.idTitle = params.idTitle
    // })

    // this.Service.MovieDetails(this.idTitle).subscribe((response: any) => {
    //   if (response) {
    //     var Deatils = response
    //     this.MovieDetails.push(Deatils)
    //   }
    // });
    this.Details = this.route.snapshot.data['movieDetails'];
    this.MovieDetails.push(this.Details)
  }

}
