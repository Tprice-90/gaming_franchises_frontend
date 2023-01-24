import { Component, OnInit } from '@angular/core';
import { GameServiceService } from './services/game-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gaming-franchises-frontend';

  constructor(private gameService: GameServiceService) {}

  ngOnInit() {
    this.gameService.getAll().subscribe();
  }
}
