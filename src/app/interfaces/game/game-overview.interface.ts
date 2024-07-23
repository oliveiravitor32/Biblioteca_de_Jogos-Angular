import { IGamePlatforms } from '../game-platforms.interface';

export interface IGameOverview {
  id: number;
  slug: string;
  name: string;
  released: Date | undefined;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: {};
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: {};
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: Date;
  esrb_rating:
    | {
        id: number;
        slug: string;
        name: string;
      }
    | undefined;
  platforms: [IGamePlatforms];
}
