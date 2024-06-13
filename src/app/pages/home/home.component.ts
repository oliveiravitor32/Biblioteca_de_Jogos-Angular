import { Component, OnInit } from '@angular/core';
import { IGameOverview } from '../../interfaces/game/game-overview.interface';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  game: IGameOverview = {
    id: 0,
    name: 'Final Fantasy VII',
    released: undefined,
    background_image: '',
    metacritic: 9.8,
    platforms: [
      {
        platform: {
          id: 0,
          slug: '',
          name: '',
        },
        released_at: '',
        requirements: {
          minimum: '',
          recommended: '',
        },
      },
    ],
    description: '',
    website: '',
    game_series_count: 0,
    screenshots_count: 0,
    movies_count: 0,
  };

  newReleasedGames: IGameOverview[] = [
    this.game,
    this.game,
    this.game,
    this.game,
    this.game,
  ];
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

  constructor(private gameService: GameService, private router: Router) {}

  onSelectGame(selectedGame: IGameOverview) {
    console.log('selecionou jogo');
    this.gameService.onSelectGame(selectedGame);

    this.router.navigate(['game-details/' + selectedGame.id]);
  }

  ngOnInit(): void {
    this.getNewGamesRealeased();
    this.getPopularGames();
    this.getRelevantGames();
  }

  getNewGamesRealeased() {
    //subscribe in get request to api
    this.gameService.getNewGamesRealeased();
  }
  getPopularGames() {
    //subscribe in get request to api
    this.gameService.getPopularGames();
  }
  getRelevantGames() {
    //subscribe in get request to api
    this.gameService.getRelevantGames();
  }
}
