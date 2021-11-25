import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesSService {

  constructor(
    private http: HttpClient ) { }

    url = 'https://imdb-api.com/en/API/'

  getAllMovies$ = this.http.get<any>(`${this.url}Top250Movies/k_na9kvnjg`);
  getComingSoonMovies$ = this.http.get<any>(`${this.url}ComingSoon/k_na9kvnjg`);
  getInTheaterMovies$ = this.http.get<any>(`${this.url}InTheaters/k_na9kvnjg`);
  
}
