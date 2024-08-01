import { Injectable } from '@angular/core';
import { IGameOverview } from '../interfaces/game/game-overview.interface';
import { IGameGenre } from '../interfaces/genre/game-genre.interface';
import { EGameListType } from '../interfaces/query-params-and-game-list-type/enum-game-list-type.interface';
import { Router } from '@angular/router';
import { IGamePlatform } from '../interfaces/game/game-platform.interface';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private homePageCarouselCache: Map<EGameListType, IGameOverview[]> = new Map<
    EGameListType,
    IGameOverview[]
  >();

  private genresCache: IGameGenre[] = [];

  private selectedGame: IGameOverview = {} as IGameOverview;

  private favoriteGames: IGameOverview[] = [];

  constructor(private router: Router) {}

  getHomePageCarouselCache(queryType: EGameListType) {
    return this.homePageCarouselCache.get(queryType);
  }

  setHomePageCarouselCache(
    queryType: EGameListType,
    gameList: IGameOverview[]
  ) {
    this.homePageCarouselCache.set(queryType, gameList);
  }

  getGenresCache() {
    return this.genresCache;
  }

  setGenresCache(genres: IGameGenre[]) {
    this.genresCache = genres;
  }

  getSelectedGame(): IGameOverview {
    return this.selectedGame;
  }

  setSelectedGame(selectedGame: IGameOverview): void {
    this.selectedGame = selectedGame;
    this.router.navigate(['game-details/' + selectedGame.id]);
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
}
