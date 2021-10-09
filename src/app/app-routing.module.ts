import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { FifthComponent } from './games/introduction/fifth/fifth.component';
import { FirstComponent } from './games/introduction/first/first.component';
import { FourthComponent } from './games/introduction/fourth/fourth.component';
import { SecondComponent } from './games/introduction/second/second.component';
import { ThirdComponent } from './games/introduction/third/third.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'games', component: GamesComponent },
  { path: 'games/introduction/first', component: FirstComponent },
  { path: 'games/introduction/second', component: SecondComponent },
  { path: 'games/introduction/third', component: ThirdComponent },
  { path: 'games/introduction/fourth', component: FourthComponent },
  { path: 'games/introduction/fifth', component: FifthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
