import { IGameGenre } from './game-genre.interface';

export interface IListGameGenres {
  count: number;
  next: string;
  previous: string;
  results: IGameGenre[];
}
