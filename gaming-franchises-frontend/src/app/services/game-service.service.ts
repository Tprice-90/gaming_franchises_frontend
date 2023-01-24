import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { Game } from '../helper/game-interface';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  gameList$ = new BehaviorSubject<Game[]>([]);

  gameURL = 'http://localhost:3000/games';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
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
  // BehaviorSubject Actions
  // Get Behavior Subject list
  getAllGames(): Game[] {
    return this.gameList$.getValue();
  }

  // Get Single game from Behavior Subject
  getSingleGame(id: number): Game | any {
    const currentGameList: Game[] = this.getAllGames();
    if (currentGameList.length === 0) {
      return null;
    }

    const gameIndex = currentGameList.findIndex((e) => {
      return e.id === id;
    });
    return (gameIndex >= 0 && currentGameList[gameIndex]) ? currentGameList[gameIndex] : null;
  }

  // Add Game item to Behavior Subject
  addGameToList(game: Game): void {
    const currentGameList: Game[] = this.getAllGames();
    currentGameList.push(game);
    this.gameList$.next(currentGameList)
  }

  // Update Game in Behavior Subject List
  updateGameInList(id: number, game: Game): boolean {
    const currentGameList: Game[] = this.getAllGames();
    if (currentGameList.length > 0) {
      const gameIndex = currentGameList.findIndex((e) => {
        return e.id === id;
      });
      if (gameIndex >= 0) {
        currentGameList[gameIndex] = game;
        this.gameList$.next(currentGameList);
        return true;
      }
    }
    return false;
  }

  // Delete Game from Behavior Subject
  deleteGameFromList(id: number): boolean {
    const currentGameList: Game[] = this.getAllGames();
    if (currentGameList.length > 0) {
      const gameIndex = currentGameList.findIndex((e) => {
        return e.id === id;
      });
      if (gameIndex >= 0) {
        currentGameList.splice(gameIndex, 1);
        this.gameList$.next(currentGameList);
        return true;
      }
    }
    return false;
  }

  // API CRUD
  // Return all <Game> objects
  getAll(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gameURL).pipe(
      tap((games) => {if (games) {this.gameList$.next(games);}})
    );
  }

  // Return a single <Game> object by ID
  get(idIndex: number): Observable<Game> {
    return this.http.get<Game>(`${this.gameURL}/${idIndex}`).pipe(catchError(this.handleError));
  }

  // Add game to database
  create(newGameObject: Game): Observable<Game> {
    return this.http.post<Game>(this.gameURL, newGameObject, this.httpOptions);
  }

  // Update game in database
  update(gameID: number, gameObject: Game): Observable<Game> {
    return this.http.put<Game>(`${this.gameURL}/${gameID}`, gameObject, this.httpOptions);
  }

  // Delete game in database
  delete(gameID: number): Observable<Game> {
    return this.http.delete<Game>(`${this.gameURL}/${gameID}`, this.httpOptions);
  }
}
