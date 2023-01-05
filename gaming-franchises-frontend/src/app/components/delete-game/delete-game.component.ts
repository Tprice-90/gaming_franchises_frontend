import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/helper/game-interface';
import { GameServiceService } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-delete-game',
  templateUrl: './delete-game.component.html',
  styleUrls: ['./delete-game.component.scss']
})
export class DeleteGameComponent implements OnInit {
  @Input() game?: Game;
  @Output() deleteGameEvent: EventEmitter<Game> = new EventEmitter<Game>;

  gameID!: number;
  constructor(private gameService: GameServiceService) {
   }

  ngOnInit(): void {
    this.gameID = this.game?.id!;
    console.log(this.gameID);
  }

  // Delete game function
  deleteGame(id: number) {
    this.gameService.delete(id).subscribe((deleteGameFromServer) => {
      this.deleteGameEvent.emit(deleteGameFromServer);
    });
  }
}
