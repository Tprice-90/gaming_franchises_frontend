import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Game } from 'src/app/helper/game-interface';
import { GameServiceService } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-delete-game',
  templateUrl: './delete-game.component.html',
  styleUrls: ['./delete-game.component.scss']
})
export class DeleteGameComponent implements OnInit {
  @ViewChild('callDeleteDialog') callDeleteDialog?: TemplateRef<any>;
  @Input() game?: Game;

  gameID!: number;
  constructor(private gameService: GameServiceService, private dialog: MatDialog) { 
  }

  ngOnInit(): void {
    this.gameID = this.game?.id!;
    console.log(this.gameID);
  }

  // Open Delete Dialog Confirmation
  deleteDialog() {
    let dialogRef = this.dialog.open(this.callDeleteDialog!);
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (result === 'yes') {
          this.deleteGame(this.gameID);
        }
        if (result === 'no') {
          return;
        }
      }
    })
  }

  // Delete game function
  deleteGame(id: number) {
    this.gameService.delete(id).subscribe();
    this.gameService.deleteGameFromList(id);
  }
}
