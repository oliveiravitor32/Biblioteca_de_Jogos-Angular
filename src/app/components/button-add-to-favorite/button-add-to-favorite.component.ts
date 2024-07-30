import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-add-to-favorite',
  templateUrl: './button-add-to-favorite.component.html',
  styleUrls: [
    './button-add-to-favorite.component.scss',
    './button-add-to-favorite.responsive.component.scss',
  ],
})
export class ButtonAddToFavoriteComponent {
  @Input({ required: true }) size: string = '';
}
