import { Component } from '@angular/core';
import { CacheService } from '../../../services/cache.service';
import { GameService } from '../../../services/game.service';
import { IGameOverview } from '../../../interfaces/game/game-overview.interface';

import { IGameQueryParams } from '../../../interfaces/query-params-and-game-list-type/game-query-params.interface';
import { EGameListType } from '../../../interfaces/query-params-and-game-list-type/enum-game-list-type.interface';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-initial-apresentation',
  templateUrl: './initial-apresentation.component.html',
  styleUrl: './initial-apresentation.component.scss',
})
export class InitialApresentationComponent {
  newReleasedGames: IGameOverview[] = [];
  popularGames: IGameOverview[] = [];
  relevantGames: IGameOverview[] = [];

  ngOnInit(): void {
    const newGamesReleasedQueryParams: IGameQueryParams = {
      query_type: EGameListType.NEW_GAMES_RELEASED,
      params: new HttpParams().appendAll({
        page_size: '32',
        ordering: '-released',
        metacritic: '70, 100',
      }),
    };
    const popularGamesQueryParams: IGameQueryParams = {
      query_type: EGameListType.POPULAR_GAMES,
      params: new HttpParams().append('page_size', '32'),
    };

    this.newReleasedGames = this.getGamesFromCache(newGamesReleasedQueryParams);
    if (this.newReleasedGames.length === 0) {
      this.getGamesFromGameService(newGamesReleasedQueryParams).subscribe({
        next: (resp) => {
          //salva em cache
          this.cacheService.setHomePageCarouselCache(
            newGamesReleasedQueryParams.query_type,
            resp.results
          );
          this.newReleasedGames = resp.results;
        },
      });
    }

    this.popularGames = this.getGamesFromCache(popularGamesQueryParams);
    if (this.popularGames.length === 0) {
      this.getGamesFromGameService(popularGamesQueryParams).subscribe({
        next: (resp) => {
          //salva em cache
          this.cacheService.setHomePageCarouselCache(
            popularGamesQueryParams.query_type,
            resp.results
          );
          this.popularGames = resp.results;
        },
      });
    }
  }

  onSelectGame(selectedGame: IGameOverview) {
    this.gameService.onSelectGame(selectedGame);
  }

  constructor(
    private gameService: GameService,
    private cacheService: CacheService
  ) {}

  getRelevantGames() {
    // TODO
    //this.gameService.getRelevantGames();
  }

  getGamesFromCache(queryParams: IGameQueryParams) {
    const cacheData = this.cacheService.getHomePageCarouselCache(
      queryParams.query_type
    );
    if (cacheData) {
      return cacheData;
    }
    return [];
  }

  getGamesFromGameService(queryParams: IGameQueryParams) {
    return this.gameService.getGamesByParams(queryParams.params);
  }
}
