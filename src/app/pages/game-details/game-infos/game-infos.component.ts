import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IDetailedGame } from '../../../interfaces/game/detailed-game.interface';

@Component({
  selector: 'app-game-infos',
  templateUrl: './game-infos.component.html',
  styleUrls: [
    './game-infos.component.scss',
    './game-infos.responsive.component.scss',
  ],
})
export class GameInfosComponent implements OnChanges {
  @Input({ required: true }) game: IDetailedGame = {} as IDetailedGame;

  loading: boolean = true;

  enablePCRequirements: boolean = true;

  minimunRequerimentsForPC: string = '';
  recommendedRequerimentsForPC: string = '';

  ngOnChanges(): void {
    // atualizar carregamento quando a requisição do jogo for completa e evitar erros de leitura (Cannot read properties of undefined (reading '0'))
    // descrição somente é recebida junto a requisição de detalhes sobre o jogo
    if (this.game.description) {
      // Verificar existência da plataforma PC no jogo selecionado
      for (let platform of this.game.platforms) {
        const isOnPc = platform.platform.name.toLowerCase().includes('pc');
        if (isOnPc) {
          this.enablePCRequirements = true;
          this.minimunRequerimentsForPC = platform.requirements.minimum;
          this.recommendedRequerimentsForPC = platform.requirements.recommended;
        }
      }

      this.loading = false;
    }
  }
}
