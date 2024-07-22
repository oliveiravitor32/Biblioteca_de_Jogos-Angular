import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../../services/game.service';
import { IGameOverview } from '../../../interfaces/game/game-overview.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-games',
  templateUrl: './search-games.component.html',
  styleUrl: './search-games.component.scss'
})
export class SearchGamesComponent implements OnInit, OnDestroy{

  gamesFound: IGameOverview[] = [];
  private routeQueryMapSubscription!: Subscription;

  loading: boolean = false;

  constructor(private route: ActivatedRoute, private gameService: GameService){}

  onSelectGame(selectedGame: IGameOverview) {
    this.gameService.onSelectGame(selectedGame);
  }

  ngOnInit(): void {
    this.routeQueryMapSubscription = this.route.queryParamMap.subscribe({
      next: (resp) => {
        // aciona loading
        this.loading = true;
        this.gameService.getGamesByName(this.route.snapshot.queryParamMap.get("game")!).subscribe({
          next: (resp) => {
            // finaliza loading
            this.loading = false
            this.gamesFound = resp.results;
          }
        });
      }
    })
   
  }

  ngOnDestroy(): void {
    this.routeQueryMapSubscription.unsubscribe();
  }
}
