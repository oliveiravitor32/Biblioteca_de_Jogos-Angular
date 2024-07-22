import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedComponentsModule } from '../../components/shared-components.module';
import { HomeComponent } from './home.component';
import { SharedMaterialModule } from '../../shared/shared-material/shared-material.module';
import { GameListCarouselComponent } from './initial-apresentation/game-list-carousel/game-list-carousel.component';
import { SearchGamesComponent } from './search-games/search-games.component';
import { InitialApresentationComponent } from './initial-apresentation/initial-apresentation.component';

@NgModule({
  declarations: [HomeComponent, GameListCarouselComponent, SearchGamesComponent, InitialApresentationComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedComponentsModule,
    SharedMaterialModule,
  ],
})
export class HomeModule {}
