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
  // Define Game object
  newGame: Game = {
    id: undefined, title: '', description: '', creator: '', imgURL: '', type: '' 
  };
  //tempTags: string = '';

  constructor(private gameService: GameServiceService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openGameDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.panelClass = 'custom-dialog';
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = "300px";
    dialogConfig.data = {
      id: this.newGame.id,
      title: this.newGame.title,
      description: this.newGame.description,
      creator: this.newGame.creator,
      type: this.newGame.type,
      // tags: this.newGame.tags
    }
    
    const dialogRef = this.dialog.open(GameDialogBoxComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if(data) {
        this.gameService.create(data).subscribe();
        this.gameService.addGameToList(data);
      }
      else {
        return;
      }
    });
  }
}
