import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IDetailedGame } from '../../../interfaces/game/detailed-game.interface';

@Component({
  selector: 'app-game-infos',
  templateUrl: './game-infos.component.html',
  styleUrl: './game-infos.component.scss',
})
export class GameInfosComponent implements OnChanges {
  @Input({ required: true }) game: IDetailedGame = {} as IDetailedGame;

  loading: boolean = true;

  ngOnChanges(): void {
    // atualizar carregamento quando a requisição do jogo for completa e evitar erros de leitura (Cannot read properties of undefined (reading '0'))
    // descrição somente é recebida junto a requisição de detalhes sobre o jogo
    if (this.game.description) {
      this.loading = false;
    }
  }
}
