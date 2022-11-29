import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { Game } from '../helper/game-interface';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  gameURL = 'http://localhost:3000/games';
  private httpOptions = {
    headers: new HttpHeaders({'content-type' : 'application/json'}),
    observe: 'body',
    responseType: 'json'
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  constructor(private http: HttpClient) { }

  // Return a single <Game> object by ID
  getSingleGame(idIndex: number): Observable<Game> {
    return this.http.get<Game>(`${this.gameURL}/${idIndex}`).pipe(catchError(this.handleError));
  }
}
