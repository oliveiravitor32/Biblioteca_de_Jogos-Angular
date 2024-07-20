import { Component, OnInit } from '@angular/core';
import { IGameOverview } from '../../interfaces/game/game-overview.interface';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  game: IGameOverview = {} as IGameOverview;

  loading: boolean = false;

  newReleasedGames: IGameOverview[] = [];

  popularGames: IGameOverview[] = [
    this.game,
    this.game,
    this.game,
    this.game,
    this.game,
  ];
  relevantGames: IGameOverview[] = [
    this.game,
    this.game,
    this.game,
    this.game,
    this.game,
  ];

  constructor(private gameService: GameService) {}

  onSelectGame(selectedGame: IGameOverview) {
    this.gameService.onSelectGame(selectedGame);
  }

  ngOnInit(): void {
    this.getNewGamesRealeased();
    this.getPopularGames();
    this.getRelevantGames();
  }

  getNewGamesRealeased() {
    //subscribe in get request to api
    this.gameService.getNewGamesRealeased().subscribe({
      next: (resp) => {
        this.newReleasedGames = resp.results;
      },
    });
  }
  getPopularGames() {
    //subscribe in get request to api
    this.gameService.getPopularGames().subscribe({
      next: (resp) => {
        this.popularGames = resp.results;
      },
    });
  }
  getRelevantGames() {
    //subscribe in get request to api
    this.gameService.getRelevantGames();
  }
}
