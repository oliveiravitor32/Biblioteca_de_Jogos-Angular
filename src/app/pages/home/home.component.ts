import { Component } from '@angular/core';
import { IGameOverview } from '../../interfaces/game/game-overview.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  game: IGameOverview = {
    id: 0,
    name: 'Final Fantasy VII',
    released: undefined,
    background_image: '',
    metacritic: 9.8,
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
}
