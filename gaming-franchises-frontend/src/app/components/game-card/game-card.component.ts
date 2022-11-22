import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/helper/game-interface';
import { GameServiceService } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() game?: Game;
  singleGame?: Game;
  constructor(private gameService: GameServiceService) { 
    this.singleGame;
  }

  ngOnInit(): void {
    this.gameService.getSingleGame(1).subscribe(game => {
      this.singleGame = game;
    });
  }

}
