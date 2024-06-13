import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { IGameOverview } from '../../interfaces/game/game-overview.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  favoriteGames: IGameOverview[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.favoriteGames = this.gameService.getFavoriteGames();
  }

  onSelectGame(selectedGame: IGameOverview) {
    this.gameService.onSelectGame(selectedGame);
  }
}
