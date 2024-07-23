import { Component, Input } from '@angular/core';
import { IGameGenre } from '../../../interfaces/genre/game-genre.interface';

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrl: './genre-card.component.scss',
})
export class GenreCardComponent {
  @Input({ required: true }) genre!: IGameGenre;
}
