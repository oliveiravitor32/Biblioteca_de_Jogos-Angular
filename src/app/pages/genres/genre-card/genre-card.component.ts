import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGameGenre } from '../../../interfaces/genre/game-genre.interface';

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: [
    './genre-card.component.scss',
    './genre-card.responsive.component.scss',
  ],
})
export class GenreCardComponent {
  @Input({ required: true }) genre!: IGameGenre;

  @Output() selectGenreEmmiter = new EventEmitter<IGameGenre>();

  onSelectGenre() {
    this.selectGenreEmmiter.emit(this.genre);
  }
}
