import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { IGameOverview } from '../../../interfaces/game/game-overview.interface';

@Component({
  selector: 'app-game-list-carousel',
  templateUrl: './game-list-carousel.component.html',
  styleUrl: './game-list-carousel.component.scss',
})
export class GameListCarouselComponent {
  @ViewChild('carouselInner') carouselInnerEl!: ElementRef<HTMLDivElement>;

  @Input() gameList: IGameOverview[] = [];

  @Output()
  selectGameEmmiter = new EventEmitter<IGameOverview>();

  onSelectGame(game: IGameOverview): void {
    this.selectGameEmmiter.emit(game);
  }

  carouselInnerTranslate: number = 0;

  previousSlide() {
    if (this.carouselInnerTranslate < 0) {
      this.carouselInnerEl.nativeElement.style.transform = `translateX(${
        this.carouselInnerTranslate + 50
      }%)`;
      this.carouselInnerTranslate += 50;
    }
  }

  nextSlide() {
    this.carouselInnerEl.nativeElement.style.transform = `translateX(${
      this.carouselInnerTranslate - 50
    }%)`;
    this.carouselInnerTranslate -= 50;
  }
}
