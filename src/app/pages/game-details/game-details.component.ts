import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IGameOverview } from '../../interfaces/game/game-overview.interface';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.scss',
})
export class GameDetailsComponent implements OnInit {
  game: IGameOverview = {
    id: 0,
    name: '....',
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

  loading: boolean = false;

  constructor(
    private gameService: GameService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.game = this.gameService.getSelectedGame();

    //adicionar subscribe para colocar spinner de loading enquando processa a requisiçõa
    this.gameService.getGameDetailsById(this.game.id);
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
