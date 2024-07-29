import { Component, OnInit } from '@angular/core';
import { IGameOverview } from '../../interfaces/game/game-overview.interface';
import { CacheService } from '../../services/cache.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: [
    './favorites.component.scss',
    './favorites.responsive.component.scss',
  ],
})
export class FavoritesComponent implements OnInit {
  favoriteGames: IGameOverview[] = [];

  constructor(private readonly cacheService: CacheService) {}

  ngOnInit(): void {
    this.favoriteGames = this.cacheService.getFavoriteGames();
  }

  onSelectGame(selectedGame: IGameOverview) {
    this.cacheService.setSelectedGame(selectedGame);
  }
}
