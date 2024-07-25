import { Component, Input } from '@angular/core';
import { IDetailedGame } from '../../../interfaces/game/detailed-game.interface';

@Component({
  selector: 'app-game-infos',
  templateUrl: './game-infos.component.html',
  styleUrl: './game-infos.component.scss',
})
export class GameInfosComponent {
  @Input({ required: true }) game: IDetailedGame = {} as IDetailedGame;
}
