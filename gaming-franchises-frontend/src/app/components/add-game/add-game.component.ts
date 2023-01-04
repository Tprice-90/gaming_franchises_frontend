import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Game } from 'src/app/helper/game-interface';
import { GameServiceService } from 'src/app/services/game-service.service';
import { GameDialogBoxComponent } from '../game-dialog-box/game-dialog-box.component';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {

  // Event Emitter to send game data
  @Output() newGameEvent: EventEmitter<Game> = new EventEmitter<Game>();

  // Define Game object
  newGame: Game = {
    title: '', description: '', creator: '', imgURL: '', type: '' 
  };
  tempId: string = '';
  //tempTags: string = '';

  @Input() id: string = '';

  constructor(private gameService: GameServiceService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openGameDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = "300px";
    dialogConfig.data = {
      id: this.id,
      title: this.newGame.title,
      description: this.newGame.description,
      creator: this.newGame.creator,
      type: this.newGame.type,
      // tags: this.newGame.tags
    }
    
    const dialogRef = this.dialog.open(GameDialogBoxComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if(data) {
        this.gameService.create(data).subscribe((newGameFromServer) => {
          this.newGameEvent.emit(newGameFromServer);
          console.log(data);
        });
      }
      else {
        return;
      }
    });
  }
}
