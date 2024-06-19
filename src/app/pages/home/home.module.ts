import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedComponentsModule } from '../../components/shared-components.module';
import { HomeComponent } from './home.component';
import { SharedMaterialModule } from '../../shared/shared-material/shared-material.module';
import { GameListCarouselComponent } from './game-list-carousel/game-list-carousel.component';

@NgModule({
  declarations: [HomeComponent, GameListCarouselComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedComponentsModule,
    SharedMaterialModule,
  ],
})
export class HomeModule {}
