import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardGameComponent } from './card-game/card-game.component';
import { ButtonShowMoreComponent } from './button-show-more/button-show-more.component';

@NgModule({
  declarations: [HeaderComponent, CardGameComponent, ButtonShowMoreComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, CardGameComponent, ButtonShowMoreComponent],
})
export class SharedComponesModule {}
