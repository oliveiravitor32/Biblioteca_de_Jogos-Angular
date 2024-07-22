import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameDetailsRoutingModule } from './game-details-routing.module';
import { GameDetailsComponent } from './game-details.component';
import { SharedDirectivesModule } from '../../directives/shared-directives.module';
import { SharedComponentsModule } from './../../components/shared-components.module';
import { CarouselComponent } from './carousel/carousel.component';
import { SharedMaterialModule } from '../../shared/shared-material/shared-material.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [GameDetailsComponent, CarouselComponent],
  imports: [
    CommonModule,
    GameDetailsRoutingModule,
    SharedComponentsModule,
    SharedDirectivesModule,
    SharedMaterialModule,
    PipesModule
  ],
})
export class GameDetailsModule {}
