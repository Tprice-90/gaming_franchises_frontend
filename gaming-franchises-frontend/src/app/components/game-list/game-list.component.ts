import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/helper/game-interface';
import { GameServiceService } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  gameList: Game[];

  constructor(private gameService: GameServiceService) {
    this.gameList = [];
   }

  ngOnInit(): void {
    this.gameService.getAll().subscribe(game => {
      this.gameList = game;
      console.log(`New list of games:`, this.gameList);
    });
  }

  addGameToList(): void {
    this.gameService.getAll().subscribe(gameArray => this.gameList = gameArray)
  }

}
