import { Injectable } from '@angular/core';
import { IGameOverview } from '../interfaces/game/game-overview.interface';
import { Router } from '@angular/router';

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

  favoriteGames: IGameOverview[] = [
    /*
    {
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
    }, */
  ];

  constructor(private router: Router) {}

  onSelectGame(selectedGame: IGameOverview): void {
    this.selectedGame = selectedGame;
    this.router.navigate(['game-details/' + selectedGame.id]);
  }

  getSelectedGame(): IGameOverview {
    return this.selectedGame;
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

  getGameDetailsById(id: number) {}

  updateFavoriteGames(gameToUpdate: IGameOverview): boolean {
    const isGameAlreadyFavorited = this.favoriteGames.find(
      (game) => game.id === gameToUpdate.id
    );
    if (!isGameAlreadyFavorited) {
      this.favoriteGames.push(gameToUpdate);
      return true;
    } else {
      this.favoriteGames = this.favoriteGames.filter(
        (game) => game.id !== gameToUpdate.id
      );
    }
    return false;
  }

  getFavoriteGames(): IGameOverview[] {
    return this.favoriteGames;
  }
}
