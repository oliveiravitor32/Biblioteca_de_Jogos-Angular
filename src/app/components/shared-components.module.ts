import { TitleDescriptionGameComponent } from './title-description-game/title-description-game.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonShowMoreComponent } from './button-show-more/button-show-more.component';
import { GameCardComponent } from './game-card/game-card.component';
import { GamePlatformsComponent } from './game-platforms/game-platforms.component';
import { ButtonAddToFavoriteComponent } from './button-add-to-favorite/button-add-to-favorite.component';

@NgModule({
  declarations: [
    GameCardComponent,
    ButtonShowMoreComponent,
    TitleDescriptionGameComponent,
    GamePlatformsComponent,
    ButtonAddToFavoriteComponent,
  ],
  imports: [CommonModule],
  exports: [
    GameCardComponent,
    ButtonShowMoreComponent,
    TitleDescriptionGameComponent,
    GamePlatformsComponent,
    ButtonAddToFavoriteComponent,
  ],
})
export class SharedComponentsModule {}
