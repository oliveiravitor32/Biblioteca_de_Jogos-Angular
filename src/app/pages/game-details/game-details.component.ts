import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IDetailedGame } from '../../interfaces/game/detailed-game.interface';
import { ActivatedRoute } from '@angular/router';
import { CacheService } from '../../services/cache.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: [
    './game-details.component.scss',
    './game-details.responsive.component.scss',
  ],
})
export class GameDetailsComponent implements OnInit {
  game: IDetailedGame = {} as IDetailedGame;
  imagesToCarousel: string[] = [];

  loading: boolean = false;

  constructor(
    private readonly gameService: GameService,
    private readonly cacheService: CacheService,
    private readonly _snackBar: MatSnackBar,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loading = true;
    // informações cacheds
    if (this.cacheService.getSelectedGame() != null) {
      const selectedGame = this.cacheService.getSelectedGame();
      this.game.name = selectedGame.name;
      this.game.background_image = selectedGame.background_image;
      this.game.platforms = selectedGame.platforms;
    }

    const gameId = this.route.snapshot.paramMap.get('id');

    this.gameService.getGameDetailsById(gameId!).subscribe({
      next: (resp) => {
        this.game = resp;
        this.imagesToCarousel = [
          resp.background_image,
          resp.background_image_additional,
        ];
        this.getGameScreenshots();
        this.loading = false;
      },
    });
  }

  onToggleFavoriteGame() {
    const addedSuccessfully = this.cacheService.updateFavoriteGames(this.game);

    const snackBarMessage = addedSuccessfully
      ? 'Jogo adicionado aos favoritos!'
      : 'Jogo removido dos favoritos!';

    this._snackBar.open(snackBarMessage, '', {
      duration: 1200,
    });
  }

  getGameScreenshots() {
    this.gameService.getScreenshotsForTheGame(this.game.id).subscribe({
      next: (resp) => {
        let getOnlyImages = [];
        for (let result of resp.results) {
          getOnlyImages.push(result.image);
        }
        this.imagesToCarousel = [...this.imagesToCarousel, ...getOnlyImages];
      },
    });
  }
}
