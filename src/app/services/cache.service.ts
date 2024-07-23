import { Injectable } from '@angular/core';
import { IGameOverview } from '../interfaces/game/game-overview.interface';
import { IGameGenre } from '../interfaces/genre/game-genre.interface';
import { EGameListType } from '../interfaces/query-params-and-game-list-type/enum-game-list-type.interface';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private homePageCarouselCache: Map<EGameListType, IGameOverview[]> = new Map<
    EGameListType,
    IGameOverview[]
  >();

  private genresCache: IGameGenre[] = [];

  constructor() {}

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
}
