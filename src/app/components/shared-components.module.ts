import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGameComponent } from './card-game/card-game.component';
import { ButtonShowMoreComponent } from './button-show-more/button-show-more.component';

@NgModule({
  declarations: [CardGameComponent, ButtonShowMoreComponent],
  imports: [CommonModule],
  exports: [CardGameComponent, ButtonShowMoreComponent],
})
export class SharedComponesModule {}
