import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { catchError, map, takeUntil } from 'rxjs/operators';
import { MoviesSService } from 'src/app/movies-s.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  moviesList$ = this.movieService.getAllMovies$.
  pipe(map(data => data.items), catchError(error => {return error}));

  constructor(private movieService: MoviesSService ) { }

  ngOnInit() {
  }

  
}
