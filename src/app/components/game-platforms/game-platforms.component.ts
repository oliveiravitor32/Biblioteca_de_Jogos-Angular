import { Component, Input, OnInit } from '@angular/core';
import { IGamePlatform } from '../../interfaces/game/game-platform.interface';

@Component({
  selector: 'app-game-platforms',
  templateUrl: './game-platforms.component.html',
  styleUrl: './game-platforms.component.scss',
})
export class GamePlatformsComponent implements OnInit {
  @Input({ required: true }) platforms: IGamePlatform[] = {} as IGamePlatform[];

  isOnPC: boolean = false;
  isOnXbox: boolean = false;
  isOnPlaystation: boolean = false;

  ngOnInit(): void {
    for (let platform of this.platforms) {
      let formatedNameToCompare = platform.platform.name.toLowerCase();
      console.log(formatedNameToCompare);
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
