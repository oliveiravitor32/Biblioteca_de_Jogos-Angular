import { SharedComponesModule } from './../../components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameDetailsRoutingModule } from './game-details-routing.module';
import { GameDetailsComponent } from './game-details.component';
import { SharedDirectivesModule } from '../../directives/shared-directives.module';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [GameDetailsComponent, CarouselComponent],
  imports: [
    CommonModule,
    GameDetailsRoutingModule,
    SharedComponesModule,
    SharedDirectivesModule,
  ],
})
export class GameDetailsModule {}
