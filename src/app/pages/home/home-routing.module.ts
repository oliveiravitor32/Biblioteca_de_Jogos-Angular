import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { InitialApresentationComponent } from './initial-apresentation/initial-apresentation.component';
import { SearchGamesComponent } from './search-games/search-games.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: InitialApresentationComponent,
      },
      {
        path: 'search',
        component: SearchGamesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
