import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  private baseURL: string = "https://api.themoviedb.org/3/movie/"
  private endPoint: string = "/credits?api_key=1bb15929878554efc3fde2e1f9fdbc1f&language=en-US";

  constructor(private http: HttpClient) { }

  // Cast
  // https://api.themoviedb.org/3/movie/550/credits?api_key=1bb15929878554efc3fde2e1f9fdbc1f&language=en-US

  searchCast(movieId: string): Observable<any> {
    return this.http.get<any>(this.baseURL+movieId+this.endPoint);
  }
}
