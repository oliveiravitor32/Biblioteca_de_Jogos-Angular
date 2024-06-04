import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IGameOverview } from '../../interfaces/game/game-overview.interface';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
})
export class GameCardComponent {
  @Input({ required: true }) gameOverview: IGameOverview = {
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

  constructor(private router: Router) {}

  navigateToGameDetailsPage() {
    this.router.navigate(['/game-details']);
  }
}
