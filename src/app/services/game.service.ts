import { Injectable } from '@angular/core';
import { IGameOverview } from '../interfaces/game/game-overview.interface';
import { Router } from '@angular/router';
import { Observable, retry, take } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IGameListResponse } from '../interfaces/game/game-list-response.interface';
import { IDetailedGame } from '../interfaces/game/detailed-game.interface';
import { IGameGenreListResponse } from '../interfaces/genre/game-genres-list-response.interface';
import { IListGameScreenshotsResponse } from '../interfaces/list-game-screenshots-response.interface';

const API_URL: string = 'https://api.rawg.io/api';
const API_KEY: string = 'fca3f14ca6b2481dbbd968ff8c91ff65';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  selectedGame: IGameOverview = {} as IGameOverview;

  favoriteGames: IGameOverview[] = [];

  constructor(
    private readonly router: Router,
    private readonly http: HttpClient
  ) {}

  onSelectGame(selectedGame: IGameOverview): void {
    this.selectedGame = selectedGame;
    this.router.navigate(['game-details/' + selectedGame.id]);
  }

  getSelectedGame(): IGameOverview {
    return this.selectedGame;
  }

  getGameGenres(): Observable<IGameGenreListResponse> {
    return this.http
      .get<IGameGenreListResponse>(`${API_URL}/genres?key=${API_KEY}`)
      .pipe(retry(3), take(1));
  }

  getGameDetailsById(id: number | string): Observable<IDetailedGame> {
    return this.http
      .get<IDetailedGame>(`${API_URL}/games/${id}?key=${API_KEY}`)
      .pipe(retry(3), take(1));
  }

  updateFavoriteGames(gameToUpdate: IGameOverview): boolean {
    const isGameAlreadyFavorited = this.favoriteGames.find(
      (game) => game.id === gameToUpdate.id
    );

    if (!isGameAlreadyFavorited) {
      this.favoriteGames.push(gameToUpdate);
      return true;
    }
    this.favoriteGames = this.favoriteGames.filter(
      (game) => game.id !== gameToUpdate.id
    );
    return false;
  }

  getFavoriteGames(): IGameOverview[] {
    return this.favoriteGames;
  }

  getGamesByName(name: string): Observable<IGameListResponse> {
    return this.http
      .get<IGameListResponse>(`${API_URL}/games?key=${API_KEY}&search=${name}`)
      .pipe(retry(3), take(1));
  }

  getGamesByParams(params: HttpParams | undefined) {
    if (!params) {
      params = new HttpParams();
    }
    return this.http
      .get<IGameListResponse>(`${API_URL}/games?key=${API_KEY}`, {
        params,
      })
      .pipe(retry(3), take(1));
  }

  getScreenshotsForTheGame(
    id: number
  ): Observable<IListGameScreenshotsResponse> {
    return this.http
      .get<IListGameScreenshotsResponse>(
        `${API_URL}/games/${id}/screenshots?key=${API_KEY}`
      )
      .pipe(retry(3), take(1));
  }
}
