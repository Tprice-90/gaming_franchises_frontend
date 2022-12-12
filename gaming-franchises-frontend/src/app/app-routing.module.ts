import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GameListComponent } from './components/game-list/game-list.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/games",
    pathMatch: "full"
  },
  {
    path: "games",
    component: GameListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
