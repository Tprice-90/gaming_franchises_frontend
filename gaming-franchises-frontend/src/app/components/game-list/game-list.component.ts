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
  singleGame: Game[];

  constructor(private gameService: GameServiceService) {
    this.gameList = [];
    this.singleGame = [];
   }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(game => {
      this.gameList = game;
      console.log(game);
      console.log(`New list of games:`, this.gameList);
    });
  }

}
