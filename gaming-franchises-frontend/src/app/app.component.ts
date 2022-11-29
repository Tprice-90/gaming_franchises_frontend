import { Component, Input } from '@angular/core';
import { GameCardComponent } from './components/game-card/game-card.component';
import { Game } from './helper/game-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() game?: Game
  title = 'gaming-franchises-frontend';
}
