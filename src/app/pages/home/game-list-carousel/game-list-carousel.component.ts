import {
  AfterViewInit,
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
export class GameListCarouselComponent implements AfterViewInit {
  @ViewChild('carouselInner') carouselInnerEl!: ElementRef<HTMLDivElement>;
  @ViewChild('carouselItem') carouselItemEl!: ElementRef<HTMLDivElement>;

  @Input() gameList: IGameOverview[] = [];

  @Output()
  selectGameEmmiter = new EventEmitter<IGameOverview>();

  onSelectGame(game: IGameOverview): void {
    this.selectGameEmmiter.emit(game);
  }

  ngAfterViewInit(): void {
    this.itemWidth = this.carouselItemEl.nativeElement.offsetWidth;

    this.totalItems = this.gameList.length;
  }

  itemWidth: number = 0;
  totalItems: number = 0;

  visibleItems: number = 4;
  currentIndex: number = 0;

  displacement: number = 0;

  previousSlide() {
    //tratamento para momento em que o movimento passaria do limite do array
    if (this.currentIndex - this.visibleItems < 0) {
      //tratamento para lidar com os index 1 2 3, pois o slide normalmente passaria do limite e iria para o final
      if (this.currentIndex !== 0) {
        console.log(this.currentIndex);
        this.currentIndex = 0;
        this.displacement = this.itemWidth * this.currentIndex;
        //tratamento para lidar com limite normal de movimentação do slide indo para o final da lista
      } else {
        this.currentIndex = this.totalItems;
        this.displacement = this.itemWidth * this.totalItems;
      }
      // tratamento normal para voltar slide
    } else {
      this.displacement -= this.itemWidth * this.visibleItems;
      this.currentIndex -= this.visibleItems;
    }

    this.carouselInnerEl.nativeElement.style.transform = `translateX(${-this
      .displacement}px)`;
  }

  nextSlide() {
    // tratamento para vefiricar quando a movimentação do slide passaria do limite
    if (this.currentIndex + this.visibleItems > this.totalItems) {
      this.currentIndex = 0;
      this.displacement = 0;

      // tratamento normal para movimentação do slide
    } else {
      this.displacement += this.itemWidth * this.visibleItems;
      this.currentIndex += this.visibleItems;
    }

    this.carouselInnerEl.nativeElement.style.transform = `translateX(${-this
      .displacement}px)`;
  }
}
