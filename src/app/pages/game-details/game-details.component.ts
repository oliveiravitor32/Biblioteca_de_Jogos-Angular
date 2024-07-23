import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IDetailedGame } from '../../interfaces/game/detailed-game.interface';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.scss',
})
export class GameDetailsComponent implements OnInit {
  game: IDetailedGame = {} as IDetailedGame;
  cachedImagesForCarrousel: string[] = [];

  loading: boolean = false;

  constructor(
    private readonly gameService: GameService,
    private readonly _snackBar: MatSnackBar,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loading = true;
    // informações cacheds
    if (this.gameService.getSelectedGame() != null) {
      const selectedGame = this.gameService.getSelectedGame();

      this.game.name = selectedGame.name;
      this.game.background_image = selectedGame.background_image;
      this.game.platforms = selectedGame.platforms;
    }

    const gameId = this.route.snapshot.paramMap.get('id');

    this.gameService.getGameDetailsById(gameId!).subscribe({
      next: (resp) => {
        this.game = resp;
        this.cachedImagesForCarrousel = [
          resp.background_image,
          resp.background_image_additional,
        ];
        this.loading = false;
      },
    });
  }

  onToggleFavoriteGame() {
    const addedSuccessfully = this.gameService.updateFavoriteGames(this.game);

    const snackBarMessage = addedSuccessfully
      ? 'Jogo adicionado aos favoritos!'
      : 'Jogo removido dos favoritos!';

    this._snackBar.open(snackBarMessage, '', {
      duration: 1200,
    });
  }
}
