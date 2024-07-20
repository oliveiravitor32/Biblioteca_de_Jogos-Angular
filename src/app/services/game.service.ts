import { Injectable } from '@angular/core';
import { IGameOverview } from '../interfaces/game/game-overview.interface';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IGameList } from '../interfaces/game/game-list.interface';
import { IDetailedGame } from '../interfaces/game/detailed-game.interface';
import { IListGameGenres } from '../interfaces/list-game-genres.interface';

const api: string = 'https://api.rawg.io/api';
const key: string = 'fca3f14ca6b2481dbbd968ff8c91ff65';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  selectedGame: IGameOverview = {} as IGameOverview;

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

  constructor(private router: Router, private http: HttpClient) {}

  onSelectGame(selectedGame: IGameOverview): void {
    this.selectedGame = selectedGame;
    this.router.navigate(['game-details/' + selectedGame.id]);
  }

  getSelectedGame(): IGameOverview {
    return this.selectedGame;
  }

  getGameGenres(): Observable<IListGameGenres> {
    return this.http.get<IListGameGenres>(`${api}/genres?key=${key}`);
  }

  getNewGamesRealeased(): Observable<IGameList> {
    return this.http.get<IGameList>(
      `${api}/games?key=${key}&ordering=released`
    );
  }

  getPopularGames(): Observable<IGameList> {
    return this.http.get<IGameList>(`${api}/games?key=${key}`);
  }

  getRelevantGames(): IGameList[] {
    return [];
  }

  getGameDetailsById(id: number | string): Observable<IDetailedGame> {
    return this.http.get<IDetailedGame>(
      `${api}/games/${id}?key=${key}&ordering=released`
    );
  }

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
