import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [
    './carousel.component.scss',
    './carousel.responsive.component.scss',
  ],
})
export class CarouselComponent {
  @Input({ required: true }) images: string[] = [];

  currentIndex = 0;

  nextSlide() {
    const LIMIT_REACHED = this.currentIndex === this.images.length - 1;
    if (LIMIT_REACHED) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }
  previousSlide() {
    const LIMIT_REACHED = this.currentIndex - 1 < 0;
    if (LIMIT_REACHED) {
      this.currentIndex = this.images.length - 1;
    } else {
      this.currentIndex--;
    }
  }
}
