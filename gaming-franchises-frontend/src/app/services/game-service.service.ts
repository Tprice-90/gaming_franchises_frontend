import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Game } from '../helper/game-interface';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  gameURL = 'http://127.0.0.1/api/games';
  private httpOptions = {
    headers: new HttpHeaders({'Content-type' : 'application/json'})
  }

  constructor(private http: HttpClient) { }

  // Return a single <Game> object by ID
  getSingleGame(idIndex: number): Observable<Game> {
    return this.http.get<Game>(`${this.gameURL}/${idIndex}`);
  }
}
