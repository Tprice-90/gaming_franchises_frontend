import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game } from 'src/app/helper/game-interface';

@Component({
  selector: 'app-game-dialog-box',
  templateUrl: './game-dialog-box.component.html',
  styleUrls: ['./game-dialog-box.component.scss']
})
export class GameDialogBoxComponent implements OnInit {

  // declare newGame variable and control type
  newGame: Game = {
    title: '', description: '', creator: '', imgURL: '', type: '' 
  };
  tempId: string = '';
  tempTags: string = '';

  constructor(public dialogRef: MatDialogRef<GameDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Game) { }

  ngOnInit(): void {
  }

  // Add game content from child component
  addGameFromChild(): void {
    this.newGame.tags = this.tempTags.split(',');
    this.dialogRef.close(this.newGame);
  }

  // Closing the dialog box
  onNoClick(): void {
    this.dialogRef.close();
  }
}
