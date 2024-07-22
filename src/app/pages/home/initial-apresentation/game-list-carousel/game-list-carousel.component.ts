import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { IGameOverview } from '../../../../interfaces/game/game-overview.interface';


@Component({
  selector: 'app-game-list-carousel',
  templateUrl: './game-list-carousel.component.html',
  styleUrl: './game-list-carousel.component.scss',
})
export class GameListCarouselComponent {
  @ViewChild('carouselInner') carouselInnerEl!: ElementRef<HTMLDivElement>;
  @ViewChild('carouselItem') carouselItemEl!: ElementRef<HTMLDivElement>;

  private _gameList: IGameOverview[] = [];
  totalItems: number = 0;
  visibleItems: number = 4;
  currentIndex: number = 0;

  displacement: number = 0;

  @Input() set gameList(value: IGameOverview[]) {
    this._gameList = value;

    this.totalItems = value.length;
  }

  get gameList(): IGameOverview[] {
    return this._gameList;
  }

  @Output()
  selectGameEmmiter = new EventEmitter<IGameOverview>();

  onSelectGame(game: IGameOverview): void {
    this.selectGameEmmiter.emit(game);
  }

  previousSlide() {
    const itemWidth = this.carouselItemEl.nativeElement.offsetWidth;
    //tratamento para momento em que o movimento passaria do limite do array
    if (this.currentIndex - this.visibleItems < 0) {
      //tratamento para lidar com os index 1 2 3, pois o slide normalmente passaria do limite e iria para o final
      if (this.currentIndex !== 0) {
        this.currentIndex = 0;
        this.displacement = itemWidth * this.currentIndex;
        //tratamento para lidar com limite normal de movimentação do slide indo para o final da lista
      } else {
        this.currentIndex = this.totalItems;
        this.displacement = itemWidth * this.totalItems;
      }
      // tratamento normal para voltar slide
    } else {
      this.displacement -= itemWidth * this.visibleItems;
      this.currentIndex -= this.visibleItems;
    }

    this.carouselInnerEl.nativeElement.style.transform = `translateX(${-this
      .displacement}px)`;
  }

  nextSlide() {
    const itemWidth = this.carouselItemEl.nativeElement.offsetWidth;
    // tratamento para vefiricar quando a movimentação do slide passaria do limite
    if (this.currentIndex + this.visibleItems > this.totalItems) {
      this.currentIndex = 0;
      this.displacement = 0;

      // tratamento normal para movimentação do slide
    } else {
      this.displacement += itemWidth * this.visibleItems;
      this.currentIndex += this.visibleItems;
    }

    this.carouselInnerEl.nativeElement.style.transform = `translateX(${-this
      .displacement}px)`;
  }
}
