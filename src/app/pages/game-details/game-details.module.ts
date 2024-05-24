import { SharedComponesModule } from './../../components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameDetailsRoutingModule } from './game-details-routing.module';
import { GameDetailsComponent } from './game-details.component';

@NgModule({
  declarations: [GameDetailsComponent],
  imports: [CommonModule, GameDetailsRoutingModule, SharedComponesModule],
})
export class GameDetailsModule {}
