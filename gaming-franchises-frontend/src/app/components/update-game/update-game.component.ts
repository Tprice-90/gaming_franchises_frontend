import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/helper/game-interface';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.scss']
})
export class UpdateGameComponent implements OnInit {
  // Output to update game
  

  constructor() { }

  ngOnInit(): void {
  }

}
