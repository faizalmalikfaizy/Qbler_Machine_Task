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

  idTitle: string = ''
  MovieDetails: any[] = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idTitle = params['id'];
      console.log("idTitle=", this.idTitle)
    })

    this.Service.MovieDetails(this.idTitle).subscribe((response: any) => {
      console.log("response :", response);
      if (response) {
        var Deatils = response
        this.MovieDetails.push(Deatils)
        console.log("Movie Deatils :", this.MovieDetails);
      }
    });
  }

}
