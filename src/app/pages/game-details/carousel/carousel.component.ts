import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  // Tratamento básico para inserir dados no carrosel!
  @Input({ required: true }) cachedImages: string[] = [];
}
