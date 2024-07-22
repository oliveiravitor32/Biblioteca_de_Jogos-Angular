import { Injectable } from '@angular/core';
import { IGameOverview } from '../interfaces/game/game-overview.interface';
import { IGameGenre } from '../interfaces/game-genre.interface';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private homePageCaouselCache: Map<string, IGameOverview[]> = new Map<string, IGameOverview[]>();

  private genresCache: IGameGenre[] = [];

  constructor() {}

  getHomePageCaouselCache(key: string) {
    return this.homePageCaouselCache.get(key);
  }

  setHomePageCaouselCache(key: string, gameList: IGameOverview[]) {
    this.homePageCaouselCache.set(key, gameList)
  }

  getGenresCache() {
    return this.genresCache;
  }

  setGenresCache(genres: IGameGenre[]) {
    this.genresCache =  genres;
  }
}
