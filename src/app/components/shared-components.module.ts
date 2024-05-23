import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonShowMoreComponent } from './button-show-more/button-show-more.component';
import { GameCardComponent } from './game-card/game-card.component';

@NgModule({
  declarations: [GameCardComponent, ButtonShowMoreComponent],
  imports: [CommonModule],
  exports: [GameCardComponent, ButtonShowMoreComponent],
})
export class SharedComponesModule {}
