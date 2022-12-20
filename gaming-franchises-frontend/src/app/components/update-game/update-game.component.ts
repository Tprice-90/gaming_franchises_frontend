import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Game } from 'src/app/helper/game-interface';
import { GameServiceService } from 'src/app/services/game-service.service';
import { GameDialogBoxComponent } from '../game-dialog-box/game-dialog-box.component';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.scss']
})
export class UpdateGameComponent implements OnInit {
  // Output to update game
  @Input() game?: Game;

  currentGame: Game = {
    id: this.game?.id,
    title: this.game?.title!,
    description: this.game?.description!,
    creator: this.game?.creator!,
    imgURL: this.game?.imgURL,
    type: this.game?.type
  }

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(`Update game: ${this.game?.title}`)
  }

  openGameDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = "300px";
    dialogConfig.data = {
      id: this.game?.id,
      title: this.game?.title,
      description: this.game?.description,
      creator: this.game?.creator,
      imgURL: this.game?.imgURL,
      type: this.game?.type,
      // tags: this.newGame.tags
    }
    
    const dialogRef = this.dialog.open(GameDialogBoxComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
        console.log(data);
    });
  }

}
