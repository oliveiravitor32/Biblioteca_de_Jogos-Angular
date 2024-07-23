import { IGameGenre } from './game-genre.interface';

export interface IGameGenreListResponse {
  count: number;
  next: string;
  previous: string;
  results: IGameGenre[];
}
