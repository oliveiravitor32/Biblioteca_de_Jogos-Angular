import { Component, OnInit } from '@angular/core';
import { IGameOverview } from '../../interfaces/game/game-overview.interface';
import { GameService } from '../../services/game.service';
import { CacheService } from '../../services/cache.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  game: IGameOverview = {} as IGameOverview;

  newReleasedGames: IGameOverview[] = [];
  popularGames: IGameOverview[] = [];
  relevantGames: IGameOverview[] = [];

  constructor(private gameService: GameService, private cacheService: CacheService) {}

  onSelectGame(selectedGame: IGameOverview) {
    this.gameService.onSelectGame(selectedGame);
  }

  ngOnInit(): void {
    this.getNewGamesReleased();
    this.getPopularGames();
    this.getRelevantGames();
  }

  getNewGamesReleased() {
    if(this.cacheService.getHomePageCache("newGamesReleased") != null) {
      this.newReleasedGames = this.cacheService.getHomePageCache("newGamesReleased")!;
    } else {
      this.gameService.getNewGamesReleased().subscribe({
        next: (resp) => {
          // colocar em cache
          this.cacheService.setHomePageCache("newGamesReleased", resp.results);
          this.newReleasedGames = resp.results;
        },
      });
    }
  }

  getPopularGames() {
    if(this.cacheService.getHomePageCache("popularGames") != null) {
      this.popularGames = this.cacheService.getHomePageCache("popularGames")!;
    } else {
      this.gameService.getPopularGames().subscribe({
      next: (resp) => {
        this.cacheService.setHomePageCache("popularGames", resp.results);
        this.popularGames = resp.results;
      },
    });
    }
  }

  getRelevantGames() {
    //subscribe in get request to api
    this.gameService.getRelevantGames();
  }
}
