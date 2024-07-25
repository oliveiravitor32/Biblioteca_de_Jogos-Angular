import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../../services/game.service';
import { IGameOverview } from '../../../interfaces/game/game-overview.interface';
import { Subscription } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { CacheService } from '../../../services/cache.service';

@Component({
  selector: 'app-search-games',
  templateUrl: './search-games.component.html',
  styleUrl: './search-games.component.scss',
})
export class SearchGamesComponent implements OnInit, OnDestroy {
  gamesFound: IGameOverview[] = [];
  private routeQueryMapSubscription!: Subscription;

  loading: boolean = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly cacheService: CacheService,
    private readonly gameService: GameService
  ) {}

  onSelectGame(selectedGame: IGameOverview) {
    this.cacheService.setSelectedGame(selectedGame);
  }

  ngOnInit(): void {
    this.routeQueryMapSubscription = this.route.queryParamMap.subscribe({
      next: (resp) => {
        const searchByNameField = resp.get('game') ? resp.get('game')! : '';
        const genreIdField = resp.get('genres') ? resp.get('genres')! : '';

        let params: HttpParams = new HttpParams().appendAll({
          page_size: 40,
        });
        if (searchByNameField) {
          params = params.append('search', searchByNameField);
        }
        if (genreIdField) {
          params = params.append('genres', genreIdField);
        }

        this.loading = true;
        this.gameService.getGamesByParams(params).subscribe({
          next: (resp) => {
            // finaliza loading
            this.loading = false;
            this.gamesFound = resp.results;
          },
        });
      },
    });
  }

  ngOnDestroy(): void {
    this.routeQueryMapSubscription.unsubscribe();
  }
}
