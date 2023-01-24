import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from 'src/app/helper/game-interface';
import { GameServiceService } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games$!: BehaviorSubject<Game[]>;

  constructor(private gameService: GameServiceService) {
   }

  ngOnInit(): void {
    this.games$ = this.gameService.gameList$;
  }

}
