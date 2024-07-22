import { Injectable } from '@angular/core';
import { IGameOverview } from '../interfaces/game/game-overview.interface';
import { IGameGenre } from '../interfaces/game-genre.interface';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private homePageCache: Map<string, IGameOverview[]> = new Map<string, IGameOverview[]>();

  private genresCache: IGameGenre[] = [];

  constructor() {}

  getHomePageCache(key: string) {
    return this.homePageCache.get(key);
  }

  setHomePageCache(key: string, gameList: IGameOverview[]) {
    this.homePageCache.set(key, gameList)
  }

  getGenresCache() {
    return this.genresCache;
  }

  setGenresCache(genres: IGameGenre[]) {
    this.genresCache =  genres;
  }
}
