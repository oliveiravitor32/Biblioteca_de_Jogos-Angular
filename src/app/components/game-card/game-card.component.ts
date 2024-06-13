import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IGameOverview } from '../../interfaces/game/game-overview.interface';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
})
export class GameCardComponent {
  @Input({ required: true }) game: IGameOverview = {
    id: 0,
    name: '',
    released: undefined,
    background_image: '',
    metacritic: 0,
    platforms: [
      {
        platform: {
          id: 0,
          slug: '',
          name: '',
        },
        released_at: '',
        requirements: {
          minimum: '',
          recommended: '',
        },
      },
    ],
    description: '',
    website: '',
    game_series_count: 0,
    screenshots_count: 0,
    movies_count: 0,
  };

  @Output() favoriteGameEmmiter = new EventEmitter<IGameOverview>();

  @Output() selectGameEmmiter = new EventEmitter<IGameOverview>();

  onFavoriteGame() {
    this.favoriteGameEmmiter.emit(this.game);
  }

  onSelectGame() {
    this.selectGameEmmiter.emit(this.game);
  }
}
