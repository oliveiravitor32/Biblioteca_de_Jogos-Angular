import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-add-to-favorite',
  templateUrl: './button-add-to-favorite.component.html',
  styleUrl: './button-add-to-favorite.component.scss',
})
export class ButtonAddToFavoriteComponent {
  @Input({ required: true }) size: string = '';
}
