import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { UpdateGameComponent } from './components/update-game/update-game.component';
import { AddGameComponent } from './components/add-game/add-game.component';
import { DeleteGameComponent } from './components/delete-game/delete-game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameCardComponent,
    GameDetailComponent,
    UpdateGameComponent,
    AddGameComponent,
    DeleteGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
