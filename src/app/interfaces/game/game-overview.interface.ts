import { IPlatforms } from '../game-platforms.interface';

export interface IGameOverview {
  id: number;
  name: string;
  released: Date | undefined;
  background_image: string;
  metacritic: number;
  platforms: [IPlatforms];
  description: string;
  website: string;
  game_series_count: number;
  screenshots_count: number;
  movies_count: number;
}
