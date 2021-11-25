import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MoviesSService } from 'src/app/movies-s.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private movieService: MoviesSService) { }

  loading1:BehaviorSubject<boolean> =  new BehaviorSubject(true);
  loading1$ = this.loading1.asObservable();

  loading2: BehaviorSubject<boolean> =  new BehaviorSubject(true);
  loading2$ = this.loading2.asObservable();

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  displayComingSoonMovies = ['title', 'year', 'genres', 'stars', 'releaseState', 'directors'];
  displayInTheaterSoonMovies = ['title', 'year', 'genres', 'stars', 'releaseState', 'directors'];

  public dataSource = new MatTableDataSource<any>();
  public dataSource2 = new MatTableDataSource<any>();

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  ngOnInit() {
    this.getComingSoonMovie();
    this.getInTheaterMovie();
  }

  getComingSoonMovie() {
    this.movieService.getComingSoonMovies$.pipe(takeUntil(this.destroyed$)).subscribe(
      reqObj => { this.dataSource.data = reqObj.items; this.loading1.next(false) }
    );
  }

  getInTheaterMovie() {
    this.movieService.getInTheaterMovies$.pipe(takeUntil(this.destroyed$)).subscribe(
      reqObj => { this.dataSource2.data = reqObj.items; this.loading2.next(false) }
    );
  }

  refreshComingSoon(){
    this.loading1.next(true);
    this.dataSource.data = [];
    this.getComingSoonMovie();
  }

  refreshTheaterMovie(){
    this.loading2.next(true);
    this.dataSource2.data = [];
    this.getInTheaterMovie();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete
  }


}
