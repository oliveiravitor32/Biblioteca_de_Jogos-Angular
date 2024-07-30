import { Component, Input, OnInit } from '@angular/core';
import { IGamePlatform } from '../../interfaces/game/game-platform.interface';

@Component({
  selector: 'app-game-platforms',
  templateUrl: './game-platforms.component.html',
  styleUrls: [
    './game-platforms.component.scss',
    './game-platforms.responsive.component.scss',
  ],
})
export class GamePlatformsComponent implements OnInit {
  @Input({ required: true }) platforms: IGamePlatform[] = {} as IGamePlatform[];

  isOnPC: boolean = false;
  isOnXbox: boolean = false;
  isOnPlaystation: boolean = false;

  ngOnInit(): void {
    for (let platform of this.platforms) {
      let formatedNameToCompare = platform.platform.name.toLowerCase();
      if (formatedNameToCompare.includes('pc')) {
        this.isOnPC = true;
      }
      if (formatedNameToCompare.includes('playstation')) {
        this.isOnPlaystation = true;
      }
      if (formatedNameToCompare.includes('xbox')) {
        this.isOnXbox = true;
      }
    }
  }
}
