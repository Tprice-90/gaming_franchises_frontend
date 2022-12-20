import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game } from 'src/app/helper/game-interface';
import { GameServiceService } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-game-dialog-box',
  templateUrl: './game-dialog-box.component.html',
  styleUrls: ['./game-dialog-box.component.scss']
})
export class GameDialogBoxComponent implements OnInit {

  // declare newGame variable and control type
  newGame: Game = {
    id: this.data.id, 
    title: this.data.title, 
    description: this.data.description, 
    creator: this.data.creator, 
    imgURL: this.data.imgURL, 
    type: this.data.type 
  };
  tempId: string = '';
  //tempTags: string = '';

  constructor(public dialogRef: MatDialogRef<GameDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Game) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  // Add game content from child component and convert tag input to array
  addGameFromChild(): void {
    //this.newGame.tags = this.tempTags.split(',');
    this.dialogRef.close(this.newGame);
  }

  // Update game with injected data
  updateGameFromChild() {
    this.dialogRef.close(this.newGame);
  }

  // Closing the dialog box
  onNoClick(): void {
    this.dialogRef.close();
  }
}
