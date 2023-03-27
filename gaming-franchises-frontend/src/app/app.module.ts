import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Routing Import
import { AppRoutingModule } from './app-routing.module';

// Component Imports
import { AppComponent } from './app.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { UpdateGameComponent } from './components/update-game/update-game.component';
import { AddGameComponent } from './components/add-game/add-game.component';
import { DeleteGameComponent } from './components/delete-game/delete-game.component';
import { GameDialogBoxComponent } from './components/game-dialog-box/game-dialog-box.component';

// Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameCardComponent,
    GameDetailComponent,
    UpdateGameComponent,
    AddGameComponent,
    DeleteGameComponent,
    GameDialogBoxComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
