import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseURL: string = "https://api.themoviedb.org/3/search/movie?api_key=1bb15929878554efc3fde2e1f9fdbc1f&language=en-US\
  &page=1&include_adult=false&query=";

  private movies: any[]

  constructor(private http: HttpClient) { }

  //Movie
  //http://api.themoviedb.org/3/movie/550/casts?api_key=1bb15929878554efc3fde2e1f9fdbc1f

  searchMovie(movieTitle: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL + movieTitle);
  }
}

