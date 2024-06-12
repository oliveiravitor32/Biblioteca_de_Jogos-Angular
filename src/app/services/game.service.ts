import { Injectable } from '@angular/core';
import { IGameOverview } from '../interfaces/game/game-overview.interface';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  selectedGame: IGameOverview = {
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

  favoritedGames: IGameOverview[] = [];

  constructor() {}

  onSelectGame(selectedGame: IGameOverview): void {
    this.selectedGame = selectedGame;
  }

  getGameGenres() {}

  getNewGamesRealeased(): IGameOverview[] {
    return [];
  }

  getPopularGames(): IGameOverview[] {
    return [];
  }

  getRelevantGames(): IGameOverview[] {
    return [];
  }
}