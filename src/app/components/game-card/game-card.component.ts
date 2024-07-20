import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IGameOverview } from '../../interfaces/game/game-overview.interface';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
})
export class GameCardComponent {
  @Input({ required: true }) game: IGameOverview = {} as IGameOverview;

  @Output() favoriteGameEmmiter = new EventEmitter<IGameOverview>();

  @Output() selectGameEmmiter = new EventEmitter<IGameOverview>();

  onFavoriteGame() {
    this.favoriteGameEmmiter.emit(this.game);
  }

  onSelectGame() {
    this.selectGameEmmiter.emit(this.game);
  }
}
