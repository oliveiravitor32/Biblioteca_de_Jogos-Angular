import { Component } from '@angular/core';
import { CacheService } from '../../../services/cache.service';
import { GameService } from '../../../services/game.service';
import { IGameOverview } from '../../../interfaces/game/game-overview.interface';

@Component({
  selector: 'app-initial-apresentation',
  templateUrl: './initial-apresentation.component.html',
  styleUrl: './initial-apresentation.component.scss'
})
export class InitialApresentationComponent {

  newReleasedGames: IGameOverview[] = [];
  popularGames: IGameOverview[] = [];
  relevantGames: IGameOverview[] = [];
  
  ngOnInit(): void {
    this.getNewGamesReleased();
    this.getPopularGames();
    this.getRelevantGames();
  }

  onSelectGame(selectedGame: IGameOverview) {
    this.gameService.onSelectGame(selectedGame);
  }

  constructor(private gameService: GameService, private cacheService: CacheService) {}

  getNewGamesReleased() {
    if(this.cacheService.getHomePageCaouselCache("newGamesReleased") != null) {
      this.newReleasedGames = this.cacheService.getHomePageCaouselCache("newGamesReleased")!;
    } else {
      this.gameService.getNewGamesReleased().subscribe({
        next: (resp) => {
          // colocar em cache
          this.cacheService.setHomePageCaouselCache("newGamesReleased", resp.results);
          this.newReleasedGames = resp.results;
        },
      });
    }
  }

  getPopularGames() {
    if(this.cacheService.getHomePageCaouselCache("popularGames") != null) {
      this.popularGames = this.cacheService.getHomePageCaouselCache("popularGames")!;
    } else {
      this.gameService.getPopularGames().subscribe({
      next: (resp) => {
        this.cacheService.setHomePageCaouselCache("popularGames", resp.results);
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
