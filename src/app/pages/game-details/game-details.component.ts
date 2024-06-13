import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.scss',
})
export class GameDetailsComponent {
  constructor(
    private gameService: GameService,
    private _snackBar: MatSnackBar
  ) {}

  onFavoriteGame() {
    console.log('favoritou jogo');

    const isGameAlreadyFavorited = this.gameService.favoritedGames.find(
      (game) => game.id === game.id
    );

    const snackBarMessage = isGameAlreadyFavorited
      ? 'Jogo removido dos favoritos!'
      : 'Jogo adicionado aos favoritos!';

    this._snackBar.open(snackBarMessage, '', {
      duration: 1200,
    });
  }
}
